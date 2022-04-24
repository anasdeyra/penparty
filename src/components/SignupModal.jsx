import { Button, Text, Stack } from "@mantine/core";
import { useModals } from "@mantine/modals";
import { useForm } from "react-hook-form";
import { PasswordInput, EmailInput, PhoneInput, NameInput } from "./FormInputs";
import { signup, login } from "../api";
import { useMutation } from "react-query";
import authContext from "../contextes/authContext";
import { useContext } from "react";
import { showNotification, hideNotification } from "@mantine/notifications";

export default function SignupButton({ participate = false, className }) {
  const modals = useModals();

  const openContentModal = () => {
    const id = modals.openModal({
      title: <Text weight={"500"}>Create a new account</Text>,
      children: <ModalContent close={() => modals.closeModal(id)} />,
    });
  };

  return (
    <Button
      variant="gradient"
      radius={participate ? "md" : "sm"}
      sx={!participate && { height: 30 }}
      gradient={{ from: "#C92A2A", to: "#A61E4D" }}
      onClick={openContentModal}
      className={className}
      size={participate ? "xl" : "sm"}
    >
      {participate ? "Participate" : "Sign up"}
    </Button>
  );
}

function ModalContent({ close }) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    setError,
    setFocus,
  } = useForm({ mode: "onTouched" });

  const { setUser } = useContext(authContext);

  const loginQuery = useMutation("login", login, {
    onSuccess: ({ data: { user, token } }) => {
      setUser({ token, ...user });
      hideNotification("loading");
      showNotification({
        title: `Hey ${user.name}, welcome!`,
        autoClose: 5000,
        color: "red",
      });
    },
    onError: () => {
      hideNotification("loading");
      showNotification({
        title: `There was an error logging in.`,
        autoClose: 5000,
        color: "red",
      });
    },
  });

  const signupQuery = useMutation("signup", signup);

  function onSubmit({ email, password, phone, name }) {
    return new Promise((resolve) => {
      signupQuery.mutate(
        { email, password, name, phoneNumber: phone },
        {
          onSuccess: () => {
            close();
            showNotification({
              id: "loading",
              title: "Loging in",
              autoClose: 10000,
              loading: true,
              color: "red",
            });
            loginQuery.mutate({ email, password });
          },
          onError: ({
            response: {
              data: { data },
              status,
            },
          }) => {
            if (status !== 422) return;
            data.forEach(({ msg, param }, i) => {
              setError(param, { type: "server", message: msg });
              i === 0 && setFocus(param);
            });
          },
          onSettled: () => {
            resolve();
          },
        }
      );
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={"2rem"}>
        <Stack spacing={"sm"}>
          <NameInput register={register} err={errors.name} />
          <EmailInput register={register} err={errors.email} />
          <PasswordInput register={register} err={errors.password} />
          <PhoneInput register={register} err={errors.phone} />
        </Stack>
        <Button
          variant="gradient"
          gradient={{ from: "#C92A2A", to: "#A61E4D" }}
          loading={isSubmitting}
          type="submit"
        >
          Sign up
        </Button>
      </Stack>
    </form>
  );
}

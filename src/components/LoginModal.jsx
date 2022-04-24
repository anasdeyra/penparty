import { Button, createStyles, Text, Stack } from "@mantine/core";
import { useModals } from "@mantine/modals";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { PasswordInput, EmailInput } from "./FormInputs";
import authContext from "../contextes/authContext";
import { useContext } from "react";
import { showNotification } from "@mantine/notifications";
import { useMutation } from "react-query";
import { login } from "../api";

const useStyles = createStyles((theme) => ({
  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },
}));

export default function LoginButton() {
  const modals = useModals();
  const { classes } = useStyles();

  const openContentModal = () => {
    const id = modals.openModal({
      title: <Text weight={"500"}>Login to your account</Text>,
      children: <ModalContent close={() => modals.closeModal(id)} />,
    });
  };

  return (
    <Link
      to="/login"
      className={classes.link}
      onClick={(e) => {
        e.preventDefault();
        openContentModal();
      }}
      style={{ backgroundColor: "#F8F9FA" }}
    >
      Login
    </Link>
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
      close();
      setUser({ token, ...user });
      showNotification({
        title: `Hey ${user.name}, welcome!`,
        autoClose: 5000,
        color: "red",
      });
    },
    onError: () => {
      showNotification({
        title: `There was an error logging in.`,
        autoClose: 5000,
        color: "red",
      });
    },
  });

  function onSubmit(data) {
    return new Promise((resolve) => {
      loginQuery.mutate(data, { onSettled: resolve });
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={"2rem"}>
        <Stack spacing={"sm"}>
          <EmailInput register={register} err={errors.email} />
          <PasswordInput register={register} err={errors.password} />
        </Stack>
        <Button
          variant="gradient"
          gradient={{ from: "#C92A2A", to: "#A61E4D" }}
          loading={isSubmitting}
          type="submit"
        >
          Login
        </Button>
      </Stack>
    </form>
  );
}

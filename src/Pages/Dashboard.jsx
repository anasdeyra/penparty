import React, { useContext } from "react";
import {
  Paper,
  createStyles,
  Tabs,
  Text,
  Stack,
  Title,
  Button,
} from "@mantine/core";
import { useMutation } from "react-query";
import { useForm } from "react-hook-form";
import { createTeam, joinTeam } from "../api";
import authContext from "../contextes/authContext";
import {
  TeamCodeInput,
  TeamNameInput,
  TShirtSizeInput,
} from "../components/FormInputs";
import { showNotification } from "@mantine/notifications";
import { MdCheck, MdClear } from "react-icons/md";
import { useClipboard } from "@mantine/hooks";

const IMAGE = `url(${process.env.PUBLIC_URL}/bg2.jpg)`;
const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: "95vh",
    backgroundSize: "cover",
    backgroundImage: IMAGE,
  },

  form: {
    background: theme.colors.gray[0],
    borderRight: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
    minHeight: "95vh",
    maxWidth: 450,
    paddingTop: 80,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: "100%",
    },
  },
}));

export default function Dashboard() {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        <Tabs grow color={"red"} tabPadding={"md"}>
          <Tabs.Tab
            label={
              <Text size="md" weight={"500"}>
                Create a team
              </Text>
            }
          >
            <CreateTeam />
          </Tabs.Tab>
          <Tabs.Tab
            label={
              <Text size="md" weight={"500"}>
                Join a team
              </Text>
            }
          >
            <JoinTeam />
          </Tabs.Tab>
        </Tabs>
      </Paper>
    </div>
  );
}

function CreateTeam() {
  const clipboard = useClipboard();
  const {
    user: { token },
  } = useContext(authContext);
  const {
    formState: { isSubmitting, errors },
    register,
    handleSubmit,
  } = useForm();
  const { mutate } = useMutation("createTeam", (data) => {
    return createTeam(token, data);
  });

  function onSubmit(data) {
    return new Promise((resolve) => {
      mutate(data, {
        onSuccess: ({ data: { teamLink } }) => {
          clipboard.copy(teamLink);
          showNotification({
            color: "red",
            title: "Your team was created successfully!",
            autoClose: false,
            icon: <MdCheck />,
            message: (
              <p>
                <span style={{ fontWeight: "500", color: "#C92A2A" }}>
                  {teamLink}
                </span>{" "}
                is your team code and it's copied into your clipboard!
              </p>
            ),
          });
        },
        onError: ({ response: { data } }) => {
          showNotification({
            color: "red",
            title: "an error occured.",
            autoClose: 5000,
            icon: <MdClear />,
            message: data,
          });
        },
        onSettled: () => {
          resolve();
        },
      });
    });
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={"xl"}>
        <Title>Create a team</Title>
        <Stack>
          <TeamNameInput register={register} err={errors.teamName} />
          <TShirtSizeInput register={register} err={errors.tShirt} />
        </Stack>
        <Button
          sx={{ marginTop: "1rem" }}
          type="submit"
          gradient={{ from: "#C92A2A", to: "#A61E4D" }}
          variant="gradient"
          loading={isSubmitting}
        >
          Create
        </Button>
      </Stack>
    </form>
  );
}

function JoinTeam() {
  const {
    user: { token },
  } = useContext(authContext);
  const {
    formState: { isSubmitting, errors },
    register,
    handleSubmit,
  } = useForm();
  const { mutate } = useMutation("createTeam", (data) => {
    return joinTeam(token, data);
  });

  function onSubmit(data) {
    return new Promise((resolve) => {
      mutate(
        { ...data, teamName: "youssef ya jabri" },
        {
          onSuccess: ({ data }) => {
            if (data === "Team not found !")
              showNotification({
                color: "red",
                title: "Invalid team code code.",
                autoClose: 5000,
                icon: <MdClear />,
              });
            else
              showNotification({
                color: "red",
                title: "Joined team successfully!",
                autoClose: 5000,
                icon: <MdCheck />,
              });
          },
          onError: ({ response: { data } }) => {
            showNotification({
              color: "red",
              title: "an error occured.",
              autoClose: 5000,
              icon: <MdClear />,
              message: data,
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
      <Stack spacing={"xl"}>
        <Title>Join a team</Title>
        <Stack>
          <TeamCodeInput register={register} err={errors.teamLink} />
          <TShirtSizeInput register={register} err={errors.tShirt} />
        </Stack>
        <Button
          sx={{ marginTop: "1rem" }}
          type="submit"
          gradient={{ from: "#C92A2A", to: "#A61E4D" }}
          variant="gradient"
          loading={isSubmitting}
        >
           Join 
        </Button>
      </Stack>
    </form>
  );
}

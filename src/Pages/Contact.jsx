import React, { useContext } from "react";
import {
  createStyles,
  Text,
  Title,
  SimpleGrid,
  TextInput,
  Textarea,
  Button,
  Group,
  ActionIcon,
  Stack,
  LoadingOverlay,
} from "@mantine/core";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdAlternateEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { useMutation } from "react-query";
import { showNotification } from "@mantine/notifications";
import { MdCheck, MdClear } from "react-icons/md";
import { contact } from "../api";
import authContext from "../contextes/authContext";
import { useForm } from "react-hook-form";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    width: "80%",
    margin: "2rem auto 2rem auto",
    minHeight: 400,
    boxSizing: "border-box",
    backgroundImage: `linear-gradient(20deg, ${theme.colors.red[9]} 0%, ${theme.colors.pink[9]} 100%)`,
    borderRadius: theme.radius.md,
    padding: theme.spacing.xl * 2.5,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      padding: theme.spacing.sm * 1.5,
      width: "95%",
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    color: theme.white,
    lineHeight: 1,
  },

  description: {
    color: theme.colors.red[0],
    maxWidth: 300,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: "100%",
    },
  },

  form: {
    backgroundColor: theme.white,
    padding: theme.spacing.xl,
    borderRadius: theme.radius.md,
    boxShadow: theme.shadows.lg,
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      padding: theme.spacing.xl,
    },
  },

  social: {
    color: theme.white,

    "&:hover": {
      color: theme.colors.red[1],
    },
  },

  input: {
    backgroundColor: theme.white,
    borderColor: theme.colors.gray[4],
    color: theme.black,

    "&::placeholder": {
      color: theme.colors.gray[5],
    },
  },

  inputLabel: {
    color: theme.black,
  },

  control: {
    backgroundColor: theme.colors.red[6],
  },
}));

const social = [
  [FaFacebook, "https://www.facebook.com/PenParty2"],
  [FaInstagram, "https://www.instagram.com/penparty_/"],
  [FaYoutube, "#"],
];

export default function Contact() {
  const { handleSubmit, register } = useForm();
  const { classes } = useStyles();
  const { mutate, isLoading } = useMutation("contact", contact, {
    onSuccess: () => {
      showNotification({
        title: "Your message was sent sucessfully!",
        autoClose: 5000,
        color: "red",
        icon: <MdCheck />,
      });
    },
    onError: () => {
      showNotification({
        title: "there was an error sending your message",
        autoClose: 5000,
        color: "red",
        icon: <MdClear />,
      });
    },
  });

  const icons = social.map(([Icon, link], index) => (
    <ActionIcon
      component={"a"}
      target="_blank"
      href={link}
      key={index}
      size={28}
      className={classes.social}
      variant="transparent"
    >
      <Icon size={22} />
    </ActionIcon>
  ));

  return (
    <form onSubmit={handleSubmit(mutate)} className={classes.wrapper}>
      <LoadingOverlay loaderProps={{ color: "red" }} visible={isLoading} />
      <SimpleGrid
        cols={2}
        spacing={50}
        breakpoints={[{ maxWidth: "sm", cols: 1 }]}
      >
        <Stack justify={"space-between"} spacing={0}>
          <div>
            <Title className={classes.title}>Contact us</Title>
            <Text className={classes.description} mt="sm" mb={30}>
              We're open for any suggestion or just to have a chat.
            </Text>
            <Info />
          </div>
          <Group sx={{ justifySelf: "flex-end" }} mt="xl">
            {icons}
          </Group>
        </Stack>
        <div className={classes.form}>
          <TextInput
            label="Email"
            placeholder="your@email.com"
            required
            classNames={{ input: classes.input, label: classes.inputLabel }}
            {...register("email")}
          />
          <TextInput
            {...register("name")}
            label="Name"
            required
            placeholder="Rick & Morty"
            mt="md"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <Textarea
            required
            label="Your message"
            placeholder="PenParty is awesome!"
            minRows={4}
            mt="md"
            classNames={{ input: classes.input, label: classes.inputLabel }}
            {...register("msg")}
          />

          <Group position="right" mt="md">
            <Button
              type="submit"
              variant="gradient"
              gradient={{ from: "#C92A2A", to: "#A61E4D" }}
              loading={isLoading}
            >
              Send message
            </Button>
          </Group>
        </div>
      </SimpleGrid>
    </form>
  );
}

function Info() {
  const info = [
    {
      label: "Email",
      text: "syrine.sfar@edu.isetcom.tn",
      Icon: MdAlternateEmail,
    },
    {
      label: "Phone",
      text: "+216 52 265 078",
      Icon: MdPhone,
    },
    {
      label: "Location",
      text: "ISET'COM",
      Icon: MdLocationOn,
    },
  ];
  return (
    <Stack>
      {info.map(({ label, Icon, text }, i) => (
        <Group key={i} sx={{ color: "white" }}>
          <Icon size={28} />
          <Stack spacing={0}>
            <Text weight={"500"}>{label}</Text>
            <Text>{text}</Text>
          </Stack>
        </Group>
      ))}
    </Stack>
  );
}

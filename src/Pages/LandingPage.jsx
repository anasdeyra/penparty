import React from "react";
import {
  createStyles,
  Overlay,
  Container,
  Title,
  Button,
  Text,
} from "@mantine/core";
import SignupButton from "../components/SignupModal";

const useStyles = createStyles((theme) => ({
  hero: {
    position: "relative",
    backgroundImage: `url(${process.env.PUBLIC_URL}/banner.jpg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  overlay: { backdropFilter: "blur(2px)" },

  container: {
    height: 700,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingBottom: theme.spacing.xl * 6,
    zIndex: 1,
    position: "relative",

    [theme.fn.smallerThan("sm")]: {
      height: 500,
      paddingBottom: theme.spacing.xl * 3,
    },
  },

  title: {
    color: theme.white,
    fontSize: 96,
    fontWeight: 900,
    lineHeight: 1.1,

    [theme.fn.smallerThan("sm")]: {
      fontSize: 64,
      lineHeight: 1.2,
    },

    [theme.fn.smallerThan("xs")]: {
      fontSize: 48,
      lineHeight: 1.3,
    },
  },

  description: {
    color: theme.white,
    maxWidth: 600,

    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%",
      fontSize: theme.fontSizes.sm,
    },
  },

  control: {
    marginTop: theme.spacing.xl * 1.5,

    [theme.fn.smallerThan("sm")]: {
      width: "100%",
    },
  },
}));

export default function LandingPage() {
  const { classes } = useStyles();

  return (
    <div className={classes.hero}>
      <Overlay
        className={classes.overlay}
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container}>
        <Title className={classes.title}>
          <Text
            size={"xl"}
            fontFamily={"Caveat"}
            weight="400"
            sx={{
              position: "absolute",
              right: "100px",
              top: "100px",
              transform: "rotate(10deg)",
              fontFamily: "caveat",
            }}
          >
            07-08 may, 2022
          </Text>
          PenParty
          <Text
            gradient={{ from: "#C92A2A", to: "#A61E4D" }}
            variant="gradient"
          >
            brought to you by Engineers SPARK
          </Text>
        </Title>
        <Text className={classes.description} size="xl" mt="xl">
          PenParty is an event where the main goal of each team is to find as
          many vulnerabiliries as possible within a simulated enterprise network
          and provide the best recommendations to prevent them.
        </Text>

        <SignupButton participate className={classes.control} />
      </Container>
    </div>
  );
}

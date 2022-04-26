import React from "react";
import { Paper, createStyles, Title, Text } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: "95vh",
    backgroundSize: "cover",
    backgroundImage: `url(${process.env.PUBLIC_URL}/banner.jpg)`,
  },

  form: {
    borderRight: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
    minHeight: "95vh",
    maxWidth: 600,
    paddingTop: 80,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: "100%",
    },
  },

  logo: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    width: 120,
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

export default function About() {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        <Title order={1} className={classes.title} mt="md" mb={"xl"}>
          About us
        </Title>

        <Text size="lg">
          Penparty is a 24-hour challenge in cybersecurity. It will take place
          on 07/08 May 2022 The main goal of each team is to find as many
          vulnerabilities as possible within a simulated enterprise network and
          provide the best recommendations to prevent them. Different resource
          types (firewall, router, switches, access points, printers,
          surveillance cameras, web server etc.) will be included in the
          network.
        </Text>
        <br />
        <Text size="lg">
          This event will be in collaboration with the Ministry of Communication
          Technologies and the Digital Economy and the National Agency for IT
          security (ANSI). The opportunity to discover the talented ones in
          cybersecurity to evolve the consistencies of technology and cyber
          risks...
        </Text>
      </Paper>
    </div>
  );
}

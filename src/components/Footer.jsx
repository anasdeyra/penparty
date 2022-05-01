import React from "react";
import {
  createStyles,
  Container,
  Group,
  ActionIcon,
  Image,
  Text,
  Anchor,
  Divider,
} from "@mantine/core";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const useStyles = createStyles((theme) => ({
  footer: {
    background: "white",
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  links: {
    justifyContent: "flex-end",
    [theme.fn.smallerThan("xs")]: {
      marginTop: theme.spacing.md,
    },
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

export default function Footer() {
  const { classes } = useStyles();
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Group sx={{ justifyContent: "space-between" }}>
          {SPONSOR_LOGOS.map((src, i) => (
            <Image
              width={"64px"}
              src={`${process.env.PUBLIC_URL}/sponsor logos/${src}`}
              key={i}
              alt={`sponsor ${i} logo`}
            />
          ))}
        </Group>
        <Divider my={"xl"} />
        <div className={classes.container}>
          <Group>
            <Image
              width={"28px"}
              src={`${process.env.PUBLIC_URL}/favicon.png`}
              alt="logo"
            />
            <Text size="sm">
              © 2022 PenParty, all rights reserved. Website created by{" "}
              <Anchor
                color={"red"}
                target={"_blank"}
                href="https://www.facebook.com/109315376899471"
              >
                Anas Deyra
              </Anchor>{" "}
              &{" "}
              <Anchor
                color={"red"}
                target={"_blank"}
                href="https://www.facebook.com/youssef.mahersi.3"
              >
                Youssef Mahersi
              </Anchor>
              .
            </Text>
          </Group>
          <Group spacing={0} className={classes.links} position="right" noWrap>
            <ActionIcon
              component={"a"}
              target="_blank"
              href="https://www.facebook.com/PenParty2"
              size="md"
            >
              <FaFacebook size={18} />
            </ActionIcon>
            <ActionIcon
              size="md"
              component={"a"}
              target="_blank"
              href="https://www.instagram.com/penparty_/"
            >
              <FaInstagram size={18} />
            </ActionIcon>
          </Group>
        </div>
      </Container>
    </div>
  );
}

const SPONSOR_LOGOS = [
  "ansi.png",
  "avatar.png",
  "cytekia.png",
  "instadeep.png",
  "isetcom.png",
  "lbank.png",
  "oddo.png",
  "technopole.png",
  "tekup.png",
];

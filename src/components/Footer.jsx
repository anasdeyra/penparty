import React from "react";
import {
  createStyles,
  Container,
  Group,
  ActionIcon,
  Image,
  Text,
  Anchor,
} from "@mantine/core";
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

const useStyles = createStyles((theme) => ({
  footer: {
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  links: {
    [theme.fn.smallerThan("xs")]: {
      marginTop: theme.spacing.md,
    },
  },
}));

export default function Footer() {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
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
              href="https://www.facebook.com/if.you.see.this.you.arre.gay/"
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
          <ActionIcon
            size="md"
            component={"a"}
            target="_blank"
            href="https://github.com/anasdeyra"
          >
            <FaGithub size={18} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}

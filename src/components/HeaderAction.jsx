import React from "react";
import {
  createStyles,
  Menu,
  Center,
  Header,
  Container,
  Group,
  Burger,
  Image,
  Drawer,
  Stack,
  Box,
  Button,
} from "@mantine/core";
import { useBooleanToggle } from "@mantine/hooks";
import { MdExpandMore } from "react-icons/md";
import { Link } from "react-router-dom";
import LoginButton from "./LoginModal";
import SignupButton from "./SignupModal";
import { useContext } from "react";
import authContext from "../contextes/authContext";
import { showNotification } from "@mantine/notifications";
import UserCard from "./UserCard";

const HEADER_HEIGHT = 50;

const useStyles = createStyles((theme) => ({
  inner: {
    height: HEADER_HEIGHT,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    [theme.fn.smallerThan("sm")]: {
      width: "90%",
    },
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  header: {
    position: "sticky",
    top: "0px",
    boxShadow: theme.shadows.xs,
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

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

  linkLabel: {
    marginRight: 5,
  },
}));

export default function HeaderAction({ links }) {
  const { classes } = useStyles();
  const [opened, toggleOpened] = useBooleanToggle(false);
  const { user, logout } = useContext(authContext);

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu
          key={link.label}
          trigger="hover"
          delay={0}
          transitionDuration={0}
          placement="end"
          gutter={1}
          control={
            <Link
              onClick={() => {
                toggleOpened(false);
              }}
              to={link.link}
              className={classes.link}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <MdExpandMore />
              </Center>
            </Link>
          }
        >
          {menuItems}
        </Menu>
      );
    }

    return (
      <Link
        onClick={() => {
          toggleOpened(false);
        }}
        key={link.label}
        to={link.link}
        className={classes.link}
      >
        {link.label}
      </Link>
    );
  });

  return (
    <Header
      className={classes.header}
      height={HEADER_HEIGHT}
      sx={{ borderBottom: 0 }}
    >
      <Container className={classes.inner} fluid>
        <Group>
          <Burger
            opened={opened}
            onClick={toggleOpened}
            className={classes.burger}
            size="sm"
          />
          <Box to="/" component={Link}>
            <Image
              compone
              width={"28px"}
              src={`${process.env.PUBLIC_URL}/favicon.png`}
              alt="logo"
              sx={(theme) => ({
                "@media (min-width: 500px)": {
                  marginRight: "50px",
                },
              })}
            />
          </Box>
        </Group>
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>
        <Group>
          {!user ? (
            <>
              <SignupButton />
              <LoginButton />
            </>
          ) : (
            <UserCard name={user.name} />
          )}
        </Group>
      </Container>
      <Drawer
        opened={opened}
        onClose={() => toggleOpened(false)}
        padding="xl"
        size="xl"
        sx={{ fontFamily: "Segoe UI" }}
      >
        <Stack dir="vertical" spacing={5}>
          {items}
        </Stack>
      </Drawer>
    </Header>
  );
}

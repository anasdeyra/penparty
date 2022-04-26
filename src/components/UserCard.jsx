import { forwardRef, useContext } from "react";
import { MdExpandMore } from "react-icons/md";
import {
  Group,
  Avatar,
  Text,
  Menu,
  UnstyledButton,
  Divider,
} from "@mantine/core";
import authContext from "../contextes/authContext";
import { useNavigate } from "react-router-dom";

const UserButton = forwardRef(
  ({ image, name, email, icon, ...others }, ref) => (
    <UnstyledButton
      ref={ref}
      sx={(theme) => ({
        width: "100%",
        margin: theme.spacing.xs,
        padding: theme.spacing.xs / 2,
        borderRadius: theme.radius.sm,
        color:
          theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,

        "&:hover": {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
      {...others}
    >
      <Group>
        <Avatar size={"sm"} src={image} radius="xl" />

        <div style={{ flex: 1 }}>
          <Text size="sm" weight={500}>
            {name}
          </Text>
        </div>

        {icon || <MdExpandMore size={16} />}
      </Group>
    </UnstyledButton>
  )
);

export default function UserCard({ name }) {
  const { logout } = useContext(authContext);
  const navigate = useNavigate();
  return (
    <Group position="center">
      <Menu
        withArrow
        placement="center"
        control={
          <UserButton
            image={`https://avatars.dicebear.com/api/male/${name}.svg`}
            name={name}
          />
        }
      >
        <Menu.Item color={"red"} onClick={logout}>
          Logout
        </Menu.Item>
      </Menu>
    </Group>
  );
}

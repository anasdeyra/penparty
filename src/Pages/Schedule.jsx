import React from "react";
import {
  Paper,
  createStyles,
  Title,
  Text,
  Timeline,
  Group,
  Stack,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: "95vh",
    backgroundSize: "cover",
    backgroundImage: `url(${process.env.PUBLIC_URL}/bg4.jpg)`,
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

export default function Schedule() {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        <Title order={1} className={classes.title} mt="md" mb={"xl"}>
          Schedule
        </Title>

        <Timeline color={"red"} active={100} bulletSize={24} lineWidth={2}>
          <Timeline.Item title="Check in">
            <Text color="dimmed" size="sm">
              09:00
            </Text>
          </Timeline.Item>
          <Timeline.Item title="Opening ceremony">
            <Text color="dimmed" size="sm">
              10:00
            </Text>
          </Timeline.Item>
          <Timeline.Item title="Minister of Communication Technologies and Digital Economy ">
            <Text color="dimmed" size="sm">
              10:15
            </Text>
          </Timeline.Item>
          <Timeline.Item title="Start of the challenge">
            <Text color="dimmed" size="sm">
              10:30
            </Text>
          </Timeline.Item>

          <Timeline.Item title="Forum" lineVariant="solid">
            <Group>
              <Stack spacing={0}>
                <Text size="xs" mt={4}>
                  from
                </Text>
                <Text color="dimmed" size="sm">
                  10:30
                </Text>
              </Stack>
              <Stack spacing={0}>
                <Text size="xs" mt={4}>
                  to
                </Text>
                <Text color="dimmed" size="sm">
                  13:00
                </Text>
              </Stack>
            </Group>
          </Timeline.Item>

          <Timeline.Item title="Lunch" lineVariant="solid">
            <Group>
              <Stack spacing={0}>
                <Text size="xs" mt={4}>
                  from
                </Text>
                <Text color="dimmed" size="sm">
                  13:30
                </Text>
              </Stack>
              <Stack spacing={0}>
                <Text size="xs" mt={4}>
                  to
                </Text>
                <Text color="dimmed" size="sm">
                  14:00
                </Text>
              </Stack>
            </Group>
          </Timeline.Item>

          <Timeline.Item title="Coffee break" lineVariant="solid">
            <Group>
              <Stack spacing={0}>
                <Text size="xs" mt={4}>
                  from
                </Text>
                <Text color="dimmed" size="sm">
                  16:30
                </Text>
              </Stack>
              <Stack spacing={0}>
                <Text size="xs" mt={4}>
                  to
                </Text>
                <Text color="dimmed" size="sm">
                  16:45
                </Text>
              </Stack>
            </Group>
          </Timeline.Item>

          <Timeline.Item title="Dinner" lineVariant="solid">
            <Group>
              <Stack spacing={0}>
                <Text size="xs" mt={4}>
                  from
                </Text>
                <Text color="dimmed" size="sm">
                  20:30
                </Text>
              </Stack>
              <Stack spacing={0}>
                <Text size="xs" mt={4}>
                  to
                </Text>
                <Text color="dimmed" size="sm">
                  21:00
                </Text>
              </Stack>
            </Group>
          </Timeline.Item>

          <Timeline.Item title="End of the challenge">
            <Text color="dimmed" size="sm">
              08:30
            </Text>
          </Timeline.Item>
          <Timeline.Item title="Breakfast" lineVariant="solid">
            <Group>
              <Stack spacing={0}>
                <Text size="xs" mt={4}>
                  from
                </Text>
                <Text color="dimmed" size="sm">
                  08:30
                </Text>
              </Stack>
              <Stack spacing={0}>
                <Text size="xs" mt={4}>
                  to
                </Text>
                <Text color="dimmed" size="sm">
                  09:00
                </Text>
              </Stack>
            </Group>
          </Timeline.Item>

          <Timeline.Item
            title="Closing ceremony and announcement of the winners"
            lineVariant="solid"
          >
            <Group>
              <Stack spacing={0}>
                <Text size="xs" mt={4}>
                  from
                </Text>
                <Text color="dimmed" size="sm">
                  09:00
                </Text>
              </Stack>
              <Stack spacing={0}>
                <Text size="xs" mt={4}>
                  to
                </Text>
                <Text color="dimmed" size="sm">
                  10:00
                </Text>
              </Stack>
            </Group>
          </Timeline.Item>
        </Timeline>
      </Paper>
    </div>
  );
}

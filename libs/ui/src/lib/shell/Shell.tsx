import React, { PropsWithChildren, ReactNode, useState } from 'react';
import {
  AppShell,
  Header,
  Title,
  Box,
  Button,
  useMantineTheme,
  Navbar,
  MediaQuery,
  Burger,
} from '@mantine/core';
import styled from 'styled-components';

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: space-between;
  width: 100%;
`;

export const Shell = ({
  title,
  nav,
  username,
  children,
}: PropsWithChildren<{
  title?: string;
  username?: string;
  nav?: ReactNode;
}>) => {
  const [user, setUser] = useState<string | undefined>(username); // TODO authenticate
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();

  return (
    <AppShell
      padding="md"
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      fixed
      styles={{
        main: {
          background:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      header={
        <Header
          height={60}
          p="xs"
          style={{
            display: 'flex',
            background: theme.colors.blue[8],
          }}
        >
          <StyledHeader>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <Title
              style={{
                color: 'white',
              }}
            >
              {title}
            </Title>

            {user ? (
              <Box sx={{ display: 'flex' }}>
                <Title
                  mr="md"
                  style={{
                    color: 'white',
                  }}
                >
                  {user}
                </Title>
                <Button variant="light" onClick={() => setUser(null)}>
                  Logout
                </Button>
              </Box>
            ) : (
              <Button variant="light" onClick={() => setUser('Gary')}>
                Login
              </Button>
            )}
          </StyledHeader>
        </Header>
      }
      navbar={
        nav ? (
          <Navbar
            p="md"
            hiddenBreakpoint="sm"
            hidden={!opened}
            width={{ sm: 200, lg: 300 }}
          >
            <Navbar.Section grow mt="md">
              {nav}
            </Navbar.Section>
          </Navbar>
        ) : undefined
      }
    >
      {children}
    </AppShell>
  );
};

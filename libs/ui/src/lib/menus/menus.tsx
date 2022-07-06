import React, { createContext, PropsWithChildren, useContext } from 'react';
import { ThemeIcon, UnstyledButton, Group, Text } from '@mantine/core';

type Size = 'small' | 'medium';

const MenuItemsContext = createContext<Size>('medium');

const useMenuItemsSize = (): Size => {
  const size = useContext(MenuItemsContext);
  if (size === undefined) {
    throw new Error(
      'A MenuItems child component must be used within a MenuItems component'
    );
  }
  return size;
};

interface MenuItemProps {
  icon: React.ReactNode;
  color: string;
  label: string;
}

function MenuItem({ icon, color, label, ...props }: MenuItemProps) {
  const size = useMenuItemsSize();

  return (
    <UnstyledButton
      {...props}
      sx={(theme) => ({
        display: 'block',
        width: '100%',
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color:
          theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[6]
              : theme.colors.gray[0],
        },
      })}
    >
      <Group>
        <ThemeIcon color={color} variant="light" size="xl">
          {icon}
        </ThemeIcon>
        {size === 'medium' && <Text size="xl">{label}</Text>}
      </Group>
    </UnstyledButton>
  );
}

export type MenusProps = PropsWithChildren<{
  size?: Size;
}>;

const MenusO = ({ children, size = 'medium' }: MenusProps) => {
  return (
    <MenuItemsContext.Provider value={size}>
      {children}
    </MenuItemsContext.Provider>
  );
};

export const Menus = Object.assign(MenusO, {
  MenuItem,
});

export default Menus;

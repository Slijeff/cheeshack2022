import { Box, Flex, Grid, Text } from '@mantine/core';
import { FunctionComponent } from 'react';
import { Outlet } from 'react-router-dom';
import NavbarButton from './navbarButton';
import { IconPaw, IconPlus, IconUser } from '@tabler/icons';

interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = () => {
  return (
    <Box sx={{ padding: 10 }}>
      <Outlet />
      <Flex
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          width: '100%',
          backgroundColor: '#15AABF',
          padding: 'inherit',
        }}
        justify={'space-evenly'}
        align={'center'}
      >
        <NavbarButton
          text={'Discover'}
          icon={<IconPaw color='white' />}
          routeTo={'/home'}
        />
        <NavbarButton
          text={'Report'}
          icon={<IconPlus color='white' />}
          routeTo={'/'}
        />
        <NavbarButton
          text={'Profile'}
          icon={<IconUser color='white' />}
          routeTo={'/profile'}
        />
      </Flex>
    </Box>
  );
};

export default Navbar;

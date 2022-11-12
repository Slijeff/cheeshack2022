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
        <NavbarButton text={'Find'} icon={<IconPaw color='white' />} />
        <NavbarButton text={'Report'} icon={<IconPlus color='white' />} />
        <NavbarButton text={'Profile'} icon={<IconUser color='white' />} />
      </Flex>
    </Box>
  );
};

export default Navbar;

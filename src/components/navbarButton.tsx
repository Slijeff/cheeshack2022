import { ActionIcon, Button, Flex, Text } from '@mantine/core';
import { FunctionComponent } from 'react';
import { IconPaw, TablerIcon } from '@tabler/icons';
interface NavbarButtonProps {
  text: string;
  icon: React.ReactNode;
}

const NavbarButton: FunctionComponent<NavbarButtonProps> = ({ text, icon }) => {
  return (
    <Flex direction={'column'} justify={'center'} align={'center'}>
      <ActionIcon variant='transparent'>{icon}</ActionIcon>
      <Text color={'white'} size={'xs'}>
        {text}
      </Text>
    </Flex>
  );
};

export default NavbarButton;

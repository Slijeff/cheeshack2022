import { ActionIcon, Button, Flex, Menu, Text } from '@mantine/core';
import { FunctionComponent } from 'react';
import { IconCirclePlus } from '@tabler/icons';

interface ReportMenuProps {}

const ReportMenu: FunctionComponent<ReportMenuProps> = () => {
  return (
    <Menu
      shadow='lg'
      position='top'
      withArrow={true}
      width={200}
      withinPortal={true}
    >
      <Menu.Target>
        <ActionIcon variant='transparent' size={50}>
          <IconCirclePlus color='white' size={100} />
        </ActionIcon>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Want to Help?</Menu.Label>
        <Menu.Divider></Menu.Divider>
        <Menu.Item>Adopt</Menu.Item>
        <Menu.Divider></Menu.Divider>
        <Menu.Item>Report</Menu.Item>
        <Menu.Divider></Menu.Divider>
        <Menu.Item>Offer</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default ReportMenu;

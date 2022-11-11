import { FC } from 'react';
import { Title, Flex, Button } from '@mantine/core';
import { Link } from 'react-router-dom';

interface ProfileProps {}

const Profile: FC<ProfileProps> = () => {
  return (
    <Flex direction={'column'}>
      <Title order={1}>Profile page (Test router)</Title>

      <Link to={'/'}>
        <Button> To Home</Button>
      </Link>
    </Flex>
  );
};

export default Profile;

import {
  Box,
  Flex,
  Title,
  Card,
  Image,
  Group,
  Badge,
  Text,
  Button,
} from '@mantine/core';
import { FunctionComponent } from 'react';
interface ReportProps {}

const Report: FunctionComponent<ReportProps> = () => {
  return (
    <Box sx={{ padding: 10 }}>
      <Card shadow='sm' p='lg' radius='md' withBorder sx={{ height: '100vh' }}>
        <Card.Section>
          <Title
            variant='gradient'
            gradient={{ from: 'blue', to: 'cyan' }}
            inherit
          >
            fully featured
          </Title>
        </Card.Section>

        <Group position='apart' mt='md' mb='xs'>
          <Text weight={500}>Norway Fjord Adventures</Text>
          <Badge color='pink' variant='light'>
            On Sale
          </Badge>
        </Group>

        <Text size='sm' color='dimmed'>
          With Fjord Tours you can explore more of the magical fjord landscapes
          with tours and activities on and around the fjords of Norway
        </Text>

        <Button variant='light' color='blue' fullWidth mt='md' radius='md'>
          Book classic tour now
        </Button>
      </Card>
    </Box>
  );
};

export default Report;

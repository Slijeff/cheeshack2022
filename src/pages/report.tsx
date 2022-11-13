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
  BackgroundImage,
  MultiSelect,
  NativeSelect,
  Input,
  TextInput,
  Textarea,
  FileInput,
} from '@mantine/core';
import { FunctionComponent } from 'react';
import { IconPaw, IconMapPin, IconUpload } from '@tabler/icons';
interface ReportProps {}

const Report: FunctionComponent<ReportProps> = () => {
  return (
    <Box sx={{ padding: 10 }}>
      <Card
        shadow='sm'
        p='lg'
        radius='md'
        withBorder
        sx={{ height: '80vh', overflow: 'auto' }}
      >
        <Card.Section>
          <BackgroundImage
            sx={{
              boxShadow:
                '0px 4px 4px 0px #00000040,inset 0 0 0 1000px rgba(0,0,0,.5)',
              height: '5rem',
              width: 'inherit',
              padding: '4%',
            }}
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/American_Shorthair.jpg/450px-American_Shorthair.jpg'
          >
            <Title
              variant='gradient'
              gradient={{ from: 'blue.0', to: 'cyan.4' }}
            >
              Found a Poor Animal?
            </Title>
          </BackgroundImage>
        </Card.Section>
        <Card.Section>
          <Flex
            sx={{ padding: '1rem', width: '90%' }}
            gap='lg'
            direction={'column'}
          >
            <NativeSelect
              data={['Please Select', 'Cat', 'Dog']}
              label='What type of animal did you found?'
              placeholder='Please select'
              sx={{ width: '100%' }}
              size={'lg'}
              required
              icon={<IconPaw />}
            ></NativeSelect>
            <Input.Wrapper
              label='Where did you found this animal?'
              required
              size='lg'
            >
              <Input
                sx={{ '& input': { height: '3rem' } }}
                icon={<IconMapPin />}
              ></Input>
            </Input.Wrapper>
            <Textarea
              label='Appearance description'
              placeholder='Your description'
              size='lg'
              required
            ></Textarea>
            <Textarea
              label='Disability description'
              placeholder='Your description'
              size='lg'
              required
            ></Textarea>
            <FileInput
              label='Upload a Photo'
              size='lg'
              placeholder='Click to upload'
              required
              icon={<IconUpload />}
            ></FileInput>
            <Button
              variant='gradient'
              gradient={{ from: 'indigo', to: 'cyan' }}
              size='lg'
            >
              Submit
            </Button>
          </Flex>
        </Card.Section>
      </Card>
    </Box>
  );
};

export default Report;

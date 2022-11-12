import { Link } from 'react-router-dom';
import { Text, Button, Title, Box, Flex } from '@mantine/core';
import { useState } from 'react';
import { createStyles, Header, Autocomplete, Group, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSearch } from '@tabler/icons';
import { IconShield } from '@tabler/icons';
import { Avatar } from '@mantine/core';
import { Card, Overlay, CardProps} from '@mantine/core';


const useStyles = createStyles((theme) => ({
  header: {
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
  },

  inner: {
    height: 56,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  content: {
    position: 'absolute',
    padding: theme.spacing.xl,
    zIndex: 1,
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },

  action: {
    position: 'absolute',
    bottom: theme.spacing.xl,
    right: theme.spacing.xl,
  },

  title: {
    color: theme.white,
    marginBottom: theme.spacing.xs / 2,
  },

  description: {
    color: theme.white,
    position: 'absolute',
    bottom: theme.spacing.xl,
    maxWidth: 220,
  },

}));



function Home() {
  const [opened, { toggle }] = useDisclosure(false);
  const { classes } = useStyles();

  return (
    <>
      <Header height={56} className={classes.header} mb={20}>
        <div className={classes.inner}>
          <Group>
            
            <Burger opened={opened} onClick={toggle} size="sm" />
            <Autocomplete
              placeholder="Search"
              icon={<IconSearch size={16} stroke={1.5} />}
              data={['React', 'Angular', 'Vue', 'Next.js', 'Riot.js', 'Svelte', 'Blitz.js']}
            />
            
            
          </Group>
          <Group >
            <Avatar src="https://raw.githubusercontent.com/WiscWebGroup/photoly/main/Logo.png" alt="it's me" style={{marginRight:'3px'}}/>
          </Group>
        </div>
      </Header>
      <Flex direction={'column'} wrap="nowrap" gap={"xl"} style={{padding:'15px'}}>
      <Card
      radius="md"
      style={{ backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/American_Shorthair.jpg/450px-American_Shorthair.jpg)`, height: 300,
      backgroundSize: 'cover',
      backgroundPosition: 'center'}} 
    >
      <Overlay
        gradient={`linear-gradient(105deg, #9E9E9E 20%, #312f2f 50%, #DE4321 100%)`}
        opacity={0.55}
        zIndex={0}
        
      />

      <div className={classes.content}>
        <Text size="xl" weight={800} className={classes.title} >
          Help Apricotti !
        </Text>

        <Text size="sm" className={classes.description} style={{display:"flex", marginTop:'0px'}}>
          Apricotti is a domestic shorthair cat with leg disability, she was found at north of Chicago, now been protected by the CBR Animal Organization.
          Help Apricotti find a new home!
        </Text>

        <Button
          className={classes.action}
          variant="white"
          color="dark"
          component="a"
          size="xs"
          href={""}
        >
          Learn more
        </Button>
      </div>
    </Card>
    <Card withBorder radius="md">
    <Group style={{"alignItems": "start"}}>
        <Avatar mt={10} src="https://thiscatdoesnotexist.com/" radius="xl" />

        <div style={{ flex: 1 }}>
          <Text size="sm" weight={600}>
            Luoluo
          </Text>
          <Text size="sm" weight={400}>
            Cat - fbc cat
          </Text>
          <Text color="dimmed" size="xs">
            Luoluo is the first cat I adopted, she is shy, but nice to people. 
          </Text>
        </div>

        
      </Group>
    </Card>
    <Card withBorder radius="md">
    <Group style={{"alignItems": "start"}}>
        <Avatar mt={10} src="https://thiscatdoesnotexist.com/" radius="xl" />

        <div style={{ flex: 1 }}>
          <Text size="sm" weight={600}>
            Luoluo
          </Text>
          <Text size="sm" weight={400}>
            Cat - fbc cat
          </Text>
          <Text color="dimmed" size="xs">
            Luoluo is the first cat I adopted, she is shy, but nice to people. 
          </Text>
        </div>

        
      </Group>
    </Card>
    <Card withBorder radius="md">
    <Group style={{"alignItems": "start"}}>
        <Avatar mt={10} src="https://thiscatdoesnotexist.com/" radius="xl" />

        <div style={{ flex: 1 }}>
          <Text size="sm" weight={600}>
            Luoluo
          </Text>
          <Text size="sm" weight={400}>
            Cat - fbc cat
          </Text>
          <Text color="dimmed" size="xs">
            Luoluo is the first cat I adopted, she is shy, but nice to people. 
          </Text>
        </div>

        
      </Group>
    </Card>
    <Card withBorder radius="md">
    <Group style={{"alignItems": "start"}}>
        <Avatar mt={10} src="https://thiscatdoesnotexist.com/" radius="xl" />

        <div style={{ flex: 1 }}>
          <Text size="sm" weight={600}>
            Luoluo
          </Text>
          <Text size="sm" weight={400}>
            Cat - fbc cat
          </Text>
          <Text color="dimmed" size="xs">
            Luoluo is the first cat I adopted, she is shy, but nice to people. 
          </Text>
        </div>

        
      </Group>
    </Card>
    <Card withBorder radius="md">
    <Group style={{"alignItems": "start"}}>
        <Avatar mt={10} src="https://thiscatdoesnotexist.com/" radius="xl" />

        <div style={{ flex: 1 }}>
          <Text size="sm" weight={600}>
            Luoluo
          </Text>
          <Text size="sm" weight={400}>
            Cat - fbc cat
          </Text>
          <Text color="dimmed" size="xs">
            Luoluo is the first cat I adopted, she is shy, but nice to people. 
          </Text>
        </div>

        
      </Group>
    </Card>
    <Card withBorder radius="md">
    <Group style={{"alignItems": "start"}}>
        <Avatar mt={10} src="https://thiscatdoesnotexist.com/" radius="xl" />

        <div style={{ flex: 1 }}>
          <Text size="sm" weight={600}>
            Luoluo
          </Text>
          <Text size="sm" weight={400}>
            Cat - fbc cat
          </Text>
          <Text color="dimmed" size="xs">
            Luoluo is the first cat I adopted, she is shy, but nice to people. 
          </Text>
        </div>

        
      </Group>
    </Card>
      </Flex>
      
    </>
    

    
  );
}

export default Home;

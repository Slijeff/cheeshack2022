import { Link } from 'react-router-dom';
import {
  Text,
  Button,
  Title,
  Image,
  Box,
  Flex,
  Container,
  Paper,
  TypographyStylesProvider,
  ActionIcon,
  Badge,
} from '@mantine/core';
import { useState } from 'react';
import {
  createStyles,
  Header,
  Autocomplete,
  Group,
  Burger,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconHeart, IconSearch } from '@tabler/icons';
import { IconShield } from '@tabler/icons';
import { Avatar } from '@mantine/core';
import { Card, Overlay, CardProps } from '@mantine/core';
import { IconCheck } from '@tabler/icons';



function Index() {
  

  return (
    <div style={{"backgroundImage": "url('../public/jack-russell-2310391_960_720.jpg')", }}>
    <Container style={{"backgroundColor": "rgba(86, 92, 97, .5)", "height": "10vh", "alignItems":"left", "position": "relative"}}>
        <Image
            width={"10vh"}
            src={"../assets/logo_transparent.png"}
            fit={"contain"}
            radius={"lg"}
            style={{"position" : "relative", "float": "left"}}
        />
        <Title
            variant='gradient'
            gradient={{ from: 'white', to: 'cyan' }}
            inherit
            style={{"position" : "relative", "float": "left", "marginTop": "2vh"}}
          >
            Stray Way
          </Title>
          
    </Container>
    <Text fz="lg" color={"indigo"}>Large text</Text>
    
    </div>
  );
}

export default Index;

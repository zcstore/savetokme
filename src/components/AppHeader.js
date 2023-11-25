import React, { useState } from 'react';
import {
  Drawer,
  Group,
  Button,
  Anchor,
  Title,
  Text,
  Space,
  Divider,
  List,
  ThemeIcon,
} from '@mantine/core';
import { IconCheck } from '@tabler/icons';

const AppHeader = () => {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <Group position='apart' mt='md'>
        <Anchor underline={false} size='30px' variant='text' weight='bold'>
          
    </>
    // <Center>
    //   <Title order={1}>SaveTok</Title>
    // </Center>
  );
};

export default AppHeader;

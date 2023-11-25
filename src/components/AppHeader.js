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
      SaveTok    
        </Anchor>

        <Drawer
          opened={opened}
          onClose={() => setOpened(false)}
          title='About'
          padding='xl'
          position='right'
          size='xl'
        >
          <Divider my='sm' />
          <Title order={2} color='grape'>
            SaveTok
          </Title>
          <Text>Tiktok Video Downloader</Text>
          <Space h='lg' />
          <Text>
            Aplikasi web yang mengunduh video tiktok tanpa tiktok yang mengganggu tanda air.
          </Text>
          <Space h='lg' />
          <Title order={5}>Mengapa Anda harus menggunakan layanan semacam ini ?</Title>
          <Text>
            Gunakan layanan ini untuk memposting ulang video tiktok di situs media sosial lainnya
            tanpa tanda air yang mengganggu
          </Text>
          <Space h='lg' />
          <Title order={5}>Bagaimana Cara Menggunakan ?</Title>
          <Text>
            Cukup tempel tautan video tiktok di kotak teks dan klik getVideo, tunggu untuk itu memuat info video dan tombol unduh.
          </Text>
          <Space h='lg' />
          <Title order={5}>dibuat menggunakan</Title>
          <List
            spacing='xs'
            size='sm'
            mt='xs'
            center
            icon={
              <ThemeIcon color='teal' size={16} radius='xl'>
                <IconCheck size={14} />
              </ThemeIcon>
            }
          >
            <List.Item>React.js a frontend js library</List.Item>
            <List.Item>Mantine a frontend components framework</List.Item>
            <List.Item>Tiktokwm Api</List.Item>
          </List>
          <Space h='xl' />
          <Title order={5}>Developed by</Title>
          <Text>Nazirul Anam</Text>
        </Drawer>
        <Button variant='light' color='grape' onClick={() => setOpened(true)}>
          About
        </Button>
      </Group>
    </>
    // <Center>
    //   <Title order={1}>SaveTok</Title>
    // </Center>
  );
};

export default AppHeader;

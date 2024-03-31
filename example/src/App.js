/* eslint-disable jsx-a11y/accessible-emoji */
import React, {Fragment, useState} from 'react'
import {Header, Heading, VStack, HStack, Block, Alert, 
  AlertBody, AlertHead, AlertIcon, Notify, 
  NotifyHead, NotifyBody, Button, Box, Icon, Avatar} from 'sutairu'
import 'sutairu/dist/index.css'

const App = () => {
  const [open, setOpen] = useState('close')
  return (
    <Fragment>

        <Header type="logo">
          <Heading>Sutairu</Heading>
        </Header>

      <Block h="400px" w="100%" align="center" justify="center" dir="column">
        <Box h="100px" w="40%" bg="red" align="center" justify="space-evenly" dir="column">
          <h2>Sutairu UI</h2>
          <p>react biulding blocks components framework</p>
          <Button click={() => setOpen('open')}>Get started</Button>
        </Box>
      </Block>

      <VStack h="100px" w="100%" bg="pink" align="center" justify="space-evenly">
        <Block h="100px" w="30%" bg="red" fg="purple" align="center" justify="space-evenly" dir="row">
          <h3>Important 1</h3>
          <p>hi am the hstack box</p>
        </Block>
        <Block h="100px" w="50%" bg="purple" fg="red" align="center" justify="space-evenly" dir="row">
          <h3>Important 1</h3>
          <p>hi am the hstack box</p>
        </Block>
      </VStack>

      <Avatar fg="green" bg="#222" justify="flex-end" user="Ademujimi Oluwaseyi" />
      <Avatar fg="blue" bg="#fff" justify="center" user="Chwukwu Emeka" />
      <Avatar fg="pink" bg="purple" justify="flex-start" user="Abioye Isholaade" />
      <Avatar fg="purple" bg="pink" justify="flex-end" user="Xavi Alonso" />


      <Alert name='appAlert'>
          <Icon src="#"/>
          <AlertHead>
            new alert title
          </AlertHead>
          <AlertBody>
              new alert body and content
          </AlertBody>
      </Alert>

      <HStack h="300px" w="100%" bg="purple" align="center" justify="space-evenly">
        <Block h="100px" w="80%" bg="red" fg="purple" align="center" justify="space-evenly" dir="row">
          <h3>Important 1</h3>
          <p>hi am the hstack box</p>
        </Block>
        <Block h="200px" w="50%" bg="blue" fg="red" align="center" justify="space-evenly" dir="row">
          <h3>Important 1</h3>
          <p>hi am the hstack box</p>
        </Block>
      </HStack>

      

      <Notify type="default" state={open} close={setOpen}>
        <NotifyHead>
          Notification title
        </NotifyHead>
        <NotifyBody>
          beis bag as gify from lg when i wemnt to there event few weeks ago
        </NotifyBody>
      </Notify>

    
    </Fragment>
  )
}

export default App

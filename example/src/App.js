/* eslint-disable jsx-a11y/accessible-emoji */
import React, {Fragment, useState} from 'react'
import {Header, Heading, VStack, HStack, Block, Alert, 
  AlertBody, AlertHead, AlertIcon, Notify, 
  NotifyHead, NotifyBody, Button, Box, Icon, Avatar, Nav, Link, Text} from 'sutairu'
import 'sutairu/dist/index.css'

const App = () => {
  const [open, setOpen] = useState('close')
  
  return (
    <Fragment>
       <Header w="100%" h="80px" >
          <Box w="50%">
            <Heading font="30px" justify="flex-start">sutairu</Heading>
          </Box>
          <Nav w="20%" justify="flex-end">
            <Link>doc</Link>
          </Nav>
          <Avatar nick="Chwukwu" />
      </Header>

      <Block h="456px" w="100%" align="center" justify="center" dir="column">
        <h2>Sutairu UI</h2>
        <p>react biulding blocks components framework</p>
        <Button click={() => setOpen('open')}>Get started</Button>
      </Block>

      <VStack h="200px" w="100%" bg="pink" align="center" justify="space-evenly" mquery>
        <Block font="14px" h="100px" w="25%" bg="red" fg="purple" align="center" justify="center" dir="column">
          <h3>Responsive</h3>
          <p>hi am the hstack box</p>
        </Block>
        <Block h="50%" w="25%" bg="purple" fg="red" align="center" justify="space-evenly" dir="row">
          <h3>Important</h3>
        </Block>
        <Block h="300px" 
        w="25%" fg="red" 
        align="flex-end" justify="center" 
        dir="column" font="16px">
          <h3>Important 1</h3>
          <Text font="15px">something here like this</Text>
        </Block>
      </VStack>
  

    
    </Fragment>
  )
}

export default App

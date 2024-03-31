/* eslint-disable jsx-a11y/accessible-emoji */
import React, {Fragment, useState} from 'react'
import {Header, Logo, VStack, Block, Box, Alert, 
  AlertBody, AlertHead, AlertIcon, Notify, 
  NotifyHead, NotifyBody, Button} from 'sutairu'
import 'sutairu/dist/index.css'

const App = () => {
  const [open, setOpen] = useState('close')
  return (
    <Fragment>

        <Header type="logo">
          <Logo>
            <h1>Sutairu</h1>
          </Logo>
        </Header>

      <Block flex={"center"} name={"headerBlock"}>
        <h2>Sutairu UI</h2>
        <p>react biulding blocks components framework</p>
        <Button click={e => setOpen('open')}>Get started</Button>
      </Block>

      <VStack name={"vStack"}>
        <Box name={'box'}>
          <h3>Important 1</h3>
          <p>hi am the hstack box</p>
        </Box>
        <Box name={'box'}>
          <h3>Important 2</h3>
          <p>hi am the hstack box too</p>
        </Box>
        <Box name={'box'}>
          <span>#</span>
          <h3>Important 2</h3>
          <p>hi am the hstack box too</p>
        </Box>
        
      </VStack>

      <Alert name='appAlert'>
          <AlertIcon src=""/>
          <AlertHead>
            new alert title
          </AlertHead>
          <AlertBody>
              new alert body and content
          </AlertBody>
      </Alert>

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

/* eslint-disable jsx-a11y/accessible-emoji */
import React, {Fragment} from 'react'
import {Header, Heading, Stack, Block, Icon, Avatar, Nav, Link, Text} from 'sutairu'
import 'sutairu/dist/index.css'

const App = () => {
  
  return (
    <Fragment>
       <Header w="100%" h="80px" >
          <Block w="20%" justify="flex-start">
            <Heading font="30px">sutairu</Heading>
          </Block>
          <Nav w="40%" justify="flex-end">
            <Link>doc</Link>
            <Link>Github</Link>
            <Icon src="@" />
          </Nav>
          <Avatar nick="Chwukwu" />
      </Header>

      <Block h="456px" w="100%" align="center" j
      ustify="center" dir="column"
      mquery={['425px', {dir: 'column', bg: 'purple', h: '100px'}]}>
        <h2>Sutairu UI</h2>
        <p>react biulding blocks components framework</p>
      </Block>

      <Stack h="200px" w="100%" bg="pink" align="center" 
      justify="space-evenly" dir="row" 
      mquery={['425px', {dir: 'column', bg: 'purple', h: '500px'}]}>
        <Block font="14px" h="100px" w="10%" fg="purple" align="flex-start" justify="center" dir="column">
          <h3>Responsive</h3>
          <p>hi am the hstack box</p>
        </Block>
        <Block font="14px" w="26%" h="90%" bg="red" dir="row" mquery={['425px', {w: '20%', bg: 'green'}]}>
          <h3>Important</h3>
        </Block>
        <Block h="300px" 
        w="10%" fg="red" 
        dir="column" font="16px" mquery={['425px', {w: '25%'}]}>
          <h3>Important 1</h3>
          <Text font="15px">something here like this</Text>
        </Block>
      </Stack>
    </Fragment>
  )
}

export default App

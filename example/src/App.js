/* eslint-disable jsx-a11y/accessible-emoji */
import React, {Fragment} from 'react'
import {Header, Heading, Stack, Block, Icon, Nav, Link, Text, Box, getMedia} from 'sutairu'
import 'sutairu/dist/index.css'

const App = () => {
  
  return (
    <Fragment>
       <Header w="100%" h="80px" bg="#fff">
          <Box w="30%" justify="flex-start">
            <Heading font="25px">sutairu</Heading>
          </Box>
          <Nav w="40%" justify="flex-end">
            <Link>doc</Link>
            <Link>Github</Link>
            <Link>
              <Icon src="@" />
            </Link>
          </Nav>
      </Header>

      <Block h="450px" w="100%" align="center" 
      justify="center" dir="column" bg="white"
      mb={{bg: 'teal'}} ip={{bg: 'purple'}} m={{bg: 'green'}}>
        <Heading font="55px">sutairu</Heading>
        <Text font="18px" fg="red" mb={{fg: 'teal', font: "6px"}} ip={{fg: 'purple', font: "8px"}} m={{fg: 'green', font: "89px"}}>a simple react building block components</Text>
        <Heading as="h3" font="18px">sutairu</Heading>
      </Block>

    </Fragment>
  )
}

export default App

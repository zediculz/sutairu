/* eslint-disable jsx-a11y/accessible-emoji */
import React, {Fragment} from 'react'
import {Header, Heading, Stack, 
  Block, Icon, Nav, Link, Text, Box} from 'sutairu'
import 'sutairu/dist/index.css'
import {boxx} from './style'

const App = () => {
  
  return (
    <Fragment>
       <Header w="100%" h="80px" bg="#fff" 
       neo={{bb: '1px solid #222'}}>
          <Box w="30%" justify="flex-start" m={{w: '50%'}}>
            <Heading font="25px"  mb={{font: '22px'}}  m={{font: '20px'}}>sutairu</Heading>
          </Box>
          <Nav w="40%" justify="flex-end"
           mb={{w: '60%', font: '16px'}}  m={{w: '40%', font: '14px', justify: 'center'}}>
            <Link>doc</Link>
            <Link>Github</Link>
            <Link>
              <Icon src="@" />
            </Link>
          </Nav>
      </Header>

      <Block h="400px" w="100%" align="center" 
      justify="center" dir="column" bg="white"
    mb={{}} ip={{}} m={{}}>
        <Heading font="100px" ip={{font: "90px"}}   
        mb={{font: "60px"}} m={{font: "56px"}}>sutairu</Heading>
        <Text font="18px" fg="red" 
        mb={{font: "15px"}} 
        m={{font: "14px"}}>
          a stylish react building block components UI</Text>
      </Block>

      <Stack w="100%" h="200px" justify="space-evenly"
      mb={{dir: 'column', h: '500px'}} m={{dir: 'column', h: '500px'}}>

        <Box bg="tomato"  {...boxx}>
          <Text>hello</Text>
          <Heading>Simple theme</Heading>
        </Box>

        <Box bg="lightgreen" {...boxx}>
          <Text>hello</Text>
          <Heading>Simple theme</Heading>
        </Box>

        <Box bg='yellow' {...boxx}>
          <Text>hi</Text>
          <Heading>Simple theme</Heading>
        </Box>
         
      </Stack>

      <Block h="200px" w="100%" align="center" 
      justify="center" dir="column" bg="white">
        <Text font="22px" mb={{font: "18px"}} m={{font: "16px"}}>
          Neo Brutalism out of the Box
        </Text>
      </Block>

     
    </Fragment>
  )
}

export default App

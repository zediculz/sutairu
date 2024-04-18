/* eslint-disable jsx-a11y/accessible-emoji */
import React, {Fragment} from 'react'
import {H, Block, Text, Box, Header, Nav, NavItem} from 'sutairu'
import 'sutairu/dist/index.css'
import {block, box} from './style'

const App = () => {

  return (
    <Fragment>
      <Header $w="100%" $h="100px" $justify="space-evenly" >
        <Box $w="30%" $justify="flex-start">
          <H>Sutairu</H>
        </Box>
        <Nav $w="40%"  $justify="flex-end">
          <NavItem>link 1</NavItem>
          <NavItem>link 2</NavItem> 
          <NavItem>link 3</NavItem>
        </Nav>
      </Header>

      <Block $h="400px" $w="100%" $align="center" 
      $justify="center" $dir="column">
        <H $font="100px" $ip={{font: "90px"}}   
        $mb={{$font: "60px"}} $sm={{$font: "56px"}}>sutairu</H>
        <Text $font="18px" color="red" $mb={{$font: "15px"}} 
        $sm={{$font: "14px"}}>a stylish react component UI building blocks</Text>
      </Block>

      <Block {...block}>

        <Box $bg="tomato"  {...box}>
          <Text>hello</Text>
          <H>Simple theme</H>
        </Box>

        <Box $bg="lightgreen" {...box}>
          <Text>hello</Text>
          <H>Simple theme</H>
        </Box>

        <Box $bg="brown" {...box}>
          <Text>hi!</Text>
          <H>Simple theme</H>
        </Box>
         
      </Block>


  
      <Block $h="400px" $w="100%">
        <Box $w="70%" $h="60%" $bg="#fff">
          <H as="h3" $font="44px" $talign="center">
            "Neo Brutalism out of the Box"
          </H>
        </Box>
      </Block>

    </Fragment>
  )
}

export default App

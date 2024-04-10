/* eslint-disable jsx-a11y/accessible-emoji */
import React, {Fragment} from 'react'
import {Heading, Block, Text, Box} from 'sutairu'
import 'sutairu/dist/index.css'
import {block, b} from './style'

const App = () => {

  return (
    <Fragment>

      <Block $h="400px" $w="100%" $align="center" 
      $justify="center" $dir="column">
        <Heading $font="100px" $ip={{font: "90px"}}   
        $mb={{$font: "60px"}} $sm={{$font: "56px"}}>sutairu</Heading>
        <Text $font="18px" color="red" 
        $mb={{$font: "15px"}} 
        $sm={{$font: "14px"}}>
          a stylish react building block components UI</Text>
        
      </Block>

      <Block {...block}>

        <Box $bg="tomato"  {...b}>
          <Text>hello</Text>
          <Heading>Simple theme</Heading>
        </Box>

        <Box $bg="lightgreen" {...b}>
          <Text $font="45px">hello</Text>
          <Heading >Simple theme</Heading>
        </Box>

        <Box $bg="tomato" {...b}>
          <Text $font="45px">hi!</Text>
          <Heading >Simple theme</Heading>
        </Box>
         
      </Block>


  
      <Block $h="400px" $w="100%">
        <Box $w="70%" $h="60%" $bg="#fff">
          <Heading as="h3" $font="44px" $talign="center">
              "Neo Brutalism out of the Box"
          </Heading>
        </Box>
      </Block>

    </Fragment>
  )
}

export default App

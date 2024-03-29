/* eslint-disable jsx-a11y/accessible-emoji */
import React, {Fragment} from 'react'
import {Header, Logo, HStack, Block, VStack, Box, useTheme} from 'sutairu'
import 'sutairu/dist/index.css'

const App = () => {
  
  return (
    <Fragment>

        <Header type="logo" theme={htheme}>
          <Logo>
            <h1>App Name</h1>
          </Logo>
      </Header>

      <Block theme={b}>
        <h2>important header</h2>
        <p>im a block child</p>
      </Block>

      <HStack theme={hvar}>
        <Box theme={hbox}>
          <p>hi am the hstack box</p>
        </Box>
        <Box theme={hbox}>
          <p>hi am the hstack box too</p>
        </Box>
        <Box theme={hbox}>
          <p>hi, yeah me too</p>
        </Box>
      </HStack>

      <VStack theme={vvar}>
        <Box theme={vbox}>
          <p>hi am the vstack box</p>
        </Box>
        <Box theme={vbox}>
          <p>hi am the vstack box too</p>
        </Box>
      </VStack>

      <Block theme={b}>
        <h2>important header</h2>
        <p>im a block child</p>
      </Block>

    </Fragment>
  )
}

const htheme = useTheme({
  type: 'logo',
  color: '#222',
  fontSize: '15px',
})

const hvar = {
  height: '200px',
  width: '100%'
}

const hbox = {
  height: '80%',
  width: '30%',
  backgroundColor: 'green',
}

const vvar = {
  height: '300px',
  width: '100%'
}

const vbox = {
  height: '40%',
  width: '90%',
  backgroundColor: 'green',
}

const b = {
  height: '200px',
  width: '100%',
  backgroundColor: 'pink',
}

export default App

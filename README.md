
# Sutairu
A lightweight react component building blocks.

## Components
Container
Header
Stack
Block
Notify
Alert
Button

## Blocks
Nav
Link
AlertBody
AlertHead
AlertIcon
Box
NotifyHead
NotifyBody
Text
Heading
Avatar
Icon

## tooling
useTheme

coming soon



A React Components Library.
that generate in-line styling at build time


## Install

```bash
npm install --save sutairu-ui
```
### Simple Usage
```jsx
 import { Heading } from 'sutairu-ui' 

 const App = () => {
   return (
      <Heading font="25px">sutairu</Heading>
   )
 }

```

## Layout Components
sutairu layout components are flex components and also have shorthand props to easily style them the way you want 

#### Block
Block component return a section tag by default, which most of the time can be used as wrappper 

```javascript
 import { Block } from 'sutairu-ui' 

function App() {
  return (
    <Block h="400px" w="100%" align="center" justify="center" dir="column">
        <Text font="18px" fg="red">
          a stylish react building block components UI</Text>
      </Block>
  )
} 

```


#### Stack
Block component return a section tag by default, which most of the time can be used as wrappper 

```javascript
 import { Block } from 'sutairu-ui' 

function App() {
  return (
    <Block h="400px" w="100%" align="center" justify="center" dir="column">
        <Text font="18px" fg="red">
          a stylish react building block components UI</Text>
      </Block>
  )
} 

```

#### Box
Box component return a div tag by default, which most of the time can also be used as wrappper 

```javascript
 import { Box } from 'sutairu-ui' 

function App() {
  return (
    <Box h="400px" w="100%" align="center" justify="center" dir="column">
        <Text font="18px" fg="red">
          a stylish react building block components UI</Text>
    </Box>
  )
} 

```


#### Header
Header component return a header tag by default, which most of the time can be used as wrappper, the header tag as a special child Nav tag thats can be used to hold naviagtion links in the header. 

```javascript
 import { Header, Box, Heading, Nav, Link } from 'sutairu-ui' 

function App() {
  return (
    <Header w="100%" h="80px">
        <Box w="30%" justify="flex-start">
            <Heading font="25px">sutairu</Heading>
        </Box>
        <Nav w="40%" justify="flex-end">
            <Link>doc</Link>
            <Link>Github</Link>
        </Nav>
    </Header>
  )
} 

```


## License
MIT


[![NPM](https://img.shields.io/npm/v/burokku.svg)](https://www.npmjs.com/package/burokku)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Contact](https://img.shields.io/badge/contact-@zediculz-blue.svg?style=flat&logo=twitter)](https://twitter.com/zediculz)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/burokku?label=bundle%20size&logo=webpack)](https://bundlephobia.com/result?p=burokku)
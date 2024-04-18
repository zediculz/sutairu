# Sutairu
A Headless React component UI building blocks

## Install

```bash
npm install --save sutairu-ui

```

## how to use Sutairu UI 

### Container Component
The container component serves as the actual wrapper around all Sutairu UI components; it expect only one child, which should be your <App /> component.

You provide your theming object and wrap your <App /> within the Container components in order to use the Sutairu components without any issues.


```js
import { Container, loadTheme } from "sutairu-ui";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Container>
      <App />
    </Container>
  </React.StrictMode>,
)

```

### useTheme Hook 
The themes object defines some basic color options for both light and dark mode and also the media query sizes.

to define your app theme import the loadTheme hook and pass in the theme object, 

the object should contains 
1. light: which hold the color and backgroundColor of your app in light mode,
2. dark:  which hold the color and backgroundColor of your app in dark mode,
3. media: is where you define the media query sizes you want for the breakpoints provided to achieve responsiveness design, ip is the ipad screen, mb is the mobile screen and sm is for smaller mobile screens.

```js
const theme = {
   light: {
        color: '#222',
        backgroundColor: '#fff'
   },
   dark: {
    color: "#fff",
    backgroundColor: "#222"
   },
   media: {
        ip: '(max-width: 768px)',
        mb: '(max-width: 425px)',
        sm: '(max-width: 375px)',
    }
}

loadTheme(theme)
```

## Basic Usage

```js
import { H } from "sutairu-ui";

const App = () => {
  return <H as="h1" $font="20px">sutairu</H>;
};

```


## Layout Components

By default sutairu layout components uses flex for laying out the UI and also accept shorthand props prefix with ($) to easily style them the way you want. 

### Block Layout Component
Block component return a section tag by default, which most of the time can be used as a wrapper for multiple layouts.

```javascript
import { Block, Box } from "sutairu-ui";

function App() {
  return (
    <Block $h="400px" $w="100%" $align="center">
      <Box>
        <Text>box one </Text>
      </Box>
      <Box>
        <Text>box two </Text>
      </Box>
    </Block>
  );
}

```

### Box Layout Component
Box component return a div tag by default, most of the time can also be used as a wrapper for topography or as a layout.

```javascript
import { Box } from "sutairu-ui";

function App() {
  return (
    <Box $h="400px" $w="100%"  $justify="center" >
      <Text $font="18px">
          react building block
      </Text>
    </Box>
  );
}
```

### Header Layout Component
Header component return a header tag by default, the header tag as a special child Nav tag thats can be used to hold navigation links inside the Header component.

```javascript
import { Header, Box, Heading, Nav, Link } from "sutairu-ui";

function App() {
  return (
    <Header $w="100%" $h="80px">
      <Box $w="30%" $justify="flex-start">
        <Heading $font="25px">sutairu</Heading>
      </Box>
      <Nav $w="40%" $justify="flex-end">
        <Link>doc</Link>
        <Link>Github</Link>
      </Nav>
    </Header>
  );
}
```


### Topography Layout Component
topgraphy components contains heading and text which return h1 to h6 tag depending on the one needed and p tag respectively.

```javascript
import { Box, H, Text } from "sutairu-ui";

function App() {
  return (
    <Box $w="100%" $h="80px">
        <H $font="25px">sutairu</H>
        <Text>paragraph</Text>
    </Box>
  );
}
```

## Props 
to style sutairu components the way you want you will need to declare your own styles and pass them to each components as props, which can be done using shorthand props prefix with the "$" sign. 

### Props Example
in this example $font is a props to change the font size of H component and $w and $h are props that declare the Box component width and height respectively.

```javascript
import { Box, H } from "sutairu-ui";

function App() {
  return (
    <Box $w="100%" $h="80px">
        <H $font="25px">sutairu</H>
    </Box>
  );
}
```



### Responsiveness Props
Responsive props are special props that focus on responsiveness, they accept styling objects which are pass to each components as props.

```javascript
import { Box, H } from "sutairu-ui";

function App() {
  return (
    <Box $w="100%" $h="80px">
        <H $font="100px" $ip={{font: "90px"}} $mb={{font: "60px"}} $sm={{font: "56px"}}>sutairu</H>
    </Box>
  );
}

```
ip props is going to change the font size of H component to 90px on ipad screen,
mb props is going to change the font size of  H component to 60px on mobile screen,
sm props is going to change the font size of H component to 56px on smaller mobile screen


## Shorthand Props
width: $w
height: $h 
alignItems: $align
justifyContent: $justify
flexDirection: $dir
backgroundColor: $bg
color: $fg 
fontSize: $font
display: $dis
textAlign: $txalign

#### note: all props are css value in string quotation and are prefix with $ which prevent props from been rendered to the DOM.


## License
MIT


[![NPM](https://img.shields.io/npm/v/sutairu-ui.svg)](https://www.npmjs.com/package/sutairu-ui)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Contact](https://img.shields.io/badge/contact-@zediculz-blue.svg?style=flat&logo=twitter)](https://twitter.com/zediculz)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/sutairu-ui?label=bundle%20size&logo=webpack)](https://bundlephobia.com/result?p=sutairu-ui)

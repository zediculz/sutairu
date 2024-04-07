
# Sutairu

A lightweight react component building blocks, that generate in-line styling at build time

## Install

```bash
npm install --save sutairu-ui

```
## how to use Sutairu UI 
to make use of the sutairu components without issue, you will need to wrap your App within the Container components and provide your theming object.

### Container Component
container component is the actual container that all sutairu UI components are wrapped with, this component expect a single child which should be your <App /> component.

```js
import { Container, useTheme } from "sutairu-ui";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Container>
      <App />
    </Container>
  </React.StrictMode>,
)

```
### useTheme Hook 
now that the container component have been used properly we will need to add the theme object, the theme object defines some basic color options for both light and dark mode and also the media query sizes.
to define your app theme you will import the useTheme hook and pass in the theme object, the object contains 
1. light which hold the color and backgroundColor of your app in dark mode,
2. dark which hold the color and backgroundColor of your app in dark mode,
3. is where you define the media query sizes you want for the four breakpoints provided to achieve responsiveness design, base is the main desktop, ip is the ipad screen, mb is the mobile screen and sm is for smaller mobile screens.

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
        base: '(min-width: 1024px)',
        ip: '(max-width: 768px)',
        mb: '(max-width: 425px)',
        sm: '(max-width: 375px)',
    }
}

useTheme(theme)
```

## Basic Usage

```js
import { Heading } from "sutairu-ui";

const App = () => {
  return <Heading font="20px">sutairu</Heading>;
};

```

## Layout Components

By default sutairu layout components are flex components and also accept shorthand props to easily style them the way you want. 

### Block Layout Component
Block component return a section tag by default, which most of the time can be used as wrappper for multiple layouts.

```javascript
import { Block, Box } from "sutairu-ui";

function App() {
  return (
    <Block h="400px" w="100%" align="center" justify="center" dir="column">
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
Box component return a div tag by default, most of the time can also be used as wrappper for topography or as a layout.

```javascript
import { Box } from "sutairu-ui";

function App() {
  return (
    <Box h="400px" w="100%" align="center" justify="center" dir="column">
      <Text font="18px" fg="red">
        a stylish react building block components UI
      </Text>
    </Box>
  );
}
```

### Header Layout Component
Header component return a header tag by default, the header tag as a special child Nav tag thats can be used to hold naviagtion links inside the Header component.

```javascript
import { Header, Box, Heading, Nav, Link } from "sutairu-ui";

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
  );
}
```


### Topography Layout Component
topgraphy components contains heading and text which return h1 to h6 tag depending on the one needed and p tag.

```javascript
import { Box, Heading, Text } from "sutairu-ui";

function App() {
  return (
    <Box w="100%" h="80px">
        <Heading font="25px">sutairu</Heading>
        <Text>paragraph</Text>
    </Box>
  );
}
```

## Props 
to style or customize sutairu components the way you want you will need to declare your own styles and pass them to each components as props. 
sutairu UI have two type of styling props, we have the direct props and the specials props.
the direct props are the props you pass directly to each compponents while special props are props that receive an object of props.

### Direct Props
in this example font is direct props to change the font size of Heading component and w and h are direct props that gives the Box component a width and height respectively.

```javascript
import { Box, Heading } from "sutairu-ui";

function App() {
  return (
    <Box w="100%" h="80px">
        <Heading font="25px">sutairu</Heading>
    </Box>
  );
}
```


### Special Props
we have only one special props for now, we have neo props that focus on neobrutalism styling.

```javascript
import { Box, Heading } from "sutairu-ui";

function App() {
  return (
    <Box w="100%" h="80px" neo={{b: '1px solid #222', bs: '1px 2px 0px #222', br: '8px'}}>
        <Heading font="25px">sutairu</Heading>
    </Box>
  );
}

```


### Responsive Props
Responsive props are special props that focus on responsiveness, they accept styling objects which are pass to each components as props.

```javascript
import { Box, Heading } from "sutairu-ui";

function App() {
  return (
    <Box w="100%" h="80px">
        <Heading font="100px" 
        ip={{font: "90px"}}   mb={{font: "60px"}} sm={{font: "56px"}}>sutairu</Heading>
    </Box>
  );
}

```
ip props is going to change the font size to 90px on ipad screen,
mb props is going to change the font size to 60px on mobile screen,
sm props is going to change the font size to 56px on smaller mobile screen
## License

MIT

[![NPM](https://img.shields.io/npm/v/sutairu-ui.svg)](https://www.npmjs.com/package/sutairu-ui)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Contact](https://img.shields.io/badge/contact-@zediculz-blue.svg?style=flat&logo=twitter)](https://twitter.com/zediculz)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/sutairu-ui?label=bundle%20size&logo=webpack)](https://bundlephobia.com/result?p=sutairu-ui)

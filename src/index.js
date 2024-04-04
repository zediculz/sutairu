// a css mobile first framework that comes with headless components
// can be customize with flexible ability on flex and grid
import Container from './utils'

//LAYOUTS
// header main tag and its blocks
import Header from './components/header/Header'
import Nav from './components/header/Nav'
import Heading from './components/header/heading'
import Link from './components/header/Link'

// Block, Flex stack and Box component
import Block from './components/body/Block'
import Box from './components/body/box'
import Stack from './components/body/VStack'
import Text from './components/body/text'


// DISCLOSURE COMPONENTS
// notify main and its blocks
import Notify from './components/alert/notify'
import { NotifyBody, NotifyHead } from './components/alert/notify'

// alerts main and alert blocks
import Alert from './components/alert/alert'
import { AlertBody, AlertHead, AlertIcon } from './components/alert/alert'


// button component
import Button from './components/button/index'


// more components
import Avatar from './components/media/avatar'
import Icon from './components/media/icon'


import AppBar from './components/appHeader'
import BottomDrawer from './components/appHeader/bottom'

// tooling 
// hooks
import { setMedia, useTheme } from './utils/util'


export {
  Container,
  Header,
  Nav,
  Heading, Text,
  Link,
  Stack,
  Block, Box,
  Notify, NotifyHead, NotifyBody, 
  useTheme,
  Alert, AlertBody, AlertHead, AlertIcon,
  Button,
  Icon, Avatar, setMedia, AppBar, BottomDrawer
}

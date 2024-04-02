// a css mobile first framework that comes with headless components
// can be customize with flexible ability on flex and grid
import Container from './utils'

// header main tag and its blocks
import Header from './components/header/Header'
import Nav from './components/header/Nav'
import Heading from './components/header/heading'
import Link from './components/header/Link'

// Block, Flex stack and Box component
import Block from './components/body/Block'
import HStack from './components/body/HStack'
import VStack from './components/body/VStack'
import { Box } from './components/body/Block'
import Text from './components/body/text'
// alerts main and alert blocks
import Alert from './components/alert/alert'
import { AlertBody, AlertHead, AlertIcon } from './components/alert/alert'

// notify main and blocks
import Notify from './components/alert/notify'
import { NotifyBody, NotifyHead } from './components/alert/notify'

// button
import Button from './components/button/index'

// more
import Avatar from './components/media/avatar'
import Icon from './components/media/icon'


// tooling
import {useTheme, useNTheme} from './utils/utils'




import AppHeader from './components/appHeader'





export {
  Container,
  Header,
  Nav,
  Heading, Text,
  Link,
  HStack,
  VStack,
  Block, Box,
  Notify, NotifyHead, NotifyBody, 
  useTheme,
  useNTheme,
  Alert, AlertBody, AlertHead, AlertIcon,
  Button,
  Icon, Avatar, AppHeader
}

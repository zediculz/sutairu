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
import Stack from './components/body/VStack'
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



export {
  Container,
  Header,
  Nav,
  Heading, Text,
  Link,
  Stack,
  Block,
  Notify, NotifyHead, NotifyBody, 
  useTheme,
  useNTheme,
  Alert, AlertBody, AlertHead, AlertIcon,
  Button,
  Icon, Avatar
}

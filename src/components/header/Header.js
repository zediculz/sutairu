import React from 'react'
import style from '../../index.css'

function Header(props) {
  const type = props.type
  const children = props.children
  const { theme } = props
  const typetag = headerVariants.filter((e) => e.type === type)[0]
  return <typetag.child children={children} theme={theme} />
}

const LogoHeader = (props) => {
  return <header style={props.theme}>{props.children}</header>
}

const LogoLinkHeader = (props) => {
  const logo = props.children.filter((c) => c.type.name === 'Logo')[0]
  const nav = props.children.filter((c) => c.type.name === 'Nav')[0]
  return (
    <header style={props.theme} className={style.doublenav}>
      <div className={style.logowrap}>{logo.props.children}</div>
      <nav className={style.nav}>{nav.props.children}</nav>
    </header>
  )
}

const DoubleHeader = (props) => {
  const logo = props.children.filter((c) => c.type.name === 'Logo')[0]
  const navOne = props.children.filter((c) => c.type.name === 'Nav')[0]
  const navTwo = props.children.filter((c) => c.type.name === 'Nav')[1]

  return (
    <header style={props.theme} className={style.doublenav}>
      <nav className={style.nav}>{navOne.props.children}</nav>
      <div className={style.logowrap}>{logo.props.children}</div>
      <nav className={style.nav}>{navTwo.props.children}</nav>
    </header>
  )
}

const headerVariants = [
  { type: 'logo', child: LogoHeader },
  { type: 'logolink', child: LogoLinkHeader },
  { type: 'doublelink', child: DoubleHeader }
]

export default Header

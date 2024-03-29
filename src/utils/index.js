// contain the main top container component
import React from 'react'

import style from '../index.css'

function Container(props) {
  return (
    <section style={props.theme} className={style.maincontainer}>
      {props.children}
    </section>
  )
}

export default Container

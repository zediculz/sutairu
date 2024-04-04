// contain the main top container component
import React from 'react'

import style from '../index.css'

function Container(props) {
  // we are going to setup some rules here
 
  return (
    <section className={style.maincontainer}>
      {props.children}
    </section>
  )
}

export default Container

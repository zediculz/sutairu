// contain the main top container component
import React from 'react'

import style from '../index.css'

function Container(props) {
  return (
    <section className={style.maincontainer}>
      {props.children}
    </section>
  )
}

export default Container

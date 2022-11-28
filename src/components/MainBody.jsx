import React from 'react'

export default function MainBody({mode}) {
  return (
    <div className={mode==true?"mainBody bg-dark text-light" : "mainBody bg-light"}>MainBody</div>
  )
}

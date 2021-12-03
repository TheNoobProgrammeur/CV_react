/* eslint-disable react/prop-types */
import React from "react"
import devicon from "devicon"

export const Devicon = (props) => {
  const format = `devicon-${props.name}-${props.logoStyle}`
  return <i className={`${format} ${props.iconClass}`} />
}

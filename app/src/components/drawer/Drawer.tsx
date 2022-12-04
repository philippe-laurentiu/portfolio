import React from 'react'

export interface ToggleDrawer {
  toggle: boolean
  setToggle: (val: boolean) => void
}

const Drawer = (props: any): JSX.Element => {
  console.log(props.children)
  return (
    <div>{props.children}</div>
  )
}
export default Drawer

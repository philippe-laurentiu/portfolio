import React from 'react'

export interface ToggleDrawer {
  toggle: boolean
  setToggle: (val: boolean) => void
}

const Drawer = (props: any): JSX.Element => {
  return (
    <div>{props.children}</div>
  )
}
export default Drawer

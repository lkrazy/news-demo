import React, { Component } from 'react'
import LeftMenu from '@/components/Navbar/LeftMenu'
import {
  Drawer,
  Button
} from 'antd'
import './Navbar.scss'


class Navbar extends Component {
  state = {
    drawer: false
  }

  onDrawerOpen = () => {
    this.setState({ drawer: true })
  }

  onDrawerClose = () => {
    this.setState({ drawer: false })
  }

  render() {
    const { drawer } = this.state

    return (
      <div className="menuBar">
        <div className="logo">
          <a href="#">logo</a>
        </div>
        <div className="menuCon">
          <div className="leftMenu">
            <LeftMenu />
          </div>
          <Button className="barsMenu" type="primary" onClick={this.onDrawerOpen}>
            <span className="barsBtn"></span>
          </Button>
          <Drawer
            title="Basic Drawer"
            placement="right"
            closable
            onClose={this.onDrawerClose}
            visible={drawer}
          >
            <LeftMenu />
          </Drawer>
        </div>
      </div>
    )
  }

}

export default Navbar

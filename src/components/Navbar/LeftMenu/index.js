import React from 'react'
import { Menu } from 'antd'
// const { ItemGroup, SubMenu } = Menu

class LeftMenu extends React.PureComponent {
  render() {
    return (
      <Menu mode="horizontal">
        <Menu.Item key="mail">
          <a href="">Home</a>
        </Menu.Item>
        {/*<SubMenu title={<span>Blogs</span>}>*/}
        {/*  <ItemGroup title="Item 1">*/}
        {/*    <Menu.Item key="setting:1">Option 1</Menu.Item>*/}
        {/*    <Menu.Item key="setting:2">Option 2</Menu.Item>*/}
        {/*  </ItemGroup>*/}
        {/*  <ItemGroup title="Item 2">*/}
        {/*    <Menu.Item key="setting:3">Option 3</Menu.Item>*/}
        {/*    <Menu.Item key="setting:4">Option 4</Menu.Item>*/}
        {/*  </ItemGroup>*/}
        {/*</SubMenu>*/}
        <Menu.Item key="alipay">
          <a href="">Contact Us</a>
        </Menu.Item>
      </Menu>
    )
  }
}

export default LeftMenu

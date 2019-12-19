import React from 'react'
import {
  Layout,
  Breadcrumb,
} from 'antd'
import Navbar from '@/components/Navbar/Navbar';

const { Header, Content, Footer } = Layout

const Home = () => {
  return (
    <Layout className="layout">
      <Header>
        <Navbar/>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  )
}

export default Home

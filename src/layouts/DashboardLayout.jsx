import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Button, Layout } from 'antd'
import { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Navbar from '../components/(dashboard)/Navbar'
import Sidebar from '../components/(dashboard)/Sidebar'
import useAuthStore from '../store/authStore'
import Loading from '../components/Loading'
const { Header, Footer, Sider, Content } = Layout

const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false)
  const { user, isLoading } = useAuthStore()

  if (isLoading) return <Loading />

  if (!user?.email) return <Navigate to="/login" />
  if (user?.role !== 'admin') return <Navigate to="/" />

  return (
    <Layout className="min-h-screen">
      <Sider
        className="drop-shadow-2xl"
        collapsible
        collapsed={collapsed}
        theme="light"
        width={256}
        trigger={null}
      >
        <Sidebar collapsed={collapsed} />
      </Sider>
      <Layout>
        <Header className="bg-white pr-12 pl-0 flex items-center gap-4">
          <Button
            type="default"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            className="inline-block text-base -ml-4"
          />
          <Navbar />
        </Header>
        <Content>
          <Outlet />
        </Content>
        <Footer className="text-center">
          Spring Store ©{new Date().getFullYear()} Created by{' '}
          <a href="https://github.com/spring8904" target="_blank">
            spring8904
          </a>
        </Footer>
      </Layout>
    </Layout>
  )
}
export default DashboardLayout

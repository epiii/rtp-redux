import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Icon, Layout, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

function Nav() {
    const navStyle = {
        color: 'white'
    }

    const handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    return (
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['all']}
                style={{ lineHeight: '64px' }}
                mode="horizontal"
            // onClick={handleClick}
            // selectedKeys={[this.state.current]}
            >
                <Menu.Item key="all">
                    <Link to="/rtp-redux/wild-pokemon-list">
                        <Icon type="appstore" />
                        All
                </Link>
                </Menu.Item>

                <Menu.Item key="alipay">
                    <Link to="/rtp-redux/my-pokemon-list">
                        <Icon type="mail" />
                        My Collection
                </Link>
                </Menu.Item>

            </Menu>
        </Header>
    )
}

export default Nav

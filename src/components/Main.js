import React, { Component, Fragment } from 'react';
import logo from '../logo.png';
import { Layout, Input } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const { Search } = Input;

export default class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { userName } = this.props;

        return(
            <Layout>
                <Header className="header">
                    Header
                </Header>
                <Content className="content">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p> Edit <code>src/App.js</code> and save to reload. </p>
                </Content>
                <Footer className="footer">
                    Footer
                </Footer>
            </Layout>
        )
    }
}
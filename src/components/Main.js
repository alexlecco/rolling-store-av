import React, { Component, Fragment } from 'react';
import logo from '../logo.png';
import { Layout, Input, Row, Col } from 'antd';
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
                    <Row>
                        <Col xs={{ span: 5 }} lg={{ span: 3 }}>
                            <img src={logo} className="header-logo" alt="logo" />
                        </Col>
                        <Col xs={{ span: 19 }} lg={{ span: 16 }}>
                            <div className="header-search">Buscador</div>
                        </Col>
                        <Col xs={{ span: 0 }} lg={{ span: 5 }}>
                            <div className="header-greetings">Saludo</div>
                        </Col>
                    </Row>
                </Header>

                <Content className="content">
                    <p> Edit <code>src/App.js</code> and save to reload. </p>
                </Content>
 
                <Footer className="footer">
                    Footer
                </Footer>
            </Layout>
        )
    }
}
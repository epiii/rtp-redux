import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Nav from './Nav'
import MyPokemonList from './pages/MyPokemonList'
import WildPokemonList from './pages/WildPokemonList'
import WildPokemonDetail from './pages/WildPokemonDetail'
import './index.css'
// import { useSelector, useDispatch } from 'react-redux'

import { Layout, Breadcrumb } from 'antd';
const { Content, Footer } = Layout;

function App() {
  return (
    <Router>
      <Layout>
        <Nav />

        <Content style={{ padding: '0 50px', marginTop: 64 }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>

          <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
            <Switch>
              {/* <Route exact path="/" component={Home} /> */}
              {/* <Route exact path="/" component={WildPokemonList} /> */}
              <Route path="/rtp-redux/wild-pokemon-list" component={WildPokemonList} />
              <Route path="/rtp-redux/wild-pokemon-detail/:id" component={WildPokemonDetail} />
              <Route path="/rtp-redux/my-pokemon-list" component={MyPokemonList} />
            </Switch>
          </div>

        </Content>

        {/* </div> */}
      </Layout>

    </Router>
  );
}
const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
)
export default App;

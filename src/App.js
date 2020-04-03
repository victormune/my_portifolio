import React from 'react';
import {Header, Layout, Navigation, Drawer, Content} from 'react-mdl'
import './App.css';
import Main from './components/main';
import Logo from './logo.png'

import {Link} from 'react-router-dom'

function App() {
  return (
    <div className="main-content">
    <Layout>
            <Header className="header-color" title={<a href="/" ><img src={Logo} alt="logo" width="200px" height="200px" /></a>} water >
            
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title={<a href="/" ><img src={Logo} alt="logo" width="200px" height="200px" /></a>}
         style={{backgroundColor:"darkred",color:"white"}}>

            <Navigation>
            <Link to="/resume" style={{color:"white"}}>Resume</Link>
            <Link to="/aboutme" style={{color:"white"}}>About Me</Link>
            <Link to="/projects" style={{color:"white"}}>Projects</Link>
            <Link to="/contact" style={{color:"white"}}>Contact</Link>
            </Navigation>
            
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main />
        </Content>
    </Layout>
</div>
  );
}

export default App;

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';


import Footer from './components/Footer.js';
import HomePage from './pages/HomePage.js';
import AboutPage from './pages/AboutPage.js';
import ContactPage from './pages/ContactPage.js';


class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      title: "Shailey Kadam",
      headerLinks: [
      { title: 'Home', path: '/'},
      { title: 'About', path: '/about' },
      { title: 'Contact', path: '/contact'}
    ] ,
    home: {
      title: "Be Relentless",
      subTitle: 'Projects that make a difference',
      text: "Checkout my projects"
    },
    about: {
      title: "About Me"
    },
    contact: {
      title: "Let's Talk"
    },

    }
  }

  render(){
    return ( 
      <Router>
        <Container className='p-0' fluid={true}>
        <Navbar className = 'border-bottom' bg='transparent' expand='lg'>
            <Navbar.Brand>Shailey Kadam</Navbar.Brand>
            <Navbar.Toggle className ='border-0'aria-controls = 'navbar-toggle' />
            <Navbar.Collapse id='navbar-toggle'>
              <Nav className='ml-auto'>
                <Link className ='nav-link' to='/'>Home</Link>
                <Link className ='nav-link' to='/about'>About</Link>
                <Link className ='nav-link' to='/contact'>Contact</Link>

               
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route path="/" exact render={()=> <HomePage title= {this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text}/>} ></Route> 
          <Route path="/about"  render={()=> <AboutPage title= {this.state.about.title} />} ></Route> 
          <Route path="/contact"  render={()=> <ContactPage title= {this.state.contact.title} />} ></Route> 
         <Footer />
        </Container>
      </Router>
    );
  }
  
}

export default App;

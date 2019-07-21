import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Row, Col, Container, Jumbotron } from 'react-bootstrap'
import './App.css'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import './About'
import './Blog'
import Home from'./Home'
import Blog from './Blog'
import Contact from './Contact'
import About from './About'





class App extends React.Component {

  

  state = {
    loading: true
   }

   
 
  
  

  //call to api
  async componentDidMount() {
    const url = 'https://api.coinlore.com/api/global/'
    const url2 = 'https://api.kanye.rest'
    const url3 = 'https://dog.ceo/api/breeds/image/random'

    //url response
    const response = await fetch(url)
    const resp = await fetch(url2)
    const res = await fetch(url3)

    //return json
    const data = await response.json()
    const da = await res.json()
    const d = await resp.json()
    
    this.setState({ data: data, d:d, da:da, loading: false })
    
    }
  renderData() {
    
    // if loading return loading h2
    if (this.state.loading) {
      return <h2>loading...</h2>
    }
    
    // if loaded return data
    return <div>
    <Container>
      <Row>
        <Col className='textFont'>Today's Etherium Price: { this.state.data[0].eth_d } </Col>
        <Col className='textFont ctext'>Today's Puppy: <br />
        <img className='resize' src={ this.state.da.message }  alt="dog"
        /></Col>
        <Col className='textFont'>Today's Kanye Quote: "{ this.state.d.quote }" </Col>
      
     </Row>
   </Container>
 </div>
              
               
           
           
    } 
    
  render() {
    
    
          
      

    return (
      

      <Container>
        <Jumbotron className='hbackground'>
         
          <Row>

             <Col className='text text-center'><h1>My React Project</h1></Col>

          </Row>


        </Jumbotron>

        {this.renderData()}
        
        <BrowserRouter>
          <div>
            
              <span><Link to="/Home">Home |</Link>{' '}</span>
             
              <span><Link to="/About">About |</Link>{' '} </span>
              
                <span><Link to="/contact">Contact |</Link> </span>
              
                <span><Link to="/blog">Blog </Link></span>
              
         
            <Route exact path ='/' component ={ Home }/>
            <Route path ='/about' component ={ About }/>
            <Route path ='/contact' component ={ Contact }/>
            <Route path ='/blog' component ={ Blog }/>
            
          </div>  

        </BrowserRouter>
        

      
      </Container>

      



    )
    
  }

}






export default App









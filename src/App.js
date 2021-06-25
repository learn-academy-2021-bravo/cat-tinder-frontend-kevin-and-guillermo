import React, { Component } from 'react'
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import HeroIndex from './pages/HeroIndex'
import HeroShow from './pages/HeroShow'
import HeroNew from './pages/HeroNew'
import HeroEdit from './pages/HeroEdit'
import NotFound from './pages/NotFound'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import mockHero from './mockHero.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      heros: []
    }
  }

  componentDidMount(){
    this.readHero()
  }

  readHero = () => {
    fetch("http://localhost:3000/heros")
    .then(response => {
      return response.json()
    })
    .then(herosArray => {
      this.setState({ heros: herosArray})
    })
    .catch(errors => {
      console.log("hero read fetch errors", errors)
    })
  }

  createHero = (newhero) => {
    fetch("http://localhost:3000/heros", {
      body: JSON.stringify(newhero),
      headers:{
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then(response =>{
      if(response.status === 422){
        alert("please check submission.")
      }
      return response.json()
    })
    .then(payload => {
      this.readHero()
    })
    .catch(errors => {
      console.log("create errors:", errors)
    })
  }

render(){
  return(
  <Router>
    <Header/>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/heroindex" render={( props ) =>  <HeroIndex heros={this.state.heros}/> }/>
        <Route path="/heroshow/:id" render= {(props) => {
          let id = props.match.params.id
          let hero = this.state.heros.find(hero => hero.id === +id)
          return <HeroShow hero = {hero}/>
        }} />
        <Route path="/heronew" render={(props) => <HeroNew createHero={this.createHero}/> } />
        <Route path="/heroedit/:id" component={ HeroEdit } />
        <Route component={ NotFound }/>
      </Switch>
    <Footer/>
  </Router>
  );
}
}

export default App;

import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import HeroIndex from './pages/HeroIndex'
import HeroShow from './pages/HeroShow'
import HeroNew from './pages/HeroNew'
import HeroEdit from './pages/HeroEdit'
import NotFound from './pages/NotFound'
import mockHero from './mockHero.js'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      hero: mockHero
    }
  }
}



function App(){
  return (
  <>
    <Header/>
    <Footer/>
    <Home/>
    <HeroIndex/>
    <HeroShow/>
    <HeroNew/>
    <HeroEdit/>
    <NotFound/>
  </>
  );
}

export default App;

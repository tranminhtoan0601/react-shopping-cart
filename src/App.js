import { Route, Switch } from 'react-router';
import './App.css';
import About from './component/About';
import Cart from './component/Cart';
import Footer from './component/footer';
import Header from './component/Header';
import Store from './component/Store';

function App() {
  return (

    <div>
      <Header/>
      <Switch>
      <Route path="/" component={Store} exact/>  
      <Route path="/about" component={About}/>  
      <Route path="/cart" component={Cart}/>
      </Switch>
      
      <Footer/>
    
    </div>
  );
}

export default App;

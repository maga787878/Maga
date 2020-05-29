import React from 'react';
import Navi from '../navi/Navi'
import "../styles/App.css"
import Information from '../Information/Information';
import {Switch,Route} from 'react-router-dom'
import Work from '../path/Work/Work'
import Footer from '../Footer/Footer';
import About from '../path/About me/About';

function App() {
  return (
    <div >
    <Navi/>
    <Switch>
      <Route exact path="/" component={Information}/>

      <Route exact path="/work" component={Work}/>
      <Route exact path="/about" component={About}/>
    </Switch>

  <Footer/>
   
</div>
  );
}

export default App;

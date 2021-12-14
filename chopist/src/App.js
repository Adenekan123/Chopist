import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



//Components
import Header from './components/Header';
import Home from './components/Home';
import Food from './components/Food';
// import NotFound from './components/NotFound';




import { GlobalStyle } from './GlobalStyle';




const App = () => {
  return (
    <div className="App">
    <Router>
        <Header />
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/:foodId' component={Food} />
            {/* <Route exact  component={NotFound} /> */}
        </Switch>
    </Router>
      <GlobalStyle />
    </div>
  );
}

export default App;

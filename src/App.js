import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Header />
      <main className="flex-grow">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/skills" component={Skills} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

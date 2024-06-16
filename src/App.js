import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header, Footer, Home, Projects, Skills, Contact } from "./components";

function App() {
  return (
    <Router>
      <Header />
      <Contact />
      <main className="flex-grow">
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/skills" component={Skills} />
          <Route path="/contact" component={Contact} />
        </Routes>
      </main>
      <Projects />
      <Skills />
      <Footer />
    </Router>
  );
}

export default App;

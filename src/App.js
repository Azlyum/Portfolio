import React from "react";
import { ThemeProvider, ThemedComponent } from "./ThemeContext";
import { BrowserRouter as Router } from "react-router-dom";
import {
  Header,
  Footer,
  Home,
  Projects,
  Skills,
  Contact,
  Experience,
} from "./components";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div id="Home" />
        <ThemedComponent
          lightStyles={{
            background: "linear-gradient(to right, #1f4f9d, #1d9d6d)",
            color: "white",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
          darkStyles={{
            background: "linear-gradient(to right, #1f2937, #111827)",
            color: "white",
            boxShadow: "0 2px 4px rgba(0,0,0,0.5)",
          }}
        >
          <Header />
          <main className="flex-grow">
            <Home />
            <Projects />
            <Experience />
            <Skills />
            <Contact />
            <Footer />
          </main>
        </ThemedComponent>
      </Router>
    </ThemeProvider>
  );
}

export default App;

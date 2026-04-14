import React from "react";
import { Hero } from "./components/sections/Hero";
import { Experience } from "./components/sections/Experience";
import { ProjectShowcase } from "./components/sections/ProjectShowcase";

function App() {
  return (
    <>
      <main>
        <Hero />
        <ProjectShowcase />
        <Experience />
      </main>

      <footer className="siteFooter">
        <div className="container">
          <p>
            &copy; {new Date().getFullYear()} Leonardo Teodoro Laureano.
            Currículo web direcionado a vaga de Web Designer.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;

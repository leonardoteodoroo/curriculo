import React from 'react';
import { Hero } from './components/sections/Hero';
import { Experience } from './components/sections/Experience';
import { ProjectShowcase } from './components/sections/ProjectShowcase';

function App() {
  return (
    <>
      <main>
        <Hero />
        <Experience />
        <ProjectShowcase />
      </main>
      
      <footer style={{ textAlign: 'center', padding: 'var(--space-8) 0', color: 'var(--text-muted)' }}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Leonardo Teodoro. Todos os direitos reservados.</p>
        </div>
      </footer>
    </>
  );
}

export default App;

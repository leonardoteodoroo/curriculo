import React from 'react';
import { Hero } from './components/sections/Hero';
import { Skills } from './components/sections/Skills';
import { ProjectShowcase } from './components/sections/ProjectShowcase';

function App() {
  return (
    <>
      <main>
        <Hero />
        <Skills />
        <ProjectShowcase />
      </main>
      
      <footer style={{ textAlign: 'center', padding: 'var(--space-8) 0', color: 'var(--text-muted)' }}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Leonardo Teodoro Laureano. Todos os direitos reservados.</p>
        </div>
      </footer>
    </>
  );
}

export default App;

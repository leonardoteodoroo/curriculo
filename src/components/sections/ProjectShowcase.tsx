import React from 'react';
import { Card, CardContent } from '../ui/Card';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import styles from './ProjectShowcase.module.css';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
}

const PROJECTS_DATA: Project[] = [
  {
    id: '1',
    title: 'E-commerce React Moderno',
    description: 'Interface de loja virtual com carrinho de compras, checkout otimizado e painel administrativo.',
    image: '/assets/eu.png', // Usando placehoder da imagem por enquanto
    tags: ['React', 'TypeScript', 'WCAG 2.2'],
    liveUrl: '#',
  },
  {
    id: '2',
    title: 'Landing Page Advocacia',
    description: 'Página de alta conversão para escritório de advocacia com formulário multi-step e prova social.',
    image: '/assets/eu.png',
    tags: ['HTML5', 'CSS3', 'Design System'],
    liveUrl: '#',
  },
  {
    id: '3',
    title: 'Dashboard Analítico',
    description: 'Dashboard para visualização de métricas de marketing com gráficos interativos e dark mode.',
    image: '/assets/eu.png',
    tags: ['UI/UX', 'Vite', 'Recharts'],
    liveUrl: '#',
  }
];

export function ProjectShowcase() {
  return (
    <section id="projetos" className={styles.section} aria-label="Projetos em Destaque">
      <div className="container">
        
        <header className={styles.header}>
          <h2 className={styles.title}>Projetos em Destaque</h2>
        </header>

        <div className={styles.grid}>
          {PROJECTS_DATA.map((project) => (
            <Card key={project.id} as="article">
              <CardContent style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <img 
                  src={project.image} 
                  alt={`Captura de tela do projeto ${project.title}`} 
                  className={styles.projectImage}
                  loading="lazy"
                />
                
                <h3 className={styles.projectTitle}>{project.title}</h3>
                
                <p className={styles.projectDesc}>{project.description}</p>
                
                <div className={styles.tags} aria-label="Tecnologias utilizadas">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
                
                <div className={styles.cardFooter}>
                  {project.liveUrl && (
                    <Button variant="primary" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Ver Projeto</a>
                    </Button>
                  )}
                  {project.repoUrl && (
                    <Button variant="outline" asChild>
                      <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">Ver Código</a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}

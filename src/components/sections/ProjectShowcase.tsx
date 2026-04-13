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
    id: 'lotar-agenda',
    title: 'Projeto: Como Lotar Sua Agenda',
    description: 'Landing Page de alto impacto com foco em conversão imediata. Arquitetura de informação otimizada para prestadores de serviços.',
    image: '/assets/perfil.jpg', // Sugerido substituir por print do projeto
    tags: ['Conversion Rate Optimization', 'UI Design', 'React'],
    liveUrl: 'https://comolotarsuaagenda.semprenamoda.com.br',
  },
  {
    id: 'calistenia',
    title: 'Estrategista: Calistenia Sob Medida',
    description: 'Ecossistema digital completo. Do design da interface à integração de fluxos de experiência do usuário (UX).',
    image: '/assets/perfil.jpg',
    tags: ['UX Strategy', 'Web Design', 'Digital Product'],
    liveUrl: 'https://calistenia-sob-medida.semprenamoda.com.br',
  },
  {
    id: 'portfolio-premium',
    title: 'Portfolio Profissional 2026',
    description: 'Este projeto: Um currículo web de alta performance, acessível (WCAG 2.2) e focado em design minimalista.',
    image: '/assets/perfil.jpg',
    tags: ['Clean Code', 'Typography', 'Accessibility'],
    repoUrl: 'https://github.com/leonardoteodoroo/curriculo',
  }
];

export function ProjectShowcase() {
  return (
    <section id="projetos" className={styles.section} aria-label="Projetos em Destaque">
      <div className="container">

        <header className={styles.header}>
          <span className={styles.eyebrow}>Portfólio & Cases</span>
          <h2 className={styles.title}>Projetos em Destaque</h2>
          <p className={styles.sectionDesc}>
            Uma amostra do meu trabalho unindo estética, técnica e estratégia de conversão.
          </p>
        </header>

        <div className={styles.grid}>
          {PROJECTS_DATA.map((project) => (
            <Card key={project.id} as="article" className={styles.projectCard}>
              <CardContent className={styles.cardInner}>
                <div className={styles.imageWrapper}>
                  <img
                    src={project.image}
                    alt={`Preview do projeto ${project.title}`}
                    className={styles.projectImage}
                    loading="lazy"
                  />
                  <div className={styles.overlay}>
                    <Button variant="primary" size="sm" asChild>
                      <a href={project.liveUrl || project.repoUrl} target="_blank" rel="noopener noreferrer">
                        Explorar Case
                      </a>
                    </Button>
                  </div>
                </div>

                <div className={styles.content}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDesc}>{project.description}</p>

                  <div className={styles.tags} aria-label="Tecnologias e conceitos">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}

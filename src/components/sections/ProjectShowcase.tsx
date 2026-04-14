import React from 'react';
import { Card, CardContent } from '../ui/Card';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import styles from './ProjectShowcase.module.css';

interface Project {
  id: string;
  title: string;
  description: string;
  placeholderLabel: string;
  tags: string[];
  note: string;
  liveUrl?: string;
  repoUrl?: string;
}

const PROJECTS_DATA: Project[] = [
  {
    id: 'lotar-agenda',
    title: 'Como Lotar Sua Agenda',
    description: 'Landing page com copy forte, hierarquia visual voltada para conversão e construção de oferta para prestadores de serviço.',
    placeholderLabel: 'Preview em atualização',
    tags: ['Landing Page', 'Copy visual', 'Conversão'],
    note: 'Substituir screenshot quando quiser manter a versão final do projeto na vitrine.',
    liveUrl: 'https://comolotarsuaagenda.semprenamoda.com.br',
  },
  {
    id: 'calistenia',
    title: 'Calistenia Sob Medida',
    description: 'Página de análise com linguagem mais leve, foco em público feminino e composição de CTA para guiar a ação do usuário.',
    placeholderLabel: 'Preview em atualização',
    tags: ['Página de análise', 'Direção visual', 'CTA'],
    note: 'Substituir screenshot assim que você decidir quais telas quer deixar públicas.',
    liveUrl: 'https://calistenia-sob-medida.semprenamoda.com.br',
  },
  {
    id: 'portfolio-premium',
    title: 'Currículo Premium 2026',
    description: 'Versão web do currículo com estrutura editorial, leitura escaneável e foco em apresentar perfil, trajetória e projetos.',
    placeholderLabel: 'Preview em atualização',
    tags: ['Currículo web', 'Estrutura', 'Apresentação'],
    note: 'Substituir screenshot depois com a captura que você preferir para o case.',
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
            Selecionei alguns trabalhos para reforçar o direcionamento em web design. As áreas de preview abaixo
            estão como placeholder para você trocar pelas imagens finais depois.
          </p>
        </header>

        <div className={styles.grid}>
          {PROJECTS_DATA.map((project) => (
            <Card key={project.id} as="article" className={styles.projectCard}>
              <CardContent className={styles.cardInner}>
                <div className={styles.placeholder}>
                  <div className={styles.placeholderTop}>
                    <span className={styles.placeholderBadge}>{project.placeholderLabel}</span>
                    <span className={styles.placeholderMeta}>Substituir screenshot</span>
                  </div>
                  <div className={styles.placeholderCanvas}>
                    <div className={styles.placeholderBlockLarge} />
                    <div className={styles.placeholderBlockRow}>
                      <div className={styles.placeholderBlockSmall} />
                      <div className={styles.placeholderBlockSmall} />
                    </div>
                    <div className={styles.placeholderLine} />
                    <div className={styles.placeholderLineShort} />
                  </div>
                </div>

                <div className={styles.content}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDesc}>{project.description}</p>
                  <p className={styles.projectNote}>{project.note}</p>

                  <div className={styles.tags} aria-label="Tecnologias e conceitos">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>

                  <div className={styles.actions}>
                    {project.liveUrl && (
                      <Button variant="primary" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          Abrir projeto
                        </a>
                      </Button>
                    )}
                    {project.repoUrl && (
                      <Button variant="outline" asChild>
                        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                          Ver repositório
                        </a>
                      </Button>
                    )}
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

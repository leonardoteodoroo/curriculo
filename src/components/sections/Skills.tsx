import React from 'react';
import { Card, CardHeader, CardContent } from '../ui/Card';
import styles from './Skills.module.css';

const SKILLS_DATA = [
  {
    title: 'Web Design para Conversão',
    description: 'Estruturação de páginas com ordem de leitura, escaneabilidade, hierarquia visual e blocos de decisão para maximização de métricas.',
  },
  {
    title: 'Landing Pages e Vitrines',
    description: 'Criação e adaptação de páginas promocionais, páginas de captura, páginas de produto e apresentação de serviços institucionais.',
  },
  {
    title: 'Copywriting no Layout',
    description: 'Uso de título, subtítulo, CTA transversal, gatilhos de prova e oferta em função do fluxo visual e da intenção da landing page.',
  },
  {
    title: 'Execução Técnica e Deploy',
    description: 'Ajustes de conteúdo baseados em React/Vite, modularização de componentes TSX, Node.js e verificação final para subdomínios via CI/CD.',
  }
];

export function Skills() {
  return (
    <section id="habilidades" className={styles.section} aria-label="Competências">
      <div className="container">
        
        <header className={styles.header}>
          <h2 className={styles.title}>Competências-Chave</h2>
          <p className={styles.subtitle}>
            Foco no que é defensável para um perfil analítico de interface e produção visual para web.
          </p>
        </header>

        <div className={styles.grid}>
          {SKILLS_DATA.map((skill, index) => (
            <Card key={index} as="article">
              <CardHeader>
                <h3 className={styles.skillTitle}>{skill.title}</h3>
              </CardHeader>
              <CardContent>
                <p className={styles.skillDesc}>{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}

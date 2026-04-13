import React from 'react';
import { Card, CardHeader, CardContent } from '../ui/Card';
import { Badge } from '../ui/Badge';
import styles from './Experience.module.css';

const SKILLS_TAGS = [
  "Automação de Agentes AI",
  "Desenvolvimento Web (React/Next.js)",
  "Copywriting de Alta Conversão",
  "Programação em C++",
  "Arquitetura de Prompt (LLMs)",
  "Suporte Técnico VIP (Help Desk)",
  "Liderança Operacional & Logística",
  "Gestão de Levantamento Patrimonial",
  "Vendas & Negociação Premium",
  "Treinamento & Didática"
];

const EXPERIENCE_DATA = [
  {
    title: 'Liderança Operacional & Subgerência',
    company: 'Rede Isaura - Gestão de Varejo',
    period: '2018 - 2021',
    description: 'Gestão de 360º de equipes operacionais (Logística, Produção e Atendimento). Implementação de auditorias ativas em mercadorias e fluxo de fechamento financeiro, o que gerou estabilidade do piso operacional e estancou potenciais furos no fluxo de caixa.',
  },
  {
    title: 'Coordenação de Levantamento Patrimonial',
    company: 'COMDATA - Paço Municipal',
    description: 'Liderei análises lógicas de bases de dados físicas e digitais em escala municipal. Atuei com curadoria, classificação minuciosa e conferência de grandes massas de ativos, assegurando governança impecável da conformidade patrimonial do governo.',
  },
  {
    title: 'Supervisor Fiscal e Conformidade',
    company: 'Metrobus S/A',
    description: 'Monitoramento in-loco em processos de sistemas escaláveis de transporte. Assegurei cumprimento 100% à risca de exigências normais garantindo a otimização de rotas críticas da logística urbana da cidade sob imensa pressão operacional.',
  },
  {
    title: 'Consultor de Vendas & Customer Success',
    company: 'FastShop Flamboyant',
    description: 'Domínio puro das técnicas de vendas aliando "copy verbal" em um contexto de Varejo High-end. Foco estratégico na conversão de leads frios em clientes fieis e alto ticket recorrente prestando consultoria premium em equipamentos e tech gadgets.',
  },
  {
    title: 'Analista Help Desk VIP & Back Office',
    company: 'Bt Call Center',
    period: '2015 - 2017',
    description: 'Suporte ultra rápido (SLA) para hardwares de redes corporativas. Traduzi a dor técnica dos usuários num diagnóstico sistemático acelerando o retorno das instabilidades geradas por falha de rotas conectivas nas infraestruturas do servidor e endpoints.',
  },
  {
    title: 'Instrutor de Informática/Exatas & Administrativo',
    company: 'Escola SESI Jardim Planalto',
    description: 'Transmutei tópicos tidos como complexos (TI e Matemática Avançada) em pílulas didáticas simples de consumir. Também garanti o funcionamento de processos das instâncias administrativas documentando e orquestrando o backoffice educacional da filial.',
  },
  {
    title: 'Assistente de Logística Ativa',
    company: 'Yellow Soluções Mobilidade Ltda.',
    description: 'Manobra rápida no escoamento e operação contínua. Resolvi dores diárias dinâmicas relativas a rotas de abastecimento local e suporte operacional on-field (na rua).',
  }
];

const EDUCATION_DATA = [
  {
    title: 'Engenharia da Computação',
    company: 'PUC Goiás (7º Período)',
    description: 'Foco técnico em Sistemas Embarcados, Redes de Computadores e Desenvolvimento de Software lógico. (Atualmente trancado)',
  },
  {
    title: 'Certificações Extracurriculares',
    company: 'SESI',
    description: 'Comportamento e Gestão de Equipes, Métodos de Pesquisa, Português Novas Regras e Inglês Instrumental.',
  }
];

export function Experience() {
  return (
    <section id="trajetoria" className={styles.section} aria-label="Trajetória e Especialidades">
      <div className="container">
        
        {/* SKILLS TAGS */}
        <div style={{ marginBottom: 'var(--space-12)' }}>
          <header className={styles.header}>
            <h2 className={styles.title}>Especialidades Estratégicas</h2>
          </header>
          <div className={styles.tagsContainer}>
            {SKILLS_TAGS.map(tag => (
              <Badge key={tag} variant="secondary" className={styles.largeBadge}>{tag}</Badge>
            ))}
          </div>
        </div>

        {/* EXPERIENCIA */}
        <div style={{ marginBottom: 'var(--space-12)' }}>
          <header className={styles.header}>
            <h2 className={styles.title}>Trajetória Profissional</h2>
          </header>

          <div className={styles.timeline}>
            {EXPERIENCE_DATA.map((job, index) => (
              <Card key={index} as="article" className={styles.jobCard}>
                <CardHeader className={styles.jobHeader}>
                  <div>
                    <h3 className={styles.jobTitle}>{job.title}</h3>
                    <div className={styles.company}>{job.company}</div>
                  </div>
                  {job.period && (
                    <span className={styles.periodBadge}>{job.period}</span>
                  )}
                </CardHeader>
                <CardContent>
                  <p className={styles.jobDesc}>{job.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* EDUCACAO */}
        <div>
          <header className={styles.header}>
            <h2 className={styles.title}>Educação & Certificações</h2>
          </header>

          <div className={styles.timeline}>
            {EDUCATION_DATA.map((edu, index) => (
              <Card key={index} as="article" className={styles.jobCard}>
                <CardHeader className={styles.jobHeader}>
                  <div>
                    <h3 className={styles.jobTitle}>{edu.title}</h3>
                    <div className={styles.company}>{edu.company}</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className={styles.jobDesc}>{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

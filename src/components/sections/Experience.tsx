import React from 'react';
import { Card, CardHeader, CardContent } from '../ui/Card';
import { Badge } from '../ui/Badge';
import styles from './Experience.module.css';

// Habilidades reposicionadas para vaga de Web Designer
const SKILLS_TAGS = [
  "Web Design (HTML/CSS/React)",
  "UI/UX & Prototipagem",
  "Landing Pages de Alta Conversão",
  "Copywriting Persuasivo",
  "Design Responsivo",
  "Figma & Ferramentas de Design",
  "Noção de JavaScript/TypeScript",
  "WordPress & Builders",
  "Programação em C++",
  "Comunicação & Didática",
  "Suporte Técnico (Help Desk)",
  "Gestão de Equipes & Back Office",
];

// Experiências reais do DOCX — reframeadas para destacar competências visuais/comunicação
const EXPERIENCE_DATA = [
  {
    title: 'Liderança Operacional & Subgerência',
    company: 'Rede Isaura Supermercados',
    period: '2018 - 2021',
    description:
      'Responsável pela equipe de reposição, embalagem, açougue, padaria e caixas. Realizava conferência de mercadorias, fechamento de caixa e fiscalização geral. Habilidade de organização visual do piso de vendas e comunicação direta com equipe e clientes.',
  },
  {
    title: 'Coordenador de Levantamento Patrimonial',
    company: 'COMDATA — Paço Municipal',
    description:
      'Curadoria, classificação e conferência de grandes massas de ativos públicos. Trabalho minucioso de organização e categorização de dados em escala municipal, exigindo atenção visual e analítica ao detalhe.',
  },
  {
    title: 'Supervisor Fiscal',
    company: 'Metrobus S/A',
    // Link original preservado: http://www.metrobus.go.gov.br/
    description:
      'Monitoramento operacional in-loco de sistemas de transporte público. Garantia de conformidade e otimização de rotas. Foco em leitura de ambiente, comunicação objetiva e cumprimento de padrões visuais e operacionais.',
  },
  {
    title: 'Vendedor — Tecnologia & Gadgets',
    company: 'FastShop Flamboyant',
    description:
      'Consultoria de vendas high-end com foco em tech e eletrônicos. A apresentação do produto e a narrativa visual eram diferenciais centrais na conversão: aprendi na prática como design e discurso influenciam a decisão de compra.',
  },
  {
    title: 'Analista Help Desk VIP & Back Office',
    company: 'Bt Call Center',
    period: '2015 - 2017',
    description:
      'Suporte técnico VIP com SLA rigoroso para redes corporativas. Diagnóstico sistemático de falhas em hardwares e endpoints. Noção sólida de infraestrutura de TI e comunicação técnica acessível com usuários finais.',
  },
  {
    title: 'Professor de Informática & Auxiliar Administrativo',
    company: 'Escola SESI Jardim Planalto',
    description:
      'Lecionou Informática e Matemática, usando didática visual para simplificar temas complexos. Atuou no backoffice educacional: organização de documentos, controle de processos e apoio administrativo da filial.',
  },
  {
    title: 'Auxiliar de Motorista / Logística',
    company: 'Yellow Soluções Mobilidade Ltda.',
    description:
      'Suporte operacional dinâmico em campo. Agilidade, pontualidade e comunicação direta — soft skills transferíveis para qualquer ambiente de trabalho ágil.',
  },
];

// Formação acadêmica — cursado até o 7º período, trancado no momento
const EDUCATION_DATA = [
  {
    title: 'Engenharia da Computação',
    company: 'PUC-GO — 7º Período (curso trancado)',
    description:
      'Cursou até o 7º período, com base técnica em Sistemas Embarcados, Redes de Computadores e Desenvolvimento de Software. Curso atualmente trancado. O conhecimento técnico adquirido é diretamente aplicado no desenvolvimento de interfaces web.',
  },
  {
    title: 'Ensino Médio Completo',
    company: 'Ensino Regular',
    description: 'Formação base concluída.',
  },
  {
    title: 'Certificações Extracurriculares',
    company: 'SESI — Serviço Social da Indústria',
    // Referência: http://sesieduca.sesi.org.br/
    description:
      'Certificados em: Comportamento e Gestão de Equipes, Métodos de Pesquisa, Português — Novas Regras, Inglês Instrumental. Todos os certificados disponíveis mediante solicitação.',
  },
];

// Bloco de informações adicionais — conforme docx
const ADDITIONAL_INFO = [
  'Fácil aprendizagem de novas tarefas e ferramentas',
  'Facilidade e experiência em trabalho em grupo',
  'Disponibilidade de horário: manhã, tarde e noite',
  'Pontualidade e empenho no desenvolvimento da função',
  'Noção básica de inglês instrumental',
  'Proficiente em Word, PowerPoint, Excel e ferramentas de produtividade',
];

export function Experience() {
  return (
    <section id="trajetoria" className={styles.section} aria-label="Trajetória e Especialidades">
      <div className="container">

        {/* SKILLS TAGS — focadas em web design */}
        <div style={{ marginBottom: 'var(--space-12)' }}>
          <header className={styles.header}>
            <h2 className={styles.title}>Habilidades & Ferramentas</h2>
          </header>
          <div className={styles.tagsContainer}>
            {SKILLS_TAGS.map(tag => (
              <Badge key={tag} variant="secondary" className={styles.largeBadge}>{tag}</Badge>
            ))}
          </div>
        </div>

        {/* EXPERIÊNCIA PROFISSIONAL */}
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

        {/* EDUCAÇÃO */}
        <div style={{ marginBottom: 'var(--space-12)' }}>
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

        {/* INFORMAÇÕES ADICIONAIS */}
        <div>
          <header className={styles.header}>
            <h2 className={styles.title}>Informações Adicionais</h2>
          </header>
          <ul className={styles.additionalList}>
            {ADDITIONAL_INFO.map((info, idx) => (
              <li key={idx} className={styles.additionalItem}>
                {/* Checkmark visual simples com SVG inline */}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-secondary)" strokeWidth="2.5" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5"/>
                </svg>
                {info}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}

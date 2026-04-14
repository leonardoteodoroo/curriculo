import React from "react";
import { Card, CardHeader, CardContent } from "../ui/Card";
import { Badge } from "../ui/Badge";
import styles from "./Experience.module.css";

const PROFILE_CARDS = [
  {
    title: "Apresentação",
    description:
      "Profissional com experiência no setor de comércio, bom comunicador, dotado de iniciativa e em direcionamento prático para vagas de Web Designer e criação de páginas.",
  },
  {
    title: "Base técnica",
    description:
      "Noções essenciais em Word, PowerPoint, Excel, Programação em C++ e montagem e manutenção em computadores, somadas ao curso de Engenharia da Computação até o 7º período.",
  },
  {
    title: "Postura de trabalho",
    description:
      "Fácil aprendizagem de novas tarefas, facilidade em trabalho em grupo, disponibilidade de horário e empenho no desenvolvimento da função.",
  },
];

const SKILLS_TAGS = [
  "Web Designer em desenvolvimento prático",
  "HTML, CSS e React",
  "Landing pages e páginas institucionais",
  "Organização visual de conteúdo",
  "Word, PowerPoint, Excel",
  "Programação em C++",
  "Montagem e manutenção em computadores",
  "Suporte técnico / Help Desk",
  "Atendimento, vendas e operação",
  "Didática, comunicação e trabalho em grupo",
  "Noção básica de inglês instrumental",
];

const EXPERIENCE_DATA = [
  {
    title: "Coordenador de Levantamento Patrimonial",
    company: "CIA DE PROCESSAMENTO DE DADOS DO MUNICIPIO DE GOIANIA (COMDATA)",
    period: "03/10/2023 - 31/12/2024",
    description:
      "Atuação administrativa com levantamento patrimonial, organização de ativos e conferência de informações no Paço Municipal.",
  },
  {
    title: "Vendedor de Loja",
    company: "FAST SHOP S.A",
    period: "04/04/2022 - 24/09/2023",
    description:
      "Atendimento comercial e apresentação de produtos de tecnologia, com foco em comunicação clara e experiência de compra.",
  },
  {
    title: "Subgerente / Conferente",
    company: "Rede Isaura Supermercados",
    period: "2018 - 2021",
    description:
      "Responsável pela equipe de reposição, embalagem, açougue, padaria e caixas. Atuação com conferência de mercadorias, fechamento de caixa e fiscalização geral da loja.",
  },
  {
    title: "Ajudante de Motorista",
    company: "YELLOW SOLUCOES DE MOBILIDADE LTDA",
    period: "2019 - 2020",
    description:
      "Suporte operacional e logístico em campo, com foco em pontualidade, rotina dinâmica e execução prática.",
  },
  {
    title: "Auxiliar de escritorio em geral",
    company: "METROBUS TRANSPORTE COLETIVO S/A",
    period: "02/04/2015 - 30/04/2016",
    description:
      "Atuação em rotinas administrativas e apoio à operação do transporte coletivo, com organização de informações e suporte geral ao setor.",
  },
  {
    title: "Professor de Informática, Matemática e Auxiliar Administrativo",
    company: "Escola SESI Jardim Planalto",
    description:
      "Atuação em sala de aula e no apoio administrativo da unidade, com organização de rotinas, documentos e suporte interno.",
  },
  {
    title: "Operador de telemarketing ativo",
    company: "BRASIL TELECOM CALL CENTER S/A - EM RECUPERACAO JUDICIAL",
    period: "2010 - 2012",
    description:
      "Experiência consolidada em atendimento ativo, comunicação direta com clientes, registro de informações e rotina de operação em call center.",
  },
];

const EDUCATION_DATA = [
  {
    title: "Engenharia da Computação",
    company: "Pontifícia Universidade Católica de Goiás (PUC-GO)",
    description:
      "Graduando até o 7º período, com curso trancado no momento. Base técnica em sistemas, software e raciocínio lógico aplicada hoje à construção de páginas e interfaces.",
  },
  {
    title: "Ensino médio completo",
    company: "Ensino Regular",
    description: "Formação base concluída.",
  },
];

const CERTIFICATION_DATA = [
  "Comportamento e Gestão de Equipes",
  "Métodos de Pesquisa",
  "Português Novas Regras",
  "Inglês Instrumental",
];

const ADDITIONAL_INFO = [
  "Fácil aprendizagem de novas tarefas e ferramentas",
  "Facilidade e experiência em trabalho em grupo",
  "Disponibilidade de horário: manhã, tarde e noite",
  "Pontualidade e empenho no desenvolvimento da função",
  "Noção básica de inglês instrumental",
  "Proficiente em Word, PowerPoint, Excel e ferramentas de produtividade",
];

export function Experience() {
  return (
    <section
      id="trajetoria"
      className={styles.section}
      aria-label="Trajetória e Especialidades"
    >
      <div className="container">
        <header className={styles.header}>
          <span className={styles.eyebrow}>Trajetória completa</span>
          <h2 className={styles.title}>
            Histórico profissional preservado e organizado para leitura rápida
          </h2>
          <p className={styles.sectionDesc}>
            A estrutura abaixo mantém as informações do currículo original, mas
            apresenta o perfil de forma mais útil para recrutamento em web
            design, comunicação visual e páginas digitais.
          </p>
        </header>

        <div className={styles.summaryGrid}>
          {PROFILE_CARDS.map((card) => (
            <Card key={card.title} className={styles.summaryCard}>
              <CardHeader className={styles.summaryHeader}>
                <h3 className={styles.summaryTitle}>{card.title}</h3>
              </CardHeader>
              <CardContent>
                <p className={styles.summaryDesc}>{card.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className={styles.block}>
          <header className={styles.blockHeader}>
            <h3 className={styles.blockTitle}>Habilidades e repertório</h3>
          </header>
          <div className={styles.tagsContainer}>
            {SKILLS_TAGS.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className={styles.largeBadge}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <div className={styles.contentGrid}>
          <div className={styles.mainColumn}>
            <div className={styles.block}>
              <header className={styles.blockHeader}>
                <h3 className={styles.blockTitle}>Experiência profissional</h3>
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
          </div>

          <aside className={styles.sideColumn}>
            <div className={styles.block}>
              <header className={styles.blockHeader}>
                <h3 className={styles.blockTitle}>Formação</h3>
              </header>

              <div className={styles.sideStack}>
                {EDUCATION_DATA.map((edu) => (
                  <Card
                    key={edu.title}
                    as="article"
                    className={styles.sideCard}
                  >
                    <CardHeader className={styles.sideCardHeader}>
                      <h3 className={styles.jobTitle}>{edu.title}</h3>
                      <div className={styles.company}>{edu.company}</div>
                    </CardHeader>
                    <CardContent>
                      <p className={styles.jobDesc}>{edu.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className={styles.block}>
              <header className={styles.blockHeader}>
                <h3 className={styles.blockTitle}>Cursos extracurriculares</h3>
              </header>

              <Card className={styles.sideCard}>
                <CardContent>
                  <p className={styles.jobDesc}>
                    Certificados do SESI disponíveis mediante solicitação.
                  </p>
                  <ul className={styles.additionalList}>
                    {CERTIFICATION_DATA.map((item) => (
                      <li key={item} className={styles.additionalItem}>
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="var(--accent-secondary)"
                          strokeWidth="2.5"
                          aria-hidden="true"
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className={styles.block}>
              <header className={styles.blockHeader}>
                <h3 className={styles.blockTitle}>Informações adicionais</h3>
              </header>

              <Card className={styles.sideCard}>
                <CardContent>
                  <ul className={styles.additionalList}>
                    {ADDITIONAL_INFO.map((info, idx) => (
                      <li key={idx} className={styles.additionalItem}>
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="var(--accent-secondary)"
                          strokeWidth="2.5"
                          aria-hidden="true"
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                        {info}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

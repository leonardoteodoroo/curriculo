import React from "react";
import { Card, CardContent } from "../ui/Card";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import styles from "./ProjectShowcase.module.css";

interface Project {
  id: string;
  title: string;
  description: string;
  domain: string;
  liveUrl: string;
  tags: string[];
  repoName?: string;
  repoUrl?: string;
}

interface ProjectGroup {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  projects: Project[];
}

const PROJECT_GROUPS: ProjectGroup[] = [
  {
    id: "featured-domains",
    eyebrow: "Projetos em Destaque",
    title: "Domínios customizados principais",
    description:
      "Os projetos abaixo concentram os links principais publicados no ecossistema semprenamoda.com.br e ajudam a mostrar domínio de estrutura, copy e apresentação.",
    projects: [
      {
        id: "curriculo-premium-2026",
        title: "Currículo Premium 2026",
        description:
          "Versão web do currículo com estrutura editorial, leitura escaneável e foco em apresentar perfil, trajetória e projetos com clareza.",
        domain: "curriculo.semprenamoda.com.br",
        liveUrl: "https://curriculo.semprenamoda.com.br",
        repoName: "leonardoteodoroo/curriculo",
        repoUrl: "https://github.com/leonardoteodoroo/curriculo",
        tags: ["Currículo web", "Editorial", "Apresentação"],
      },
      {
        id: "lotar-agenda",
        title: "Como Lotar Sua Agenda",
        description:
          "Landing page com copy forte, hierarquia visual voltada para conversão e construção de oferta para prestadores de serviço.",
        domain: "comolotarsuaagenda.semprenamoda.com.br",
        liveUrl: "https://comolotarsuaagenda.semprenamoda.com.br",
        repoName: "leonardoteodoroo/comolotarsuaagenda",
        repoUrl: "https://github.com/leonardoteodoroo/comolotarsuaagenda",
        tags: ["Landing Page", "Copy visual", "Conversão"],
      },
      {
        id: "calistenia",
        title: "Calistenia Sob Medida",
        description:
          "Página de análise com linguagem mais leve, foco em público feminino e composição de CTA para guiar a ação do usuário.",
        domain: "calistenia-sob-medida.semprenamoda.com.br",
        liveUrl: "https://calistenia-sob-medida.semprenamoda.com.br",
        repoName: "leonardoteodoroo/calistenia-sob-medida",
        repoUrl: "https://github.com/leonardoteodoroo/calistenia-sob-medida",
        tags: ["Página de análise", "Direção visual", "CTA"],
      },
    ],
  },
  {
    id: "other-live-pages",
    eyebrow: "Outras LPs Ativas",
    title: "Mais páginas publicadas no mesmo ecossistema",
    description:
      "Também entram na vitrine outras landing pages que seguem no ar com domínio próprio, reforçando volume de produção e consistência de publicação.",
    projects: [
      {
        id: "curso-nail-designer",
        title: "Curso Nail Designer",
        description:
          "Landing page ativa em domínio próprio para apresentação de oferta no nicho de beleza, com foco em interesse e conversão.",
        domain: "curso-nail-designer.semprenamoda.com.br",
        liveUrl: "https://curso-nail-designer.semprenamoda.com.br",
        tags: ["Beleza", "Oferta digital", "Landing page"],
      },
      {
        id: "alicia-ties",
        title: "Alicia Ties",
        description:
          "Página comercial publicada em domínio customizado para apresentar marca, proposta e direcionamento de ação.",
        domain: "aliciaties.semprenamoda.com.br",
        liveUrl: "https://aliciaties.semprenamoda.com.br",
        tags: ["Marca", "Domínio ativo", "Apresentação"],
      },
      {
        id: "studio-ellas",
        title: "Studio Ellas",
        description:
          "Landing page com presença ativa em domínio próprio, útil para vitrine de serviço, identidade visual e conversão local.",
        domain: "studioellas.semprenamoda.com.br",
        liveUrl: "https://studioellas.semprenamoda.com.br",
        tags: ["Serviços", "Identidade", "Conversão"],
      },
      {
        id: "laura-paula",
        title: "Laura Paula",
        description:
          "Projeto com domínio customizado voltado para destacar posicionamento, proposta de valor e contato.",
        domain: "laurapaula.semprenamoda.com.br",
        liveUrl: "https://laurapaula.semprenamoda.com.br",
        tags: ["Posicionamento", "Contato", "Landing page"],
      },
      {
        id: "amino-advanced",
        title: "Amino Advanced",
        description:
          "Página publicada para produto com apelo comercial direto, navegação objetiva e foco em oferta.",
        domain: "advanced-amino-formula.semprenamoda.com.br",
        liveUrl: "https://advanced-amino-formula.semprenamoda.com.br",
        tags: ["Produto", "Copy comercial", "Oferta"],
      },
      {
        id: "kerassentials-verification",
        title: "Kerassentials Verificação",
        description:
          "Página auxiliar de verificação mantida em domínio separado, mostrando organização de campanha e páginas de apoio.",
        domain: "verification.semprenamoda.com.br",
        liveUrl: "https://verification.semprenamoda.com.br",
        tags: ["Verificação", "Página auxiliar", "Campanha"],
      },
      {
        id: "lp-teste",
        title: "Sempre na Moda LP Teste",
        description:
          "Landing page usada para validar estrutura, copy e variações antes de consolidar versões finais.",
        domain: "lpteste.semprenamoda.com.br",
        liveUrl: "https://lpteste.semprenamoda.com.br",
        tags: ["Teste", "Estrutura", "Experimentos"],
      },
      {
        id: "calistenia-28-dias",
        title: "Calistenia Sob Medida 28 Dias",
        description:
          "Variação do ecossistema Calistenia Sob Medida voltada para desafio e campanha com domínio dedicado.",
        domain: "calistenia-sob-medida-28-dias.semprenamoda.com.br",
        liveUrl: "https://calistenia-sob-medida-28-dias.semprenamoda.com.br",
        tags: ["Desafio 28 dias", "Campanha", "Variação"],
      },
    ],
  },
];

export function ProjectShowcase() {
  return (
    <section
      id="projetos"
      className={styles.section}
      aria-label="Projetos em Destaque"
    >
      <div className="container">
        <header className={styles.header}>
          <span className={styles.eyebrow}>Portfólio & Cases</span>
          <h2 className={styles.title}>Projetos em Destaque</h2>
          <p className={styles.sectionDesc}>
            Reuni os projetos publicados com domínio customizado para deixar a
            vitrine mais objetiva, mais profissional e mais alinhada com o
            volume real de páginas já colocadas no ar.
          </p>
        </header>

        <div className={styles.groups}>
          {PROJECT_GROUPS.map((group) => (
            <div key={group.id} className={styles.group}>
              <div className={styles.groupHeader}>
                <span className={styles.groupEyebrow}>{group.eyebrow}</span>
                <h3 className={styles.groupTitle}>{group.title}</h3>
                <p className={styles.groupDesc}>{group.description}</p>
              </div>

              <div className={styles.grid}>
                {group.projects.map((project) => (
                  <Card
                    key={project.id}
                    as="article"
                    className={styles.projectCard}
                  >
                    <CardContent className={styles.cardInner}>
                      <div className={styles.cardHeader}>
                        <span className={styles.status}>Dominio ativo</span>
                      </div>

                      <div className={styles.content}>
                        <h4 className={styles.projectTitle}>{project.title}</h4>
                        <p className={styles.projectDesc}>
                          {project.description}
                        </p>

                        <div className={styles.infoStack}>
                          <div className={styles.infoCard}>
                            <span className={styles.infoLabel}>Dominio</span>
                            <a
                              className={styles.infoLink}
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {project.domain}
                            </a>
                          </div>

                          {project.repoName && project.repoUrl && (
                            <div className={styles.infoCard}>
                              <span className={styles.infoLabel}>
                                Repositorio
                              </span>
                              <a
                                className={styles.infoLink}
                                href={project.repoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {project.repoName}
                              </a>
                            </div>
                          )}
                        </div>

                        <div
                          className={styles.tags}
                          aria-label="Tecnologias e conceitos"
                        >
                          {project.tags.map((tag) => (
                            <Badge key={tag} variant="secondary">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <div className={styles.actions}>
                          <Button variant="primary" asChild>
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Abrir dominio
                            </a>
                          </Button>

                          {project.repoUrl && (
                            <Button variant="outline" asChild>
                              <a
                                href={project.repoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Ver repositorio
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
          ))}
        </div>
      </div>
    </section>
  );
}

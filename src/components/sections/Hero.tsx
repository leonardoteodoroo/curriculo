import React from "react";
import { Button } from "../ui/Button";
import styles from "./Hero.module.css";
import perfilImg from "../../assets/perfil.jpg";

const HIGHLIGHTS = [
  "Base técnica em Engenharia da Computação com visão prática de tecnologia e interface.",
  "Histórico profissional em suporte, operação, atendimento, ensino e comércio.",
  "Objetivo atual: atuar com web design, páginas institucionais e landing pages.",
];

export function Hero() {
  return (
    <section className={styles.heroSection} aria-label="Apresentação Pessoal">
      <div className={`container ${styles.heroGrid}`}>
        <div className={styles.heroCopy}>
          <div className={styles.topline}>
            <span className={styles.eyebrow}>
              Currículo para vaga de Web Designer
            </span>
            <span className={styles.roleTag}>
              HTML · CSS · React · Landing Pages
            </span>
          </div>

          <div className={styles.identityHeader}>
            <div className={styles.titleBlock}>
              <h1 className={styles.title}>Leonardo Teodoro Laureano</h1>
            </div>

            <div className={styles.inlinePortraitWrap}>
              <img
                src={perfilImg}
                alt="Leonardo Teodoro Laureano em foto de perfil profissional"
                className={styles.inlinePortrait}
                loading="eager"
              />
            </div>
          </div>

          <p className={styles.subtitle}>
            Profissional em transição para Web Design, com formação técnica em
            Engenharia da Computação até o 7º período, curso trancado no
            momento, e experiência anterior em suporte, comércio, atendimento,
            operação e rotina administrativa.
          </p>
          <p className={styles.summary}>
            Busco oportunidade para aplicar organização visual, clareza de
            comunicação e construção de páginas que apresentem bem produtos,
            serviços e informações. Tenho noção básica em inglês, facilidade
            para aprender novas tarefas e perfil colaborativo.
          </p>

          <div className={styles.contactStrip}>
            <a
              href="tel:+5562999918702"
              className={styles.contactItem}
              aria-label="Ligar para Leonardo"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9a16 16 0 0 0 6 6l.72-.72a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.73 17z" />
              </svg>
              (62) 9 9991-8702
            </a>
            <a
              href="mailto:lauteodor@gmail.com"
              className={styles.contactItem}
              aria-label="Enviar e-mail para Leonardo"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                aria-hidden="true"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              lauteodor@gmail.com
            </a>
            <span className={styles.contactItem}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                aria-hidden="true"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Goiânia – GO
            </span>
            <span className={styles.contactItem}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                aria-hidden="true"
              >
                <path d="M3 11.5 12 4l9 7.5" />
                <path d="M5 10v10h14V10" />
              </svg>
              Rua 14, Jardim Goiás, CEP 74810-180
            </span>
          </div>

          <div className={styles.identityRow}>
            <span className={styles.identityPill}>
              Brasileiro, solteiro, 33 anos
            </span>
            <span className={styles.identityPill}>
              Engenharia da Computação: 7º período, curso trancado
            </span>
            <span className={styles.identityPill}>
              Disponível para manhã, tarde e noite
            </span>
          </div>

          <ul className={styles.highlightList}>
            {HIGHLIGHTS.map((item) => (
              <li key={item} className={styles.highlightItem}>
                {item}
              </li>
            ))}
          </ul>

          <div className={styles.actions}>
            <Button variant="primary" asChild>
              <a href="#projetos">Ver Projetos</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#trajetoria">Ver Trajetória</a>
            </Button>
          </div>
        </div>

        <aside className={styles.sidePanel}>
          <div className={styles.summaryCard}>
            <span className={styles.summaryEyebrow}>Leitura rápida</span>
            <dl className={styles.summaryList}>
              <div>
                <dt>Objetivo</dt>
                <dd>Atuar com web design e páginas de apresentação.</dd>
              </div>
              <div>
                <dt>Base técnica</dt>
                <dd>
                  Word, PowerPoint, Excel, Programação em C++ e manutenção de
                  computadores.
                </dd>
              </div>
              <div>
                <dt>Idioma</dt>
                <dd>Noção básica de inglês instrumental.</dd>
              </div>
              <div>
                <dt>Perfil</dt>
                <dd>
                  Bom comunicador, iniciativa, trabalho em grupo e rápida
                  aprendizagem.
                </dd>
              </div>
            </dl>
          </div>
        </aside>
      </div>
    </section>
  );
}

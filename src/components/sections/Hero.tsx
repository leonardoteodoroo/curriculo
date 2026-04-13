import React from 'react';
import { Button } from '../ui/Button';
import styles from './Hero.module.css';
import { Badge } from '../ui/Badge';

export function Hero() {
  return (
    <section className={styles.heroSection} aria-label="Apresentação Pessoal">
      <div className={`container ${styles.heroGrid}`}>
        
        {/* Na versão mobile as ordens podem inverter, no desktop a copy vem primeiro. */}
        <div className={styles.heroCopy}>
          <div>
            <span className={styles.eyebrow}>Desenvolvedor & Designer</span>
            <h1 className={styles.title}>Leonardo Teodoro Laureano</h1>
          </div>
          
          <p className={styles.subtitle}>
            Unindo design estratégico e tecnologia front-end para criar interfaces responsivas, 
            acessíveis e fortemente orientadas para conversão comercial.
          </p>
          
          <div className={styles.actions}>
            <Button variant="primary" asChild>
              <a href="#projetos">Ver Projetos</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="mailto:lauteodor@gmail.com">Entrar em contato</a>
            </Button>
          </div>
        </div>

        <div className={styles.photoWrapper}>
          <img 
            src="/assets/eu.png" 
            alt="Leonardo Teodoro sorrindo, foto profissional com estilo limpo"
            className={styles.photo}
            loading="eager"
            aria-hidden="false"
          />
        </div>

      </div>
    </section>
  );
}

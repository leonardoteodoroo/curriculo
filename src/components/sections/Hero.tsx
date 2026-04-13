import React from 'react';
import { Button } from '../ui/Button';
import styles from './Hero.module.css';
import { Badge } from '../ui/Badge';
import perfilImg from '../../assets/perfil.jpg';

export function Hero() {
  return (
    <section className={styles.heroSection} aria-label="Apresentação Pessoal">
      <div className={`container ${styles.heroGrid}`}>
        
        {/* Na versão mobile as ordens podem inverter, no desktop a copy vem primeiro. */}
        <div className={styles.heroCopy}>
          <div>
            <span className={styles.eyebrow}>Engenharia de Computação & Estratégia Digital</span>
            <h1 className={styles.title}>Leonardo Teodoro</h1>
          </div>
          
          <p className={styles.subtitle}>
            Graduando em Engenharia da Computação com perfil analítico focado em Automação, Copywriting e Arquitetura de Sistemas. Especialista em unir soluções de infraestrutura técnica com estratégias de persuasão para maximizar a conversão e eficiência de produtos digitais. Com trajetórias em liderança operacional e suporte técnico VIP, possuo a habilidade de traduzir desafios complexos em resultados práticos de negócio.
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
            src={perfilImg} 
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

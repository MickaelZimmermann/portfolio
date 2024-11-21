import React from 'react';
import externalLink from '../../../utils/externalLink.svg'
import './Experience.css'

const Experience: React.FC = () => {
  return (
    <section id="experience">
      <h2>
        Mon expérience
      </h2>
      <div className="timeline">
        {/* Zone vide */}
        <div className="timeline-content">
          <h3>Juin 2024 - Juillet 2024</h3>
          <p>Développement d'une application en groupe de quatre membres (dont je suis le Scrum master) en NodeTS et ReactTS :
            <ul>
              <li>1 semaine de conception (rédaction du cahier des charges, avec diagrammes d'usage, de séquence, de relations d'entités, etc.)</li>
              <li>2 semaines de développement (connexion/inscription sécurisées, gestion profil utilisateur, interactions avec une carte, filtrage des données depuis une API créée)</li>
              <li>1 semaine de debug et préparation de présentation du projet</li>
            </ul>
          </p>
        </div>
        <div className="timeline-middle-line">
            <div className="timeline-circle" />
        </div>
        <div/>
        <div/>
        <div className="timeline-middle-line">
            <div className="timeline-circle" />
        </div>
        <div className="timeline-content">
          <h3>Juin 2023 - Octobre 2024</h3>
          <p>Alternance chez <a href="https://www.atolcd.com/" target="_blank"><b>Atol Conseils et Développement <img className='externalLink' src={ externalLink } alt="" /></b></a> (avec l'école <a href="https://oclock.io/" target="_blank"><b>O'clock <img className='externalLink' src={ externalLink } alt="" /></b></a>) pour le titre de <a href="https://www.francecompetences.fr/recherche/rncp/37873/" target="_blank"><b>Concepteur Développeur d'Application</b></a>.</p>
          <p>Trois projets :
            <ul>
              <li>Maintenance, assistance client et évolution d'un projet Java/ReactJS/VueJS/PostgresQL</li>
              <li>Développement d'un projet Kotlin/ReactTS</li>
              <li>Evolution radicale du premier projet de la liste via un re-développement from scratch de celui-ci en Kotlin/ReactTS</li>
            </ul>
          </p>
        </div>
        <div className="timeline-content">
          <h3>Août 2022</h3>
          <p>Obtention du titre <a href="https://www.francecompetences.fr/recherche/rncp/37674/" target="_blank"><b>Développeur Web et Web Mobile <img className='externalLink' src={ externalLink } alt="" /></b></a>.</p>
        </div>
        <div className="timeline-middle-line">
            <div className="timeline-circle" />
        </div>
        <div/>
        <div/>
        <div className="timeline-middle-line">
            <div className="timeline-circle" />
        </div>
        <div className=" timeline-content">
          <h3>Juin 2022 - Juillet 2022</h3>
          <p>Développement d'une application en groupe de quatre membres (dont je suis le Scrum master) en Symfony et ReactJS :
            <ul>
              <li>1 semaine de conception (rédaction du cahier des charges, avec wireframes, diagrammes de MCD, d'usage, etc.)</li>
              <li>2 semaines de développement (connexion/inscription, gestion profil utilisateur, API Rest fonctionnelle consultable et modifiable via le front, page d'administration des données)</li>
              <li>1 semaine de debug et préparation de présentation du projet sur <a className='link' href="https://www.youtube.com/live/WjrPnFDAWpw?si=jUrQKGQ5QYorLQPf&t=2273" target="_blank"><b>YouTube <img className='externalLink' src={ externalLink } alt="" /></b></a></li>
            </ul></p>
        </div>
        <div className="timeline-content">
          <h3>Novembre 2017 - Juin 2023</h3>
          <p>Préparateur de commande (drive) à Carrefour Quetigny.</p>
        </div>
        <div className="timeline-middle-line">
            <div className="timeline-circle" />
        </div>
        <div/>
        <div/>
        <div className="timeline-middle-line">
            <div className="timeline-circle" />
        </div>
        <div className="timeline-content">
          <h3>Juin 2017</h3>
          <p>Maîtrise de Psychologie clinique (Université de Bourgogne-Franche-Comté).</p>
        </div>
        
      </div>
    </section>
  );
};

export default Experience;

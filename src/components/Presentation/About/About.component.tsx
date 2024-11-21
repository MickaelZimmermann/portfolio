import React from 'react';
import zimmick from '@/utils/aboutSegment/zimmick.jpg'
import './About.css'

const About: React.FC = () => {
  return (
    <section id='about'>
      <div className='aboutHeader'>
        <h2>
          A propos de moi
        </h2>
        <div className='blueString'/>
      </div>
      <div className='aboutSegments'>
        <div className='aboutLeft'>
          <div className='aboutCards'>
            <div className='aboutCard'>
              Icône
              <h3>
                Créatif
              </h3>
            </div>
            <div className='aboutCard'>
              Icône
              <h3>
                Adaptatif
              </h3>
            </div>
            <div className='aboutCard'>
              Icône
              <h3>
                Autonome
              </h3>
            </div>
          </div>
          <p>
          Suite à une formation de reconversion de 6 mois avec l'école O'Clock, j'ai obtenu le titre Développeur Web et Web Mobile. Voulant ajouter des technos à mon carquois de dev, j'ai effectué une formation supplémentaire en alternance de 16 mois, avec la même école et dans l'entreprise Atol - Conseils et Développements. J'ai pu, avec ceci, passer et obtenir le titre de Concepteur Développeur d'Applications (BAC +4).
          </p>
        </div>
        <div className='aboutRight'>
          <img src={zimmick} alt="Zimmick's face" className='aboutFace'/>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from 'react';
import PPP from '@/utils/PPP.png'
import './Introduction.css'

const Introduction: React.FC = () => {
  return (
    <section id='introduction'>
      <img src={PPP} alt="Zimmick" />
      <div className='intro'>
        <p>
          Bonjour et bienvenue ! 
        </p>
        <p>
          Je suis &nbsp;
            <span className='name'>Mickaël Zimmermann</span> <i>(Zimmick)</i>,
        </p>
        <p>
          développeur web full-stack.
        </p>
      </div>
      
    </section>
  );
};

export default Introduction;

import React from 'react';
import BasicSkills from './BasicSkills.component';
import CssSkills from './CssSkills.component';
import DbSkills from './DbSkills.component';
import BackSkills from './BackSkills.component';
import FrontSkills from './FrontSkills.component';
import './Skills.css'

const Skills: React.FC = () => {
  return (
    <section id='skillsCategories'>
      <h2>Mes compétences</h2>
      <h3>Système</h3>
      <BasicSkills />
      <h3>CSS</h3>
      <CssSkills />
      <h3>Frontend</h3>
      <FrontSkills />
      <h3>Base de données</h3>
      <DbSkills />
      <h3>Backend</h3>
      <BackSkills />
    </section>
  );
};

export default Skills;

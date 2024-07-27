import React from 'react';
import SkillCard from './SkillCard.component';
import technosBack from '@/utils/technosBack/technosBackList';
import './Skills.css'

const BackSkills: React.FC = () => {
  return (
    <div className='skills'>
      {technosBack.map((logo, index) => (
      <SkillCard key={index} technoLink={logo.docLink} logo={logo.src} name={logo.name} />
      ))}
    </div>
  );
};

export default BackSkills;

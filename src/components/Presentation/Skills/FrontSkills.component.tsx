import React from 'react';
import SkillCard from './SkillCard.component';
import technosFront from '@/utils/technosFront/technosFrontList';
import './Skills.css'

const FrontSkills: React.FC = () => {
  return (
    <div className='skills'>
      {technosFront.map((logo, index) => (
      <SkillCard key={index} technoLink={logo.docLink} logo={logo.src} name={logo.name} />
      ))}
    </div>
  );
};

export default FrontSkills;

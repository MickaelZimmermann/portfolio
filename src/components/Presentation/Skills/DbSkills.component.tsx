import React from 'react';
import SkillCard from './SkillCard.component';
import technosDb from '@/utils/technosDb/technosDbList';
import './Skills.css'

const DbSkills: React.FC = () => {
  return (
    <div className='skills'>
      {technosDb.map((logo, index) => (
      <SkillCard key={index} technoLink={logo.docLink} logo={logo.src} name={logo.name} />
      ))}
    </div>
  );
};

export default DbSkills;

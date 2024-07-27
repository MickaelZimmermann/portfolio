import React from 'react';
import SkillCard from './SkillCard.component';
import technosBasic from '@/utils/technosSystem/technosBasicList';
import './Skills.css'

const BasicSkills: React.FC = () => {
  return (
    <div className='skills'>
      {technosBasic.map((logo, index) => (
      <SkillCard key={index} technoLink={logo.docLink} logo={logo.src} name={logo.name} />
      ))}
    </div>
  );
};

export default BasicSkills;

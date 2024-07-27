import React from 'react';
import SkillCard from './SkillCard.component';
import technosCss from '@/utils/technosCss/technosCssList';
import './Skills.css'

const CssSkills: React.FC = () => {
  return (
    <div className='skills'>
      {technosCss.map((logo, index) => (
      <SkillCard key={index} technoLink={logo.docLink} logo={logo.src} name={logo.name} />
      ))}
    </div>
  );
};

export default CssSkills;

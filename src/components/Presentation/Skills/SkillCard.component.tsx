import React from 'react';
import './SkillCard.css'

interface CardProps {
  technoLink:string;
  logo: string;
  name: string;
}

const SkillCard: React.FC<CardProps> = ({technoLink, logo, name }) => {
  return (
    <a href={technoLink} className="skillCard">
      <img src={ logo } alt={`${ name } logo`} className="skillCardLogo" />
      <p>{ name }</p>
    </a>
  );
};

export default SkillCard;

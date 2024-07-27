import React from 'react';
import mainProjectsList from '../../../utils/smallProjects/smallProjectsList'
import ProjectCard from './ProjectCard.component';
import './SmallProjectsList.css'

const SmallProjectsList: React.FC = () => {
  return (
    <section id='smallProjectsList'>
        <h2>Mes plus petits projets</h2>
        <div className='skills'>
          {mainProjectsList.map((project, index) => (
          <ProjectCard 
            key={index} 
            divClassName='smallProjectCard' 
            logo={ project.src } 
            name={ project.name } 
            resume={ project.resume } 
            description={ project.resume } 
            myWork={ project.resume }
            languages={ project.resume }
          />
          ))}
        </div>
    </section>
  );
};

export default SmallProjectsList;

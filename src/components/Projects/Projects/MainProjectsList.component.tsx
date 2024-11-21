import React from 'react';
import mainProjectsList from '../../../utils/mainProjects/mainProjectsList'
import ProjectCard from './ProjectCard.component';
import './MainProjectsList.css'

const MainProjectsList: React.FC = () => {
  return (
    <section id='mainProjectsList'>
        <h2>Mes projets principaux</h2>
        <div className='skills'>
          {mainProjectsList.map((project, index) => (
          <ProjectCard 
            key={ index } divClassName='mainProjectCard' 
            logo={ project.logo } 
            name={ project.name } 
            resume={ project.resume } 
            description={ project.description } 
            myWork={ project.myWork }
            languages={ project.languages }
          />
          ))}
        </div>
    </section>
  );
};

export default MainProjectsList;

import React, { useState } from 'react';
import './ProjectCard.css'
import Modal from './Modal.component';

interface CardProps {
  divClassName: string;
  logo: string;
  name: string;
  resume: string;
  description: string;
  myWork: string;
  languages: string;
}

const ProjectCard: React.FC<CardProps> = ({ divClassName, logo, name, resume, description, myWork, languages }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className={ divClassName } onClick={ openModal }>
        <img src={ logo } alt={`${ name } logo`} className='projectLogo'/>
        <p>{ name }</p>
        <p className='projectDescriptionCard'>{ resume }</p>
      </div>
      {isModalOpen && 
        <Modal 
          logo={ logo } 
          name={ name } 
          description={ description } 
          myWork={ myWork } 
          languages={ languages }
          onClose={ closeModal } 
        />
      }
    </>
    
  );
};

export default ProjectCard;

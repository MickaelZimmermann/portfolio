import React from 'react';
import HeaderPresentation from '../../components/Presentation/Introduction/Introduction.component';
import About from '../../components/Presentation/About/About.component';
import Skills from '../../components/Presentation/Skills/Skills.component';
import Experience from '@/components/Presentation/Experience/Experience.component';

const Presentation: React.FC = () => {
  return (
    <>
      <HeaderPresentation />
      <About />
      <Skills />
      <Experience />
    </>
  );
};

export default Presentation;

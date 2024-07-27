import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Aside.css';

const Aside: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;

  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleAnchorClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 50;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  let content;
  if (path === '/') {
    content = (
      <ul>
        <li>
          <a 
            href="#introduction" 
            onClick={(e) => handleAnchorClick(e, 'introduction')}
            className={activeSection === 'introduction' ? 'is-active' : ''}
          >
            Introduction
          </a>
        </li>
        <li>
          <a
            href="#about"
            onClick={(e) => handleAnchorClick(e, 'about')}
            className={activeSection === 'about' ? 'is-active' : ''}
          >
            A propos
          </a>
        </li>
        <li>
          <a 
            href="#skillsCategories" 
            onClick={(e) => handleAnchorClick(e, 'skillsCategories')}
            className={activeSection === 'skillsCategories' ? 'is-active' : ''}
            >
            Compétences
          </a>
        </li>
        <li>
          <a 
            href="#experience" 
            onClick={(e) => handleAnchorClick(e, 'experience')}
            className={activeSection === 'experience' ? 'is-active' : ''}
          >
            Expérience
          </a>
        </li>
      </ul>
    );
  } else if (path === '/projects') {
    content = (
      <ul>
        <li>
          <a 
            href="#mainProjectsList" 
            onClick={(e) => handleAnchorClick(e, 'mainProjectsList')}
            className={activeSection === 'mainProjectsList' ? 'is-active' : ''}
          >
            Liste des projets principaux
          </a>
        </li>
        <li>
          <a 
            href="#smallProjectsList" 
            onClick={(e) => handleAnchorClick(e, 'smallProjectsList')}
            className={activeSection === 'smallProjectsList' ? 'is-active' : ''}
          >
            Liste des petits projets
          </a>
        </li>
        <li>
          <a
            href="#notFoundPages"
            onClick={(e) => handleAnchorClick(e, 'notFoundPages')}
            className={activeSection === 'notFoundPages' ? 'is-active' : ''}
          >
            Mes pages 404
          </a>
        </li>
      </ul>
    );
  } else {
    content = (
      <p>Other content</p>
    );
  }

  return (
    <aside className="aside">
      {content}
    </aside>
  );
};

export default Aside;

import React, { useEffect, useRef } from 'react';
import './Modal.css';

interface ModalProps {
    logo: string;
    name: string;
    description: string;
    myWork: string;
    languages: string;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ logo, name, description, myWork, languages, onClose }) => {
    const modalRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
    }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className='modal'>
            <div className='modalContent' ref={modalRef}>
                <span className='closeButton' onClick={onClose}>&times;</span>

                    <img src={logo} alt="" />
                    <h2>{name}</h2>
                    <h3>Description du projet :</h3>
                    <p className='projectDetails'>{ description }</p>
                    <h3>Mon implication :</h3>
                    <p className='projectDetails'>{ myWork }</p>
                    <h3>Technologies utilisées :</h3>
                    <p className='projectTechnos'>{ languages }</p>

            </div>
        </div>
    );
    };

export default Modal;

import React from 'react';
import NFP_front from '@/utils/mainProjects/restokyo/restokyo_404_front.gif';
import NFP_back from '@/utils/mainProjects/restokyo/restokyo_404_back.gif';
import './NotFoundPages.css'

const NotFoundPages: React.FC = () => {
  return (
    <section id='notFoundPages'>
        <h2>Mes pages 404</h2>
        <div className='NFP_list'>
          <div className='NFP_intro'>
            <p>Je dois avouer éprouver un certain plaisir à l'idée de créer des pages 404, permettant à ma créativité de s'exprimer. Aussi, pour satisfaire votre éventuelle curiosité (et vous montrer fièrement mes créations), les voici&nbsp;:</p>
          </div>
          <div className='NFP_example'>
            <h3>
              La page 404 de Places on Platter :
            </h3>
            <img src={NFP_front} alt="Page 404 du frontoffice de ResTokyo" className='NFP_gif'/>
          </div>
          <div className='NFP_example'>
            <h3>
              La page 404 du frontoffice de ResTokyo :
            </h3>
            <img src={NFP_front} alt="Page 404 du frontoffice de ResTokyo" className='NFP_gif'/>
          </div>
          <div className='NFP_example'>
            <h3>
              La page 404 du backoffice de ResTokyo (effectuée très rapidement par manque de temps):
            </h3>
            <img src={NFP_back} alt="Page 404 du backoffice de ResTokyo" className='NFP_gif'/>
          </div>
        </div>

    </section>
  );
};

export default NotFoundPages;

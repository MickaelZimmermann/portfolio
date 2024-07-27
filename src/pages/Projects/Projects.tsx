import React from 'react';
import MainProjectsList from '@/components/Projects/Projects/MainProjectsList.component';
import SmallProjectsList from '@/components/Projects/Projects/SmallProjectsList.component';
import NotFoundPages from '@/components/Projects/NotFoundPages/NotFoundPages.component';

const Projects: React.FC = () => {

  console.log(`                      /|      __
*             +      / |   ,-~ /             +
     .              Y :|  //  /                .         *
         .          | jj /( .^     *
               *    >-"~"-v"              .        *        .
*                  /       Y
   .     .        jo  o    |     .            +
                 ( ~T~     j                     +     .
      +           >._-' _./         +
               /| ;-"~ _  l
  .           / l/ ,-"~    \     +
              \//\/      .- \
       +       Y        /    Y
               l       I     !
               ]\      _\    /"\
              (" ~----( ~   Y.  )
          ~~~~~~~~~~~~~~~~~~~~~~~~~~`)
  return (
    <div>
      <MainProjectsList />
      <SmallProjectsList />
      <NotFoundPages />
    </div>
  );
};

export default Projects;

import React from 'react';
import { Container, PrinceBanner, QueensBanner, SignupButton } from './index.styled';

const OtherCupsBanner = () => {
   const openNewTab = (path: string) => {
      window.open(path, '_blank');
   };
   return (
      <Container>
         <QueensBanner>
            <img
               src="https://kingsleague.pro/wp-content/uploads/2023/03/queens-vertical.svg"
               alt=""
            />
            <SignupButton
               className="queens"
               onClick={() =>
                  openNewTab(
                     'https://www.infojobs.net/barcelona/deportista-profesional-para-queens-league/of-i0177a442274e8384b5890ba28d5856'
                  )
               }>
               INSCRÍBETE
            </SignupButton>
         </QueensBanner>

         <PrinceBanner>
            <img
               src="https://kingsleague.pro/wp-content/uploads/2023/03/prince-cup.svg"
               alt=""
            />
            <SignupButton
               className="prince"
               onClick={() =>
                  openNewTab(
                     'https://kingsleaguepro.typeform.com/to/cNmERhsk?typeform-source=kingsleague.pro'
                  )
               }>
               INSCRÍBETE
            </SignupButton>
         </PrinceBanner>
      </Container>
   );
};

export { OtherCupsBanner };

import React from 'react';
import { Container, SponsorsCarousel, SponsorsContainer } from './index.styled';

const Partners = () => {
   return (
      <Container>
         <SponsorsContainer>
            <div className="title">
               <h3>
                  <span>Principal</span> Partner
               </h3>
            </div>
            <img
               src={'https://kingsleague.pro/wp-content/uploads/2023/01/InfoJobs.svg'}
               alt="infojobs"
            />
         </SponsorsContainer>

         <SponsorsContainer>
            <div className="title">
               <h3>
                  <span>Stadium</span> Partner
               </h3>
            </div>
            <img
               src={'https://kingsleague.pro/wp-content/uploads/2023/01/cupra.svg'}
               alt="cupra"
            />
         </SponsorsContainer>

         <SponsorsContainer className='main-partner'>
            <div className="title">
               <h3>
                  <span>Main</span> Partner
               </h3>
            </div>
            <SponsorsCarousel className="sponsors-carousel">
               <div className="sponsor-container">
                  <img
                     src={'https://kingsleague.pro/wp-content/uploads/2023/01/clinica.svg'}
                     alt="clinica"
                  />
               </div>
               <div className="sponsor-container">
                  <img
                     src={'https://kingsleague.pro/wp-content/uploads/2023/01/cubirito.svg'}
                     alt="cubirito"
                  />
               </div>
               <div className="sponsor-container">
                  <img
                     src={'https://kingsleague.pro/wp-content/uploads/2023/01/grefusa.svg'}
                     alt="grefusa"
                  />
               </div>
               <div className="sponsor-container">
                  <img
                     src={'https://kingsleague.pro/wp-content/uploads/2023/01/spotify.svg'}
                     alt="spotify"
                  />
               </div>
               <div className="sponsor-container">
                  <img
                     src={'https://kingsleague.pro/wp-content/uploads/2022/12/logo-simyo.svg'}
                     alt="simyo"
                  />
               </div>
               <div className="sponsor-container">
                  <img
                     src={'https://kingsleague.pro/wp-content/uploads/2023/01/Xiaomi.svg'}
                     alt="xiaomi"
                  />
               </div>
               <div className="sponsor-container">
                  <img
                     src={'https://kingsleague.pro/wp-content/uploads/2023/01/shukran.svg'}
                     alt="shukran"
                  />
               </div>
               <div className="sponsor-container">
                  <img
                     src={'https://kingsleague.pro/wp-content/uploads/2023/01/imagin.svg'}
                     alt="imagin"
                  />
               </div>
               <div className="sponsor-container">
                  <img
                     src={'https://kingsleague.pro/wp-content/uploads/2022/12/logo-adidas.svg'}
                     alt="adidas"
                  />
               </div>
               <div className="sponsor-container">
                  <img
                     src={'https://kingsleague.pro/wp-content/uploads/2023/01/McDelivery.svg'}
                     alt="mc delivery"
                  />
               </div>
               <div className="sponsor-container">
                  <img
                     src={'https://kingsleague.pro/wp-content/uploads/2023/01/mahou.svg'}
                     alt="mahou"
                  />
               </div>
               <div className="sponsor-container">
                  <img
                     src={'https://kingsleague.pro/wp-content/uploads/2023/01/iq-option.svg'}
                     alt="iq option"
                  />
               </div>
               <div className="sponsor-container">
                  <img
                     src={'https://kingsleague.pro/wp-content/uploads/2023/01/fantasy.svg'}
                     alt="fantasy marca"
                  />
               </div>
               <div className="sponsor-container">
                  <img
                     src={'https://kingsleague.pro/wp-content/uploads/2023/01/pozo.svg'}
                     alt="el pozo king"
                  />
               </div>
            </SponsorsCarousel>
         </SponsorsContainer>

         <SponsorsContainer>
            <div className="title">
               <h3>
                  <span>Hosting</span> Partner
               </h3>
            </div>
            <img
               src={'https://kingsleague.pro/wp-content/uploads/2023/01/port_bcn.svg'}
               alt="port barcelona"
            />
         </SponsorsContainer>

         <SponsorsContainer>
            <div className="title">
               <h3>
                  <span>Media</span> Partner
               </h3>
            </div>
            <img
               src={'https://kingsleague.pro/wp-content/uploads/2023/01/Marca.svg'}
               alt="marca"
            />
         </SponsorsContainer>
      </Container>
   );
};

export { Partners };

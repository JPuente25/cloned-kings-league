import React from 'react';
import { Link } from 'react-router-dom';
import { FinalFourSVG } from '../Svg/FinalFourSVG';
import { ButtonsContainer, BuyTicketsContainer, Container } from './index.styled';

const FinalFourBanner = () => {
   return (
      <Container>
         <FinalFourSVG />
         <BuyTicketsContainer>
            <div>
               <span>COMPRAR ENTRADAS</span>
            </div>

            <ButtonsContainer>
               <button className="regular">
                  <svg
                     width="24"
                     height="22"
                     viewBox="0 0 46 44"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                     className="ticket">
                     <path
                        d="M4.91832 33.482L0.343139 29.091C-0.114379 28.6519 -0.114379 27.7736 0.343139 27.3345L28.2517 0.329332C28.7093 -0.109777 29.6243 -0.109777 30.0818 0.329332L34.657 4.72042C34.4282 4.93997 34.1995 4.93997 34.1995 5.15953C32.5982 6.69641 32.5982 9.11151 34.1995 10.6484C35.8008 12.1853 38.3171 12.1853 39.9184 10.6484C40.1472 10.4288 40.1472 10.4288 40.376 10.2093L44.9511 14.6004C45.4087 15.0395 45.4087 15.9177 44.9511 16.3568L17.2713 43.362C16.8138 43.8011 15.8988 43.8011 15.4412 43.362L10.8661 38.9709C11.0948 38.7514 11.3236 38.7514 11.3236 38.5318C12.9249 36.9949 12.9249 34.5798 11.3236 33.0429C9.72226 31.5061 7.20591 31.5061 5.6046 33.0429C5.14708 33.0429 5.14708 33.2625 4.91832 33.482ZM21.1602 11.9657L32.8269 23.163L34.1995 21.8457L22.5328 10.6484L21.1602 11.9657Z"
                        fill="currentColor"></path>
                  </svg>
                  <Link to="/entradas">Entradas</Link>
                  {/* <span>Entradas</span> */}
               </button>

               <button className="vip">
                  <svg
                     width="24"
                     height="22"
                     viewBox="0 0 46 44"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                     className="ticket">
                     <path
                        d="M4.91832 33.482L0.343139 29.091C-0.114379 28.6519 -0.114379 27.7736 0.343139 27.3345L28.2517 0.329332C28.7093 -0.109777 29.6243 -0.109777 30.0818 0.329332L34.657 4.72042C34.4282 4.93997 34.1995 4.93997 34.1995 5.15953C32.5982 6.69641 32.5982 9.11151 34.1995 10.6484C35.8008 12.1853 38.3171 12.1853 39.9184 10.6484C40.1472 10.4288 40.1472 10.4288 40.376 10.2093L44.9511 14.6004C45.4087 15.0395 45.4087 15.9177 44.9511 16.3568L17.2713 43.362C16.8138 43.8011 15.8988 43.8011 15.4412 43.362L10.8661 38.9709C11.0948 38.7514 11.3236 38.7514 11.3236 38.5318C12.9249 36.9949 12.9249 34.5798 11.3236 33.0429C9.72226 31.5061 7.20591 31.5061 5.6046 33.0429C5.14708 33.0429 5.14708 33.2625 4.91832 33.482ZM21.1602 11.9657L32.8269 23.163L34.1995 21.8457L22.5328 10.6484L21.1602 11.9657Z"
                        fill="currentColor"></path>
                  </svg>
                  <Link to="/entradas">Entradas VIP</Link>

                  {/* <span>Entradas VIP</span> */}
               </button>
            </ButtonsContainer>
         </BuyTicketsContainer>
      </Container>
   );
};

export { FinalFourBanner };

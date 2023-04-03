import React, {useEffect} from 'react';
import { Map } from '../../components/Map';
import { GenericContainer } from '../../container/GenericContainer';
import { Access, ContactSection, HowToArrive, Information, LocationSection, Mails } from './index.styled';

const Contact = () => {

   useEffect(() => {
      window.document.title = "Contacto - Kings League";
      window.scrollTo(0,0);
   }, []);

   return (
      <GenericContainer title="Contacto">
         <ContactSection>
            <Mails>
               <p>
                  Para más información, escríbenos a:
                  <br />
                  <a href="mailto:info@kingsleague.pro">info@kingsleague.pro</a>
               </p>

               <p>
                  Para contacto con el departamento de <strong>prensa</strong>:
                  <br />
                  <a href="mailto:media@kingsleague.pro">media@kingsleague.pro</a>
               </p>

               <p>
                  Para contacto con el departamento <strong>comercial</strong>:
                  <br />
                  <a href="mailto:comercial@kingsleague.pro">comercial@kingsleague.pro</a>
               </p>

               <p>
                  Para información sobre <strong>entradas</strong>:
                  <br />
                  <a href="mailto:entradas@kingsleague.pro">entradas@kingsleague.pro</a>
               </p>
            </Mails>

            <Information>
               <h3>CUPRA Arena</h3>
               <p>
                  <strong>Sólo se podrá acceder al recinto con acreditación o invitación.</strong>{' '}
                  El horario de apertura al público a la Zona Deportiva Port de Barcelona será en
                  los días de partido de 15h a 22h.
               </p>
            </Information>
         </ContactSection>

         <LocationSection>
            <Access>
               <h2>Accesos</h2>
               <Map />
               <div>
                  <p>
                     La entrada principal es a través del C/ De la Mar Roja, s/n, 08040 Barcelona.
                     <br />
                     El acceso al entorno del recinto se realiza por la Porta 34 (Av. Ports
                     d’Europa) de la Zona de Actividades Logísticas (ZAL).
                     <br />
                     Debe recogerse un ticket en el paso por la puerta que será sellado a la salida
                     del recinto.
                  </p>
               </div>
            </Access>

            <HowToArrive>
               <h2>Cómo llegar</h2>
               <img
                  src="https://kingsleague.pro/wp-content/themes/yootheme/cache/43/plano-pabellon-43bb2d16.jpeg"
                  alt="ubicacion"
               />
               <div>
                  <p>
                     <strong>Transporte Público</strong>
                     <br />
                     Metro: L10S ZAL | Riu Vell
                     <br />
                     Estos son los horarios del metro en Barcelona:
                     <br />
                     <a href="https://www.tmb.cat/es/barcelona/metro/-/lineametro/L10S">
                        https://www.tmb.cat/es/barcelona/metro/-/lineametro/L10S
                     </a>
                  </p>

                  <p>
                     <strong>Parking</strong>
                     <br />
                     Hay plazas limitadas de parking gratuitas.
                  </p>
               </div>
            </HowToArrive>
         </LocationSection>
      </GenericContainer>
   );
};

export { Contact };

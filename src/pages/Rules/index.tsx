import React, { useEffect } from 'react';
import { CardText, Container, RulesButton, RulesSection, RuleText, Subtitle } from './index.styled';

const Rules = () => {
   useEffect(() => {
      window.document.title = "Reglamento - Kings League";
      window.scrollTo(0, 0);
   }, []);

   return (
      <Container>
         <Subtitle>
            <p>
               La <strong>Kings League InfoJobs</strong> la creamos entre todos. Y eso incluye la
               forma de jugar y el reglamento. Estas son las normas que los aficionados han decidido
               por votación popular a través de redes sociales:
            </p>
         </Subtitle>

         <RulesSection>
            <RuleText>
               <h2>#01</h2>
               <p>
                  En caso de empate, el ganador de cada partido se decide con una tanda de penaltis
                  desde medio campo (shootouts).
               </p>
            </RuleText>

            <RuleText>
               <h2>#02</h2>
               <p>En la Kings League jugamos con fuera de juego.</p>
            </RuleText>

            <RuleText>
               <h2>#03</h2>
               <p>Los saques de banda se realizan con la mano.</p>
            </RuleText>

            <RuleText>
               <h2>#04</h2>
               <p>Las sustituciones de jugadores durante el partido son ilimitadas.</p>
            </RuleText>

            <RuleText>
               <h2>#05</h2>
               <p>
                  La tarjeta amarilla supone 2’ de exclusión. Las rojas, 5’ hasta que entre un
                  sustituto.
               </p>
            </RuleText>

            <RuleText>
               <h2>#06</h2>
               <p>
                  Para el saque inicial, el balón se sitúa en el centro del campo y los jugadores
                  arrancan desde la línea de fondo.
               </p>
            </RuleText>

            <RuleText>
               <h2>#07</h2>
               <p>Los dorsales van del 0 al 99.</p>
            </RuleText>

            <RuleText>
               <h2>#08</h2>
               <p>Los partidos son de dos partes de 20’.</p>
            </RuleText>

            <RuleText>
               <div className="rule">
                  <h2>#09</h2>
                  <p>
                     Armas secretas: cada equipo dispone de una carta, escogida al azar, que le
                     otorga una ventaja una sola vez por partido:
                  </p>
               </div>

               <CardText>
                  <div>
                     <h3>Arma 1:</h3>
                     <p>Penalti a favor</p>
                  </div>
                  <div>
                     <h3>Arma 2:</h3>
                     <p>Shootout a favor</p>
                  </div>
                  <div>
                     <h3>Arma 3:</h3>
                     <p>Exclusión de un rival durante 2’</p>
                  </div>
                  <div>
                     <h3>Arma 4:</h3>
                     <p>Gol doble durante 2’</p>
                  </div>
                  <div>
                     <h3>Arma 5:</h3>
                     <p>Comodín</p>
                  </div>
                  <div>
                     <h3>Arma 6:</h3>
                     <p>Robo de carta</p>
                  </div>
               </CardText>
            </RuleText>
         </RulesSection>

         <section>
            <RulesButton
               onClick={() =>
                  window.open(
                     'https://kingsleague.pro/wp-content/uploads/2023/03/KINGS-League-Reglamento-con-Economi%CC%81a-Virtual-mar-21.pdf',
                     '_blank'
                  )
               }>
               VER TODO EL REGLAMENTO
            </RulesButton>
         </section>
      </Container>
   );
};

export { Rules };

import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from "uuid";
import { useAppSelector } from '../../app/hooks';
import { GenericContainer } from '../../container/GenericContainer';
import { Container, CupraImg, Field, Formulary, Main, SubmitButton } from './index.styled';

const Tickets = () => {
   const { teamsData, loadingTeamsData } = useAppSelector((state) => state.home);

   return (
      <GenericContainer title="Entradas">
         <Main>
            <Container>
               <CupraImg />
               <Formulary action="submit">
                  <h2>CUPRA Arena</h2>
                  <p>
                     El servicio de entradas para el CUPRA Arena estará disponible en las próximas
                     fechas. Si quieres ser el primero en recibir información, apúntate aquí:
                  </p>
                  <section>
                     <Field>
                        <label htmlFor="name">Nombre Completo *</label>
                        <input
                           id="name"
                           type="text"
                           required
                        />
                     </Field>
                     <Field>
                        <label htmlFor="email">Correo electrónico *</label>
                        <input
                           id="email"
                           type="email"
                           required
                        />
                     </Field>
                     <Field className="birth_date">
                        <label htmlFor="">Fecha de Nacimiento *</label>
                        <div>
                           <input
                              type="number"
                              placeholder="DD"
                              required
                           />
                           <h4>/</h4>
                           <input
                              type="number"
                              placeholder="MM"
                              required
                           />
                           <h4>/</h4>
                           <input
                              type="number"
                              placeholder="AAAA"
                              required
                           />
                        </div>
                     </Field>
                     <Field>
                        <label htmlFor="country">País *</label>
                        <input
                           id="country"
                           type="text"
                           required
                        />
                     </Field>
                     <Field>
                        <label htmlFor="city">Ciudad de Residencia *</label>
                        <input
                           id="city"
                           type="text"
                           required
                        />
                     </Field>
                     <Field>
                        <label htmlFor="">Equipo Favorito *</label>
                        <select>
                           {!loadingTeamsData &&
                              teamsData.map((team) => (
                                 <option key={uuidv4()} value={team.key}>{team.name}</option>
                              ))}
                        </select>
                     </Field>
                     <Field className="terms_and_conditions">
                        <input type="checkbox" required/>
                        <p>
                           Acepto los{' '}
                           <Link to={'/politica-de-privacidad'}>términos y condiciones</Link> del
                           registro
                        </p>
                     </Field>
                     <SubmitButton type="submit">ENVIAR</SubmitButton>
                     <div className="ticket-msg">
                        <p>Proveedor de Ticketing Oficial del CUPRA Arena</p>
                        <img
                           src="https://kingsleague.pro/wp-content/uploads/2023/02/entradas-logo.svg"
                           alt="entradas.com"
                        />
                     </div>
                  </section>
               </Formulary>
            </Container>
         </Main>
      </GenericContainer>
   );
};

export { Tickets };


import React, { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../app/hooks';
import { getAssistsData, getGoalsData, getMvpData } from '../../features/KingsLeague/homeSlice';
import { Container, MainSection, OutletContainer, Tabs, Title } from './index.styled';

const Statistics = () => {
   const location = useLocation();
   const navigate = useNavigate();
   const dispatch = useAppDispatch();

   const selectedPath = location.pathname.split('/estadisticas/')[1];

   useEffect(() => {
      window.document.title = "Estadísticas - Kings League";
      window.scrollTo(0, 0);
      dispatch(getMvpData());
      dispatch(getGoalsData());
      dispatch(getAssistsData());
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   return (
      <Container>
         <Title>
            <h1 onClick={() => navigate('/estadisticas')}>Estadísticas</h1>
         </Title>

         <MainSection>
            <Tabs>
               <span
                  onClick={() => navigate('/estadisticas/mvp')}
                  className={`${selectedPath === 'mvp' && 'active'}`}>
                  simyo MVP
               </span>

               <span
                  onClick={() => navigate('/estadisticas/goles')}
                  className={`${selectedPath === 'goles' && 'active'}`}>
                  Goles
               </span>

               <span
                  onClick={() => navigate('/estadisticas/asistencias')}
                  className={`${selectedPath === 'asistencias' && 'active'}`}>
                  Asistencias
               </span>
            </Tabs>

            <OutletContainer>
               <Outlet />
            </OutletContainer>
         </MainSection>
      </Container>
   );
};

export { Statistics };

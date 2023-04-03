import React, { useEffect } from 'react';
import { HashRouter, Route, Routes, useLocation } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Player12 } from '../pages/Player12';
import { Games } from '../pages/Games';
import { Qualification } from '../pages/Qualification';
import { Statistics } from '../pages/Statistics';
import { Rules } from '../pages/Rules';
import { Draft } from '../pages/Draft';
import { Contact } from '../pages/Contact';
import { PrivacyPolicy } from '../pages/PrivacyPolicy';
import { CookiesPolicy } from '../pages/CookiesPolicy';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Equipos } from '../pages/Equipos';
import { TeamDetails } from '../pages/TeamDetails';
import { StatisticsAllOutlet } from '../pages/Statistics/StatisticsAllOutlet';
import { StatisticsMvpOutlet } from '../pages/Statistics/StatisticsMvpOutlet';
import { StatisticsAssistsOutlet } from '../pages/Statistics/StatisticsAssistsOutlet';
import { StatisticsGoalsOutlet } from '../pages/Statistics/StatisticsGoalsOutlet';
import { LegalWarning } from '../pages/LegalWarning';
import { Tickets } from '../pages/Tickets';
import { NotFound } from '../pages/NotFound';

window.onbeforeunload = function () {
   window.scrollTo(0, 0);
};

function App() {
   return (
      <HashRouter>
         <Header />
         <Routes>
            <Route
               path="/"
               element={<Home />}
            />
            <Route
               path="/entradas"
               element={<Tickets />}
            />
            <Route
               path="/equipos"
               element={<Equipos />}
            />
            <Route
               path="/equipos/:teamName"
               element={<TeamDetails />}
            />
            <Route
               path="/jugador-12"
               element={<Player12 />}
            />
            <Route
               path="/partidos"
               element={<Games />}
            />
            <Route
               path="/clasificacion"
               element={<Qualification />}
            />
            <Route
               path="/estadisticas"
               element={<Statistics />}
            >
               <Route index element={<StatisticsAllOutlet />} />
               <Route path="mvp" element={<StatisticsMvpOutlet />} />
               <Route path="goles" element={<StatisticsGoalsOutlet />} />
               <Route path="asistencias" element={<StatisticsAssistsOutlet />} />
            </Route>
            <Route
               path="/reglamento"
               element={<Rules />}
            />
            <Route
               path="/draft"
               element={<Draft />} />
            <Route
               path="/contacto"
               element={<Contact />}
            />
            <Route
               path="/politica-de-privacidad"
               element={<PrivacyPolicy />}
            />
            <Route
               path="/aviso-legal"
               element={<LegalWarning />}
            />
            <Route
               path="/politica-de-cookies"
               element={<CookiesPolicy />}
            />
            <Route
               path="*"
               element={<NotFound />}
            />
         </Routes>
         <Footer />
      </HashRouter>
   );
}

export default App;

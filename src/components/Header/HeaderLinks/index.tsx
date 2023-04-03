import React from 'react';
import { Link } from 'react-router-dom';
import { LinksList } from './index.styled';

interface Props {
   fixed?: boolean;
   modal: boolean;
   handleClick: (path: string) => void;
   handleNewTab: (path: string) => void;
}

const HeaderLinks = ({ fixed, modal, handleClick, handleNewTab }: Props) => {
   return (
      <LinksList
         fixSection={fixed}
         modal={modal}>
         <li onClick={() => handleClick('/entradas')}>Entradas</li>
         <li onClick={() => handleClick('/equipos')}>Equipos</li>
         <li onClick={() => handleClick('/jugador-12')}>Jugador 12</li>
         <li onClick={() => handleClick('/partidos')}>Partidos</li>
         <li onClick={() => handleClick('/clasificacion')}>Clasificación</li>
         <li onClick={() => handleClick('/estadisticas')}>Estadísticas</li>
         <li onClick={() => handleNewTab('https://www.kingsleaguefantasymarca.com/')}>Fantasy</li>
      </LinksList>
   );
};

export { HeaderLinks };

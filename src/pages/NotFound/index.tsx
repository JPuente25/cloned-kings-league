import React from 'react';
import {AiOutlineArrowLeft} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { Container } from './index.styled';

interface Props {}

interface NotFoundStates {}

const NotFound = () => {
   return (
         <Container>
            <img
               src="https://s.w.org/images/core/emoji/14.0.0/svg/1f635-200d-1f4ab.svg"
               alt="oops emoji"
            />
            <h2>Whoops!</h2>
            <p>We couldn’t find the page you were looking for.</p>
            <Link to="/">
               <AiOutlineArrowLeft />
               <p>Return to Homepage</p>  
            </Link>
         </Container>
   );
};

export { NotFound };

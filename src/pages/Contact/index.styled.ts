import styled from 'styled-components';

export const ContactSection = styled.section`
   display: flex;
   flex-direction: column;
   padding: 90px 40px 0px;

   @media only screen and (max-width: 991px) {
      padding: 50px 30px 0px;
   }
`;

export const Mails = styled.div`
   margin-bottom: 30px;
   p {
      font-size: 14px;
      margin-bottom: 20px;
      font-weight: 100;
   }

   a {
      text-decoration: none;
      color: var(--orange2);
   }
`;

export const Information = styled.div`
   display: flex;
   flex-direction: column;

   h3 {
      font-size: 14.4px;
      margin-bottom: 20px;
   }

   p {
      font-size: 14px;
   }
`;

export const LocationSection = styled.section`
   display: flex;
   padding: 40px 40px 70px;
   gap: 30px;

   @media only screen and (max-width: 991px) {
      padding: 30px 30px 50px;
   }

   @media only screen and (max-width: 768px) {
      flex-direction: column;
   }

   h2 {
      font-size: 18px;
      text-align: left;
   }

   p {
      font-size: 14px;
   }

   a {
      text-decoration: none;
      color: var(--orange2);
   }
`;

export const Access = styled.div`
   width: 50%;
   display: flex;
   flex-direction: column;
   gap: 20px;

   @media only screen and (max-width: 768px) {
      width: 100%;
   }

   iframe {
      width: 100%;
      background-color: var(--gray-skeleton-1);
      aspect-ratio: 1.5 / 1;
   }
`;

export const HowToArrive = styled.div`
   width: 50%;
   display: flex;
   flex-direction: column;
   gap: 20px;

   @media only screen and (max-width: 768px) {
      width: 100%;
   }

   img {
      width: 100%;
      aspect-ratio: 1.75 / 1;
      background-color: var(--gray-skeleton-1);
   }

   p {
      margin-bottom: 15px;
   }
`;

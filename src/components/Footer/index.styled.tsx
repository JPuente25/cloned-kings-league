import styled from 'styled-components';

export const Container = styled.footer`
   width: 100%;
   height: 240px;
   background-image: var(--gradient1);
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 40px;
   position: relative;

   @media only screen and (max-width: 960px) {
      flex-direction: column;
      height: auto;
      padding-top: 50px;
   }

   p.warning {
      position: absolute;
      top: 10px;
      left: 10px;
      font-size: 12px;

      a {
         text-decoration: none;
         font-weight: 700;
      }
   }

   a:-webkit-any-link {
      color: inherit;
      text-decoration: none;
   }
`;

export const LogoSection = styled.section`
   display: flex;
   flex-direction: column;
   align-items: center;
   height: 100%;
   justify-content: space-between;

   .kl-logo {
      width: 200px;
   }

   .social-logo {
      width: 30px;
      height: 30px;
      cursor: pointer;

      &:hover {
         filter: invert();
      }
   }

   .social {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 15px;

      @media only screen and (max-width: 960px) {
         padding: 30px 0;
      }
   }
`;

export const LinkSection = styled.div`
   height: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-between;

   ul {
      list-style: none;
      font-family: var(--font-family1);

      li {
         cursor: pointer;

         &:hover {
            color: white;
         }
      }
   }

   ul.pages-link {
      width: 100%;
      font-size: 13.2px;
      font-weight: normal;
      display: flex;
      align-items: center;
      justify-content: end;
      flex-wrap: wrap;
      gap: 15px;

      li {
         padding: 8px 5px;
         white-space: nowrap;
      }

      @media only screen and (max-width: 960px) {
         justify-content: center;
      }

      @media only screen and (max-width: 640px) {
         text-align: center;
      }

      @media only screen and (max-width: 480px) {
         flex-direction: column;
         gap: 10px;
      }

   }

   ul.legal-link {
      width: 100%;
      height: 30px;
      align-self: flex-end;
      font-size: 12px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 20px;

      @media only screen and (max-width: 960px) {
         justify-content: center;
         align-self: center;
         white-space: nowrap;
         margin-top: 30px;
      }

      @media only screen and (max-width: 480px) {
         margin-top: 50px;
         flex-direction: column;
         text-align: center;
      }
   }
`;

import styled from 'styled-components';

//HEADER CONTAINER
export const Container = styled.header<{ fixSection: string }>`
   width: 100%;
   display: flex;
   flex-direction: column;
   font-size: 12px;
   font-weight: 700;
   position: sticky;
   top: 0;
   z-index: 9;
`;

//TEAM SECTION
export const TeamSection = styled.section<{ fixSection: string }>`
   width: 100%;
   height: 50px;
   display: ${(props) => (props.fixSection === 'true' ? 'none' : 'flex')};
   align-items: center;
   justify-content: start;
   padding: 0 120px;
   gap: 15px;
   background-color: white;

   img {
      width: 30px;
      height: 30px;
      cursor: pointer;
   }

   @media only screen and (max-width: 768px) {
      display: none;
   }
`;

//Main Section
export const MainSection = styled.section<{ fixSection: string }>`
   display: flex;
   align-items: flex-start;
   justify-content: space-between;
   height: 90px;
   width: 100%;
   background-color: lightgoldenrodyellow;
   padding: 0 40px 0 30px;
   position: relative;
   background-image: var(--gradient1);
   align-self: flex-start;

   @media only screen and (max-width: 480px) {
      height: 90px;
   }

   .links-container {
      display: flex;
      margin: auto 0;

      img.logo-oficial {
         height: ${(props) => (props.fixSection === 'true' ? '75px' : '96px')};
         position: ${(props) => (props.fixSection === 'true' ? 'normal' : 'absolute')};
         bottom: 10px;
         cursor: pointer;
         transition: all ease 0.2s;

         @media only screen and (max-width: 768px) {
            height: 75px;
            position: normal;
            transition: all ease 0s;
         }
      }
   }
`;

//SOCIAL MEDIA, MARKETING AND MODAL BUTTON
export const SocialMarketingSection = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 10px 0px;
   gap: 15px;
   margin: auto 0;

   @media only screen and (max-width: 480px) {
      margin: auto 0;
   }
`;

export const ButtonsContainer = styled.div`
   display: flex;
   gap: 15px;

   @media only screen and (max-width: 480px) {
      display: none;
   }
`;

//BUTTONS
export const StyledButton = styled.button`
   display: flex;
   align-items: center;
   justify-content: center;
   height: 36px;
   padding: 5px 15px;
   font-family: var(--font-family-1);
   font-size: 12px;
   font-weight: 900;
   color: black;
   border-radius: 3px;
   transition: all ease 0.1s;
   cursor: pointer;

   h4 {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-weight: 900;
      margin-left: 10px;
   }

   span {
      background-color: black;
      color: var(--orange1);
      padding: 0px 5px;
      height: 13px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 3px;
   }

   &.entradas {
      border: 1px solid black;
      background-color: transparent;

      &:hover {
         color: white;
         background-color: var(--dark1);
      }

      @media only screen and (max-width: 480px) {
         width: 100%;
      }
   }

   &.kingsleaguetv {
      border: none;
      background-color: white;

      &:hover {
         background-color: black;
         color: white;
         img {
            filter: invert();
         }
      }
   }
`;

//MODAL TAB
export const Modal = styled.section<{ fixSection: string; active: string }>`
   display: none;
   flex-direction: column;
   align-items: center;
   justify-content: flex-start;
   gap: 30px;
   width: 100%;
   position: fixed;
   top: ${(props) => (props.fixSection === 'true' ? '82px' : '132px')};
   background-color: white;
   z-index: 2;
   height: ${(props) => (props.active === 'true' ? '100%' : '0px')};
   overflow: hidden;
   transition: height ease 0.7s;

   @media only screen and (max-width: 768px) {
      top: 82px;
   }

   @media only screen and (max-width: 480px) {
      top: 90px;
   }

   @media only screen and (max-width: 991px) {
      display: flex;
   }
`;

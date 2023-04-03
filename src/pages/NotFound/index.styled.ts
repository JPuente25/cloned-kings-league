import styled from 'styled-components';

export const Container = styled.div`
   width: 100%;
   height: 500px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   background-color: #f8f8f8;
   padding: 15px;

   img {
      width: 40px;
      height: 40px;
      margin-bottom: 30px;
   }

   h2 {
      font-size: 32px;
      margin-bottom: 15px;
   }

   p {
      font-size: 12px;
      text-align: center;
   }

   a {
      text-decoration: none;
      border-radius: 4px;
      margin-top: 30px;
      display: flex;
      align-items: center;
      gap: 10px;
      font-weight: 700;
      padding: 8px 12px;
      background-color: transparent;
      border: 1px solid rgba(0, 0, 0, 0.2);

      p,
      svg {
         color: rgba(0, 0, 0, 0.5);
      }

      &:hover {
         background-color: black;

         p, svg {
            color: white !important;
         }
      }
   }
`;

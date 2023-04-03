import styled from "styled-components";

export const Container = styled.article`
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   border-radius: 8px;
   contain: content;
   box-shadow: 0 0 2px #00000060;
   background-color: white;
`;

export const TitleBox = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 100%;
   height: 46.8px;
   font-family: var(--font-family-2);
   font-size: 12px;
   font-weight: 900;
   background-color: black;
   color: white;
`;

export const ChildrenBox = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`;
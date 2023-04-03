import styled from "styled-components";

export const Container = styled.article`
   width: 100%;
   aspect-ratio: 1.4 / 1;
   display: flex;
   background-image: linear-gradient(0deg, var(--gray-skeleton-2) 0%, var(--gray-skeleton-1) 100%);
   position: relative;
   border-radius: 8px;
   contain: content;
`;
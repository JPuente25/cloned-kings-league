import styled from "styled-components";

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   width: calc(100% - 80px);
   gap: 20px;
   margin: 0 auto;
`;

export const SkeletonBox = styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: space-between;
   gap: 10px;

   span {
      height: 30px;
      width: 20%;
      background-color: var(--gray-skeleton-1);
      border-radius: 4px;
   }
   
   span:nth-child(2), span:nth-child(4) {
      width: 30px;
      border-radius: 50%;
   }
`;
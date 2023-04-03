import styled from 'styled-components';

export const Container = styled.div<{ mode: number }>`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   width: 100%;
   padding: ${(props) => (props.mode === 1 ? '0 0 20px 0' : '0px 40px')};

   @media only screen and (max-width: 480px) {
      padding: ${(props) => (props.mode === 1 ? '0 0 20px 0' : '0px 15px')};
   }
`;

export const GameBox = styled.div<{ mode: number }>`
   width: 100%;
   display: flex;
   justify-content: space-around;
   align-items: center;
   border-bottom: 1px solid var(--light2);
   padding: 10px;

   &:first-of-type {
      border-top: ${(props) => (props.mode === 1 ? 'none' : '1px solid var(--light2);')};
   }

   &:last-of-type {
      border-bottom: ${(props) => (props.mode === 1 ? 'none' : '1px solid var(--light2);')};
   }

   &:hover {
      background-color: black;

      h3 {
         color: white;
      }
   }
`;

export const TeamName = styled.h3`
   &.home {
      flex: 0 0 auto;
      font-family: var(--font-family-2);
      font-size: 12px;
      min-width: 35px;
      max-width: 35px;
      text-align: center;
      line-height: 1.5;
      padding: 0px 5px;
   }

   &.games {
      width: 20%;
      font-family: var(--font-family-1);
      font-size: 16px;
      /* background-color: red; */
      text-align: left;
      line-height: 1.5;

      &:first-child {
         text-align: right;
      }

      @media only screen and (max-width: 640px) {
         min-width: 40px;
      }
   }
`;

export const TeamLogo = styled.img`
   flex: 0 0 auto;
   width: 30px;
   height: 30px;
   cursor: pointer;
   margin: 0px 5px;
`;

export const GameScore = styled.div`
   width: 40%;
   font-size: 14px;
   padding: 10px 16px;
   text-align: center;
   white-space: nowrap;
   border-radius: 4px;
   
   &.games {
      width: 20%;
      min-width: 100px;
   }

   &.played {
      background-image: var(--gradient1);
      color: white;
   }

   &.not-played-time {
      background-color: #e3e3e3;
      color: black;
   }

   &.not-played-not-time {
      background-color: #e3e3e3;
      color: black;
      font-weight: bolder;
   }

`;
//    /* width: 100%; */
//    display: flex;
//    justify-content: space-between;
//    align-items: center;
//    gap: 10px;
//    /* border-bottom: 1px solid var(--light2); */

//    /* &:first-of-type {
//       border-top: ${(props) => (props.mode === 1 ? 'none' : '1px solid var(--light2);')};
//    }

//    &:last-of-type {
//       border-bottom: ${(props) => (props.mode === 1 ? 'none' : '1px solid var(--light2);')};
//    } */

//    img.youtube-logo {
//       padding-right: 10px;
//    }

//    &:hover {
//       background-color: black;
//    }
// `;

// export const Game = styled.div<{ mode: number }>`
//    &.mode-home {
//       display: flex;
//       justify-content: space-between;
//       align-items: center;
//       width: 100%;
//       padding: 12px 15px;
//       gap: 10px;
//       transition: all ease 0.1s;
//       position: relative;

//       &:hover {
//          background-color: black;

//          h3 {
//             color: white;
//          }
//       }

//       img {
//          width: 30px;
//          height: 30px;
//          cursor: pointer;
//       }

//       h3 {
//          font-family: var(--font-family-2);
//          font-size: 12px;
//          min-width: 35px;
//          max-width: 35px;
//          text-align: center;
//          line-height: 1.5;
//       }

//       span {
//          font-size: 14px;
//          padding: 10px 16px;
//          width: 100%;
//          max-width: 200px;
//          text-align: center;
//          white-space: nowrap;
//          border-radius: 4px;

//          &.played {
//             background-image: var(--gradient1);
//             color: white;
//          }

//          &.not-played-time {
//             background-color: #e3e3e3;
//             color: black;
//          }

//          &.not-played-not-time {
//             background-color: #e3e3e3;
//             color: black;
//             font-weight: bolder;
//          }
//       }
//    }

//    &.mode-games {
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       width: 100%;
//       padding: 10px 0px;
//       gap: 5%;
//       transition: all ease 0.1s;
//       position: relative;

//       &:hover {
//          background-color: black;

//          h3 {
//             color: white;
//          }
//       }

//       img {
//          width: 30px;
//          height: 30px;
//          cursor: pointer;
//       }

//       h3 {
//          font-family: var(--font-family-1);
//          font-size: 16px;
//          min-width: 100px;
//          max-width: inherit;
//          text-align: left;
//          line-height: 1.5;

//          &:first-child {
//             text-align: right;
//          }

//          @media only screen and (max-width: 640px) {
//             min-width: 40px;
//          }
//       }

//       span {
//          font-size: 14px;
//          padding: 10px 16px;
//          width: 100%;
//          max-width: 200px;
//          min-width: 106px;
//          text-align: center;
//          white-space: nowrap;
//          border-radius: 4px;

//          &.played {
//             background-image: var(--gradient1);
//             color: white;
//          }

//          &.not-played-time {
//             background-color: #e3e3e3;
//             color: black;
//          }

//          &.not-played-not-time {
//             background-color: #e3e3e3;
//             color: black;
//             font-weight: bolder;
//          }
//       }
//    }
// `;

// export const Game = styled.div<{ mode: number }>`
//    display: flex;
//    justify-content: ${(props) => (props.mode === 1 ? 'space-between' : 'center')};
//    align-items: center;
//    width: 100%;
//    padding: ${(props) => (props.mode === 1 ? '12px 15px' : '10px 0px')};
//    gap: ${(props) => (props.mode === 1 ? '10px' : '5%')};
//    transition: all ease 0.1s;
//    position: relative;

//    &:hover {
//       background-color: black;

//       h3 {
//          color: white;
//       }
//    }

//    img {
//       width: 30px;
//       height: 30px;
//       cursor: pointer;
//    }

//    h3 {
//       font-family: ${(props) =>
//          props.mode === 1 ? 'var(--font-family-2);' : 'var(--font-family-1);'};
//       font-size: ${(props) => (props.mode === 1 ? '12px' : '16px')};
//       min-width: ${(props) => (props.mode === 1 ? '35px' : '100px')};
//       max-width: ${(props) => (props.mode === 1 ? '35px' : 'inherit')};
//       text-align: ${(props) => (props.mode === 1 ? 'center' : 'left')};
//       line-height: 1.5;

//       &:first-child {
//          text-align: ${(props) => (props.mode === 1 ? 'center' : 'right')};
//       }

//       @media only screen and (max-width: 640px) {
//          min-width: ${(props) => (props.mode === 1 ? '35px' : '40px')};
//       }
//    }

//    span {
//       font-size: 14px;
//       padding: 10px 16px;
//       width: 100%;
//       max-width: 200px;
//       min-width: ${(props) => (props.mode === 1 ? 'inherit' : '106px')};
//       text-align: center;
//       white-space: nowrap;
//       border-radius: 4px;

//       &.played {
//          background-image: var(--gradient1);
//          color: white;
//       }

//       &.not-played-time {
//          background-color: #e3e3e3;
//          color: black;
//       }

//       &.not-played-not-time {
//          background-color: #e3e3e3;
//          color: black;
//          font-weight: bolder;
//       }
//    }
// `;

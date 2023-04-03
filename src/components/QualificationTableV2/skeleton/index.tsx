import { v4 as uuidv4 } from "uuid";
import { Container, TeamBox, TeamTable, TitleTable } from './index.styled';

const SkeletonQualificationTableV2 = () => {
   return (
      <Container>
         <TitleTable>
            <span>POS.</span>
            <span>EQUIPO</span>
            <span>PG</span>
            <span>PP</span>
            <span>GF</span>
            <span>GC</span>
            <span>DG</span>
         </TitleTable>

         <TeamTable>
            {new Array(12).fill(1).map((item) => (
                  <TeamBox key={uuidv4()}>
                     <div className='rank'></div>
                     <div className="logo"></div>
                     <div className="name"></div>
                     <div className="win"></div>
                     <div className="loss"></div>
                     <div className="goals"></div>
                     <div className="cg"></div>
                     <div className="gd"></div>
                  </TeamBox>
               ))}
         </TeamTable>
      </Container>
   );
};

export { SkeletonQualificationTableV2 };


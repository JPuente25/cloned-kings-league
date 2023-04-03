import { TableContainer } from '../../TableContainer';
import { TeamBox, TeamTable, TitleTable } from './index.styled';

const SkeletonQualificationTable = () => {
   return (
      <TableContainer title="CLASIFICACIÓN">
         <TitleTable>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
         </TitleTable>

         <TeamTable>
            <TeamBox />
            <TeamBox />
            <TeamBox />
            <TeamBox />
            <TeamBox />
            <TeamBox />
            <TeamBox />
            <TeamBox />
         </TeamTable>
      </TableContainer>
   );
};

export { SkeletonQualificationTable };

import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { draftGoalkeepers } from '../../fakeDB/draft-goalkeepers';
import { draftPlayers } from '../../fakeDB/draft-players';
import { DraftGoalkeeper, DraftPlayer } from '../../types';

export interface draftState {
   draftPlayers: Array<DraftPlayer>;
   draftGoalkeepers: Array<DraftGoalkeeper>;
   loadingDraftPlayers: boolean;
   loadingDraftGoalkeepers: boolean;
   errorDraftPlayers: any;
   errorDraftGoalkeepers: any;
}

const initialState: draftState = {
   draftPlayers: [],
   draftGoalkeepers: [],
   loadingDraftPlayers: true,
   loadingDraftGoalkeepers: true,
   errorDraftPlayers: false,
   errorDraftGoalkeepers: false,
};

//FAKING API REQUEST ----------------------------------------------------------------
const fetchDraftPlayerData = () =>
   new Promise<Array<DraftPlayer>>((resolve) =>
      setTimeout(() => {
         resolve(draftPlayers);
      }, 2000)
   );

const fetchDraftGoalkeeperData = () =>
   new Promise<Array<DraftGoalkeeper>>((resolve) =>
      setTimeout(() => {
         resolve(draftGoalkeepers);
      }, 2000)
   );

//FAKING API REQUEST ----------------------------------------------------------------------

export const getDraftPlayers = createAsyncThunk('KingsLeague/getDraftPlayers', async () => {
   const data = await fetchDraftPlayerData();
   return data;
});

export const getDraftGoalkeepers = createAsyncThunk('KingsLeague/getDraftGoalkeepers', async () => {
   const data = await fetchDraftGoalkeeperData();
   return data;
});

const draftSlice = createSlice({
   name: 'draft',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         // Draft: Players
         .addCase(getDraftPlayers.pending, (state) => {
            state.loadingDraftPlayers = true;
         })
         .addCase(getDraftPlayers.fulfilled, (state, action: PayloadAction<Array<DraftPlayer>>) => {
            state.draftPlayers = action.payload;
            state.loadingDraftPlayers = false;
         })
         .addCase(getDraftPlayers.rejected, (state, action: PayloadAction<any>) => {
            state.loadingDraftPlayers = false;
            state.errorDraftPlayers = action.payload;
         })

         // Draft: Goalkeepers
         .addCase(getDraftGoalkeepers.pending, (state) => {
            state.loadingDraftGoalkeepers = true;
         })
         .addCase(getDraftGoalkeepers.fulfilled, (state, action: PayloadAction<Array<DraftGoalkeeper>>) => {
            state.draftGoalkeepers = action.payload;
            state.loadingDraftGoalkeepers = false;
         })
         .addCase(getDraftGoalkeepers.rejected, (state, action: PayloadAction<any>) => {
            state.loadingDraftGoalkeepers = false;
            state.errorDraftGoalkeepers = action.payload;
         })
   },
});

export default draftSlice.reducer;

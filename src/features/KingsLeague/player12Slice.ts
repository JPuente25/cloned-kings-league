import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { player12 } from '../../fakeDB/player-12';
import { weeks } from '../../fakeDB/weeks';
import { Player12Props, WeeksProps } from '../../types';

export interface player12State {
   player12Data: Array<Player12Props>;
   weeks: WeeksProps;
   loadingPlayer12Data: boolean;
   loadingWeeks: boolean;
   errorPlayer12Data: any;
   errorWeeks: any;
}

const initialState: player12State = {
   player12Data: [],
   weeks: {} as WeeksProps,
   loadingPlayer12Data: true,
   loadingWeeks: true,
   errorPlayer12Data: false,
   errorWeeks: false,
};

//FAKING API REQUEST ----------------------------------------------------------------
const fetchPlayer12Data = () =>
   new Promise<Array<Player12Props>>((resolve) =>
      setTimeout(() => {
         resolve(player12);
      }, 2000)
   );

const fetchWeekData = () =>
   new Promise<WeeksProps>((resolve) =>
      setTimeout(() => {
         resolve(weeks);
      }, 2000)
   );

//FAKING API REQUEST ----------------------------------------------------------------------

export const getPlayer12Data = createAsyncThunk('KingsLeague/getPlayer12Data', async () => {
   const data = await fetchPlayer12Data();
   return data;
});

export const getWeeks = createAsyncThunk('KingsLeague/getWeeks', async () => {
   const data = await fetchWeekData();
   return data;
});

const Player12Slice = createSlice({
   name: 'player12',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         // PLAYER 12 DATA
         .addCase(getPlayer12Data.pending, (state) => {
            state.loadingPlayer12Data = true;
         })
         .addCase(
            getPlayer12Data.fulfilled,
            (state, action: PayloadAction<Array<Player12Props>>) => {
               state.player12Data = action.payload;
               state.loadingPlayer12Data = false;
            }
         )
         .addCase(getPlayer12Data.rejected, (state, action: PayloadAction<any>) => {
            state.loadingPlayer12Data = false;
            state.errorPlayer12Data = action.payload;
         })

         // WEEK DATA
         .addCase(getWeeks.pending, (state) => {
            state.loadingWeeks = true;
         })
         .addCase(
            getWeeks.fulfilled,
            (state, action: PayloadAction<WeeksProps>) => {
               state.weeks = action.payload;
               state.loadingWeeks = false;
            }
         )
         .addCase(getWeeks.rejected, (state, action: PayloadAction<any>) => {
            state.loadingWeeks = false;
            state.errorWeeks = action.payload;
         });
   },
});

export default Player12Slice.reducer;

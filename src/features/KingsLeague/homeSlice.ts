import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AssistsProps, GamesProps, GoalsProps, MvpProps, TeamsData, VideoProps } from '../../types';
import { teams } from '../../fakeDB/teams';
import { games } from '../../fakeDB/games';
import { assists } from '../../fakeDB/assists';
import { mvp } from '../../fakeDB/mvp';
import { goals } from '../../fakeDB/goals';
import videos from '../../fakeDB/videos';

export interface homeState {
   teamsData: Array<TeamsData>;
   gamesData: Array<GamesProps>;
   mvpData: Array<MvpProps>;
   assistsData: Array<AssistsProps>;
   goalsData: Array<GoalsProps>;
   videosData: Array<VideoProps>;
   loadingTeamsData: boolean;
   loadingGamesData: boolean;
   loadingMvpData: boolean;
   loadingAssistsData: boolean;
   loadingGoalsData: boolean;
   loadingVideosData: boolean;
   errorTeamsData: any;
   errorGamesData: any;
   errorMvpData: any;
   errorAssistsData: any;
   errorGoalsData: any;
   errorVideosData: any;
}

const initialState: homeState = {
   teamsData: [],
   gamesData: [],
   mvpData: [],
   assistsData: [],
   goalsData: [],
   videosData: [],
   loadingTeamsData: true,
   loadingGamesData: true,
   loadingMvpData: true,
   loadingAssistsData: true,
   loadingGoalsData: true,
   loadingVideosData: true,
   errorTeamsData: false,
   errorGamesData: false,
   errorMvpData: false,
   errorAssistsData: false,
   errorGoalsData: false,
   errorVideosData: false,
};

//FAKING API REQUEST ----------------------------------------------------------------
const fetchTeamsData = () =>
   new Promise<Array<TeamsData>>((resolve) =>
      setTimeout(() => {
         resolve(teams);
      }, 2000)
   );

const fetchGamesData = () =>
   new Promise<Array<GamesProps>>((resolve) =>
      setTimeout(() => {
         resolve(games);
      }, 2000)
   );

const fetchMvpData = () =>
   new Promise<Array<MvpProps>>((resolve) =>
      setTimeout(() => {
         resolve(mvp);
      }, 2000)
   );

const fetchAssistsData = () =>
   new Promise<Array<AssistsProps>>((resolve) =>
      setTimeout(() => {
         resolve(assists);
      }, 2000)
   );

const fetchGoalsData = () =>
   new Promise<Array<GoalsProps>>((resolve) =>
      setTimeout(() => {
         resolve(goals);
      }, 2000)
   );

const fetchVideosData = () =>
   new Promise<Array<VideoProps>>((resolve) =>
      setTimeout(() => {
         resolve(videos);
      }, 2000)
   );
//FAKING API REQUEST ----------------------------------------------------------------------

export const getTeamsData = createAsyncThunk('KingsLeague/getTeamsData', async () => {
   const data = await fetchTeamsData();
   return data;
});

export const getGamesData = createAsyncThunk('KingsLeague/getGamesData', async () => {
   const data = await fetchGamesData();
   return data;
});

export const getMvpData = createAsyncThunk('KingsLeague/getMvpData', async () => {
   const data = await fetchMvpData();
   return data;
});

export const getAssistsData = createAsyncThunk('KingsLeague/getAssistsData', async () => {
   const data = await fetchAssistsData();
   return data;
});

export const getGoalsData = createAsyncThunk('KingsLeague/getGoalsData', async () => {
   const data = await fetchGoalsData();
   return data;
});

export const getVideosData = createAsyncThunk('KingsLeague/getVideosData', async () => {
   const data = await fetchVideosData();
   return data;
});

const homeSlice = createSlice({
   name: 'home',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         // TEAMS DATA
         .addCase(getTeamsData.pending, (state) => {
            state.loadingTeamsData = true;
         })
         .addCase(getTeamsData.fulfilled, (state, action: PayloadAction<Array<TeamsData>>) => {
            state.teamsData = action.payload;
            state.loadingTeamsData = false;
         })
         .addCase(getTeamsData.rejected, (state, action: PayloadAction<any>) => {
            state.loadingTeamsData = false;
            state.errorTeamsData = action.payload;
         })

         //GAMES DATA
         .addCase(getGamesData.pending, (state) => {
            state.loadingGamesData = true;
         })
         .addCase(getGamesData.fulfilled, (state, action: PayloadAction<Array<GamesProps>>) => {
            state.gamesData = action.payload;
            state.loadingGamesData = false;
         })
         .addCase(getGamesData.rejected, (state, action: PayloadAction<any>) => {
            state.loadingGamesData = false;
            state.errorGamesData = action.payload;
         })

         //MVP DATA
         .addCase(getMvpData.pending, (state) => {
            state.loadingMvpData = true;
         })
         .addCase(getMvpData.fulfilled, (state, action: PayloadAction<Array<MvpProps>>) => {
            state.mvpData = action.payload;
            state.loadingMvpData = false;
         })
         .addCase(getMvpData.rejected, (state, action: PayloadAction<any>) => {
            state.loadingMvpData = false;
            state.errorMvpData = action.payload;
         })

         //ASSISTS DATA
         .addCase(getAssistsData.pending, (state) => {
            state.loadingAssistsData = true;
         })
         .addCase(getAssistsData.fulfilled, (state, action: PayloadAction<Array<AssistsProps>>) => {
            state.assistsData = action.payload;
            state.loadingAssistsData = false;
         })
         .addCase(getAssistsData.rejected, (state, action: PayloadAction<any>) => {
            state.loadingAssistsData = false;
            state.errorAssistsData = action.payload;
         })

         //GOALS DATA
         .addCase(getGoalsData.pending, (state) => {
            state.loadingGoalsData = true;
         })
         .addCase(getGoalsData.fulfilled, (state, action: PayloadAction<Array<GoalsProps>>) => {
            state.goalsData = action.payload;
            state.loadingGoalsData = false;
         })
         .addCase(getGoalsData.rejected, (state, action: PayloadAction<any>) => {
            state.loadingGoalsData = false;
            state.errorGoalsData = action.payload;
         })

         //VIDEOS DATA
         .addCase(getVideosData.pending, (state) => {
            state.loadingVideosData = true;
         })
         .addCase(getVideosData.fulfilled, (state, action: PayloadAction<Array<VideoProps>>) => {
            state.videosData = action.payload;
            state.loadingVideosData = false;
         })
         .addCase(getVideosData.rejected, (state, action: PayloadAction<any>) => {
            state.loadingVideosData = false;
            state.errorVideosData = action.payload;
         });
   },
});

export default homeSlice.reducer;

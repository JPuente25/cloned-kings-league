import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import homeSlice  from '../features/KingsLeague/homeSlice';
import player12Slice from '../features/KingsLeague/player12Slice';
import draftSlice from '../features/KingsLeague/draftSlice';

export const store = configureStore({
  reducer: {
    home: homeSlice,
    player12: player12Slice,
    draft: draftSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

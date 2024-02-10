import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  players: [],
  category: '',
  playerTurn: null,
  
}

const fetchCreateGame = createAsyncThunk(
  'game/fetchGetCards',
  async (config) => {

  }
)

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCreateGame.pending, (state) => {
      state.status = 'loading';
    })
    builder.addCase(fetchCreateGame.rejected, (state) => {
      state.status = 'failed';
    })
    builder.addCase(fetchCreateGame.fulfilled, (state, action) => {
      state.players = action.payload.players;
      state.category = action.payload.category;
      state.playerTurn = action.payload.playerTurn;
    })
  }
})

export default gameSlice.reducer;
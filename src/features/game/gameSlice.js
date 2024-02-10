import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  players: [],
  category: '',
  playerTurn: null,
  
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {}
})

export default gameSlice.reducer;
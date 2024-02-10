import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createGame } from "../../utils/thunkGame";
import { rejects } from "assert";

const initialState = {
  players: [],
  category: '',
  playerTurn: null,
  
}

const fetchCreateGame = createAsyncThunk(
  'game/fetchCreateCards',
  async (config, thunkAPI) => {
    try {
      const response = await createGame(config);
      return response.data
    } catch (error) {
      throw thunkAPI.rejectWithValue(error)
    }
  }
)

const fetchGetByIdCards = createAsyncThunk(
  'game/fetchGetByIdCards',
  async (id, thunkAPI) => {
    try {
      const response = await getCards(id);
      return response.data
    } catch (error) {
      throw thunkAPI.rejectWithValue(error)
    }
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
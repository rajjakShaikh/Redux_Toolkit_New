// src/features/userSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    isLoading: false,
    isError: false,
  },
  reducers: {
    addUser: (state, action) => {
      const newUser = { id: state.users.length + 1, ...action.payload };
      state.users.push(newUser);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});
export const { addUser } = userSlice.actions;
export default userSlice.reducer;

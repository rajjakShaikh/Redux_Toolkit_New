import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data; // Return the data from the response
});

const initialState = {
  users: [],
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  // reducers: {
  //   addUser: (state, action) => {
  //     // Adds a new user to the list
  //     state.users.push(action.payload);
  //   },
  //   DeleteUser: (state, action) => {
  //     // Remove the user with the matching email or id
  //     state.users = state.users.filter((user) => user.email !== action.payload);
  //   },
  // },
  extraReducers: (builder) => {
    const handlePending = (state) => {
      state.loading = true; // Set loading to true
      state.error = null; // Reset any previous errors
    };
    const handleFulfilled = (state, action) => {
      state.loading = false; // Set loading to false
      state.users = action.payload; // Store the fetched users in the state
    };
    const handleRejected = (state, action) => {
      state.loading = false; // Set loading to false
      state.error = action.error.message; // Capture the error message
    };
    builder
      .addCase(fetchUsers.pending, handlePending)
      .addCase(fetchUsers.fulfilled, handleFulfilled)
      .addCase(fetchUsers.rejected, handleRejected);
  },
});

export const { addUser, DeleteUser } = userSlice.actions;
export default userSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//createuser action
export const createUser = createAsyncThunk("createUser", async (Payload) => {
  const response = await axios.post(
    `https://672f876a66e42ceaf15dfcb2.mockapi.io/crud`,
    Payload
  );
  return response.data;
});

//read user action
export const showUser = createAsyncThunk("userData", async () => {
  const response = await axios.get(
    `https://672f876a66e42ceaf15dfcb2.mockapi.io/crud`
  );
  return response.data;
});

//delete action
export const deleteUser = createAsyncThunk("deleteUSer", async (id) => {
  const response = await axios.delete(
    `https://672f876a66e42ceaf15dfcb2.mockapi.io/crud/${id}`
  );
  return response.data;
});

// update action
export const updateUser = createAsyncThunk(
  "updateUser",
  async ({ id, ...data }) => {
    const response = await axios.put(
      `https://672f876a66e42ceaf15dfcb2.mockapi.io/crud/${id}`,
      data
    );
    return response.data;
  }
);
export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todo: [],
    isLoading: false,
    isError: false,
    isSuccess: false,
  },
  reducers: {
    resetSuccess: (state) => {
      state.isSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.todo.push(action.payload);
        state.isSuccess = true;
      })
      .addCase(createUser.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      })

      .addCase(showUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(showUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.todo = action.payload;
      })
      .addCase(showUser.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })

      .addCase(deleteUser.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(deleteUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.todo = state.todo.filter(
          (userData) => userData.id !== action.payload.id
        );
      })

      .addCase(deleteUser.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })

      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(updateUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.todo = state.todo.map((userData) =>
          userData.id === action.payload.id ? action.payload : userData
        );
      })

      .addCase(updateUser.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});
export const { resetSuccess } = todoSlice.actions;
export default todoSlice.reducer;

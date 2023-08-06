import { createSlice } from "@reduxjs/toolkit";

interface AuthorizedState {
  isAuthorized: boolean;
}

const initialState: AuthorizedState = {
  isAuthorized: false,
};

export const authorizedSlice = createSlice({
  name: "authorized",
  initialState,
  reducers: {
    setIsAuthorized: (state) => {
      const token = localStorage.getItem("token");
      state.isAuthorized = !!token;
    },
    logout: (state) => {
      state.isAuthorized = false;
      localStorage.removeItem("token");
    },
  },
});

export const { setIsAuthorized, logout } = authorizedSlice.actions;

export default authorizedSlice.reducer;

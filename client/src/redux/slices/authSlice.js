import {createSlice} from "@reduxjs/toolkit";

const getUserInfoFromLocalStorage = () => {
  const userInfo = localStorage.getItem("userInfo");
  console.log("Raw userInfo from localStorage:", userInfo);
  if (userInfo) {
    try {
      return JSON.parse(userInfo);
    } catch (error) {
      console.error("Failed to parse userInfo from localStorage", error);
      return null;
    }
  }
  return null;
};

const initialState = {
  user: getUserInfoFromLocalStorage(),
  isSidebarOpen: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
    },
    logout: (state, action) => {
      state.user = null;
      localStorage.removeItem("userInfo");
    },
    setOpenSidebar: (state, action) => {
      state.isSidebarOpen = action.payload;
    },
  },
});

export const {setCredentials, logout, setOpenSidebar} = authSlice.actions;

export default authSlice.reducer;

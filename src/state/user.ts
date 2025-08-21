import { createSlice } from "@reduxjs/toolkit";
import { User } from "@/types/user";

// to be fetched
const userSample = {
  id: "user_123",
  name: "damilola akinleye",
  email: "shakiraakin@gmail.com",
  imageSrc: "",
};

const initialState: {
  value: User | null;
} = {
  value: userSample,
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.value = action.payload;
    },
    clearUser: (state) => {
      state.value = userSample;
    },
  },
});

export const { setUser, clearUser } = user.actions;

export default user.reducer;

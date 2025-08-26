import { createSlice } from "@reduxjs/toolkit";
import { User } from "@/types/user";

// to be fetched
const userSample = {
  "id": "000123",
  "name": "damilola akinleye",
  "email": "shakiraakin@gmail.com",
  "imageSrc": "",
  "accountDetails": {
    "bank": "Sterling Bank",
    "accountNumber": "8000000000",
    "accountName": "Ogedengbe Fruits Store"
  },
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

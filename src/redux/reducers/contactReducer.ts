import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  emailSubmitting: false,
  emailSubmitted: false,
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    emailSubmitting: (state, action: PayloadAction<boolean>) => {
      state.emailSubmitting = action.payload;
    },
    setEmailSubmitted: (state, action: PayloadAction<boolean>) => {
      state.emailSubmitted = action.payload;
    },
  },
});

export const {} = contactSlice.actions;
export default contactSlice.reducer;

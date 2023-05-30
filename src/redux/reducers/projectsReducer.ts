import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  selectedProject: null,
  modalIsOpen: false,
};

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setSelectedProject: (state, action: PayloadAction<null>) => {
      state.selectedProject = action.payload;
    },
    setModalIsOpen: (state, action: PayloadAction<boolean>) => {
      state.modalIsOpen = action.payload;
    },
  },
});

export const { setSelectedProject, setModalIsOpen } = projectsSlice.actions;
export default projectsSlice.reducer;

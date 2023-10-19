import { IProjectState } from 'src/types/interfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: IProjectState = {
  selectedProject: 0,
  modalIsOpen: false,
};

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setSelectedProject: (state, action: PayloadAction<number>) => {
      state.selectedProject = action.payload;
    },
    setModalIsOpen: (state, action: PayloadAction<boolean>) => {
      state.modalIsOpen = action.payload;
    },
  },
});

export const { setSelectedProject, setModalIsOpen } = projectsSlice.actions;
export default projectsSlice.reducer;

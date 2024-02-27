import { createSlice } from '@reduxjs/toolkit';

const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    isMenuOpen: false,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },

  },
});

export const { toggleMenu } = menuSlice.actions;
export const selectIsMenuOpen = (state) => state.menu.isMenuOpen;
export default menuSlice.reducer;
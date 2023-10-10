import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = {
  languages: ["tag"], 
  selecteLanguage: {
    cathecism: "eng", 
    global: "tag", 
    prayer: "tag"
  },
  page: {
    title: 'Page'
  }
};
const appSlice = createSlice({
  name: 'app',
  initialState : initialStateValue,
  reducers: {
    setLanguages: (state: any, action) => {
      state.languages = action.payload;
    },
    setSelectedLanguage: (state: any, action) => {
      state.selecteLanguage.prayer = action.payload;
    },
    resetApp: (state: any, action) => {
      state = initialStateValue;
    },
  },
});

export const { setLanguages, setSelectedLanguage, resetApp } = appSlice.actions;
export default appSlice.reducer;
export const SET_LANGUAGES = "SET_LANGUAGES";

export const setLanguages = languages => ({
  type: SET_LANGUAGES,
  payload: {
    languages
  }
});
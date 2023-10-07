import { SET_LANGUAGES } from "./actions";

const initialState = {
  languages: [],
  selecteLanguage: {prayer: 'tag', cathecism: 'eng', global: 'tag'},
  title: 'Page'
};

const baseReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const { languages } = action.payload
      return {
        ...state,
        languages: [ ...languages ]
      };
    }
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  // Define the structure of your state tree here
  baseReducer: baseReducer,
});

export default rootReducer;
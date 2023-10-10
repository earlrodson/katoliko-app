import { useSelector } from "react-redux";

// You can also access specific parts of the state
export const selectStateLanguages = useSelector(
  (state : any) => state.app.languages
);
export const selectStateCurrentCathecismLanguage = useSelector(
  (state : any) => state.app.selecteLanguage.cathecism
);
export const selectStateCurrentGlobalLanguage = useSelector(
  (state : any) => state.app.selecteLanguage.global
);
export const selectStateCurrentPrayerLanguage = useSelector(
  (state : any) => state.app.selecteLanguage.prayer
);

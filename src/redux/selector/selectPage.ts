import { useSelector } from "react-redux";

// You can also access specific parts of the state
export const selectStatePage = useSelector(
  (state) => state.app.page
);
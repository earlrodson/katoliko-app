import { useSelector } from "react-redux";

// You can also access specific parts of the state
export const selectStateApp = useSelector(
  (state: any) => state.app
);
import React from "react";
import { Provider } from "react-redux";
// import { Particless } from "./components/Particles/Particles";
import { AppRouter } from "./router/AppRouter";
import { store } from "./store/store";

export const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
      {/* <Particless /> */}
    </Provider>
  );
};

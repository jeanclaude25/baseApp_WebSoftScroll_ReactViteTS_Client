import { proxy } from "valtio";


export const appState = proxy({
    introAlreadySee: false,
  });

export const appPage = proxy({
    actualPage: 0,
    actualPageName: "intro"
  });
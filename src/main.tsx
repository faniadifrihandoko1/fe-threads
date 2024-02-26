import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../src/theme/breakpoints.ts";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./store/rootRecuder.ts";
// import { store } from "./features/redux/store.ts";

const queryClient = new QueryClient();
const store = configureStore({
  reducer: rootReducer,
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <ChakraProvider theme={theme}>
            <App />
          </ChakraProvider>
        </QueryClientProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "./providers/ThemeProvider.tsx";
import ValidateToken from "./providers/ValidateToken.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <ValidateToken>
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
        </ValidateToken>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

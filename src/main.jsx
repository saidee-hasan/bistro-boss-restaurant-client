import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Router.jsx";
import { Helmet, HelmetProvider } from "react-helmet-async";
import AuthProvider, { AuthContext } from "./Provider/AuthProvider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <HelmetProvider>
        {/* This div centers the content and limits the width on larger screens */}
        <div className="max-w-screen-xl mx-auto   ">
          {/* Providing the router for the app */}
          <RouterProvider router={router} />
        </div>
      </HelmetProvider>
    </AuthProvider></QueryClientProvider>
  </StrictMode>
);

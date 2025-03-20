import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import HistoryPage from "./pages/HistoryPage";
import Account from "./pages/Account";
import LoginPage from "./pages/LoginPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/home/:month" element={<HomePage />} />
      <Route path="/history" element={<HistoryPage />} />
      <Route path="/account" element={<Account />} />
      <Route path="/login" element={<LoginPage />} />
    </>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;

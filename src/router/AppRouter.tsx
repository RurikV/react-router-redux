import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { Page404 } from "../pages/Page404";
import { RouteNames } from "./router";
import { RegisterPage } from "../pages/RegisterPage";
import { LoginPage } from "../pages/LoginPage";


export const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path={`${RouteNames.LOGIN}`} element={<LoginPage />} />
      <Route path={`${RouteNames.REGISTER}`} element={<RegisterPage />} />
      <Route path={`${RouteNames.HOME_PAGE}`} element={<HomePage />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

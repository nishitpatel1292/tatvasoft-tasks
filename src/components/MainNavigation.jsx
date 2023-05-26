import React from "react";
import { Route, Routes } from "react-router-dom";

import { RoutePaths } from "../utils/enum";

import Login from "../pages/Login";
import Register from "../pages/register";


const AppRoutes = () => {


  return (
    <Routes>
      <Route exact path={RoutePaths.Login} element={<Login />} />
      <Route exact path={RoutePaths.Register} element={<Register />} />
    </Routes>
  );
};

export default AppRoutes;

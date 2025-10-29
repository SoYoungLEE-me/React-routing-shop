import React from "react";
import ProductDetail from "../page/ProductDetail";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ authenticate, children }) => {
  return authenticate ? children : <Navigate to="/login" />;
};

export default PrivateRoute;

import React from "react";
import { RouteObject, RouteProps } from "react-router-dom";
import Article from "../pages/Article";
import Articles from "../pages/Articles";
import CreateArticle from "../pages/CreateArticle";
import Login from "../pages/Login";
import MyArticles from "../pages/MyArticles";

export const publicRoutes: RouteObject[] = [
  {
    path: "/articles",
    element: <Articles />,
  },
  {
    path: "/article/:id",
    element: <Article />,
  },
  {
    path: "/login",
    element: <Login />,
  },
];

export const authorizedRoutes: RouteObject[] = [
  {
    path: "/articles",
    element: <Articles />,
  },
  {
    path: "/article/:id",
    element: <Article />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/myarticles",
    element: <MyArticles />,
  },
  {
    path: "/create",
    element: <CreateArticle />,
  },
];

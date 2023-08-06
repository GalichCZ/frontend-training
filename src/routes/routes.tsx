import { RouteObject } from "react-router-dom";
import Article from "../pages/Article";
import Articles from "../pages/Articles";
import CreateArticle from "../pages/CreateArticle";
import EditArticle from "../pages/EditArticle";
import Login from "../pages/Login";
import MyArticles from "../pages/MyArticles";
import NotFoundPage from "../pages/NotFoundPage";

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
  {
    path: "*",
    element: <NotFoundPage />,
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
  { path: "/edit/:id", element: <EditArticle /> },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];

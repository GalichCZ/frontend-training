import { useRoutes } from "react-router-dom";
import "./App.css";
import { authorizedRoutes, publicRoutes } from "./routes/routes";
import Header from "./UI/Header";

function App() {
  const publicAppRoutes = useRoutes(publicRoutes);
  const authorizedAppRoutes = useRoutes(authorizedRoutes);

  const isAuthorized = true;

  return (
    <>
      <Header />
      <>{isAuthorized ? authorizedAppRoutes : publicAppRoutes}</>
    </>
  );
}

export default App;

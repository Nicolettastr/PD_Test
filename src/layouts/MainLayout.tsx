import { Outlet } from "react-router-dom";
import { Header } from "../components/shared/Header";

export const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

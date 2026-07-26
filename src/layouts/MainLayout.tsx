import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/shared/Header";

export interface NavigationContext {
  startNavigation: () => void;
  stopNavigation: () => void;
}

export const MainLayout = () => {
  const [isNavigating, setIsNavigating] = useState(false);

  const startNavigation = () => setIsNavigating(true);
  const stopNavigation = () => setIsNavigating(false);

  return (
    <>
      <Header isNavigating={isNavigating} startNavigation={startNavigation} />
      <Outlet context={{ startNavigation, stopNavigation }} />
    </>
  );
};

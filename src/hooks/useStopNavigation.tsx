import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import type { NavigationContext } from "../layouts/MainLayout";

export const useStopNavigation = (isLoading: boolean) => {
  const { stopNavigation } = useOutletContext<NavigationContext>();

  useEffect(() => {
    if (!isLoading) {
      stopNavigation();
    }
  }, [isLoading, stopNavigation]);
};

import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "../../../router/routes";
import styles from "./Header.module.css";

interface HeaderProps {
  isNavigating: boolean;
  startNavigation: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  isNavigating,
  startNavigation,
}) => {
  const location = useLocation();

  const handleLogoClick = () => {
    if (location.pathname !== ROUTES.HOME) {
      startNavigation();
    }
  };

  return (
    <header onClick={handleLogoClick} className={styles.header}>
      <Link to={ROUTES.HOME} className={styles.logo}>
        Podcaster
      </Link>
      {isNavigating && <div className={styles.loadingIndicator} />}
    </header>
  );
};

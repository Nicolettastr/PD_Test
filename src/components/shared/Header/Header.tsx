import { Link } from "react-router-dom";
import { ROUTES } from "../../../router/routes";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link to={ROUTES.HOME} className={styles.logo}>
        Podcaster
      </Link>
    </header>
  );
};

import styles from "./Loader.module.css";

interface LoaderProps {
  message?: string;
}

export const Loader = ({ message = "Loading..." }: LoaderProps) => (
  <div className={styles.container}>
    <div className={styles.spinner} />
    <p>{message}</p>
  </div>
);

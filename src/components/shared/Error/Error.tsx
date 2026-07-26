import styles from "./Error.module.css";

interface ErrorProps {
  title?: string;
  message?: string;
}

export const Error = ({
  title = "Oops!",
  message = "Something went wrong.",
}: ErrorProps) => (
  <div className={styles.container}>
    <h2 className={styles.title}>{title}</h2>
    <p className={styles.message}>{message}</p>
  </div>
);

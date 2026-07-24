import styles from "./EpisodesTotal.module.css";

interface EpisodesTotalProps {
  total: number | undefined;
}

export const EpisodesTotal: React.FC<EpisodesTotalProps> = ({ total }) => {
  return (
    <div className={styles.totalContainer}>
      <h2>Episodes: {total ?? 0}</h2>
    </div>
  );
};

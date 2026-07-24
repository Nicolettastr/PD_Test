import type { PodcastDetail } from "../../model/podcastDetail.model";
import styles from "./PodcastInfo.module.css";

interface PodcastInfoProps {
  podcast: PodcastDetail | undefined;
}

export const PodcastInfo: React.FC<PodcastInfoProps> = ({ podcast }) => {
  if (!podcast) return <p>Something went wrong...</p>;

  return (
    <div className={styles.container}>
      <img src={podcast.image} alt={podcast.title} className={styles.image} />

      <hr className={styles.divider} />

      <div className={styles.info}>
        <h2 className={styles.title}>{podcast.title}</h2>
        <p className={styles.author}>by {podcast.author}</p>
      </div>

      <hr className={styles.divider} />

      <div className={styles.description}>
        <h3>Description:</h3>
        <p>{podcast.description}</p>
      </div>
    </div>
  );
};

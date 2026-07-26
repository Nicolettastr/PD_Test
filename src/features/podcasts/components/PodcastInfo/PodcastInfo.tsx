import { Link, useOutletContext } from "react-router-dom";
import type { NavigationContext } from "../../../../layouts/MainLayout";
import type { PodcastDetail } from "../../model/podcastDetail.model";
import styles from "./PodcastInfo.module.css";

interface PodcastInfoProps {
  podcast: PodcastDetail | undefined;
}

export const PodcastInfo: React.FC<PodcastInfoProps> = ({ podcast }) => {
  const { startNavigation } = useOutletContext<NavigationContext>();

  if (!podcast) return <p>Something went wrong...</p>;

  return (
    <div className={styles.container}>
      <Link onClick={startNavigation} to={`/podcast/${podcast.id}`}>
        <img src={podcast.image} alt={podcast.title} className={styles.image} />
      </Link>
      <hr className={styles.divider} />

      <Link
        onClick={startNavigation}
        to={`/podcast/${podcast.id}`}
        className={styles.info}
      >
        <h2 className={styles.title}>{podcast.title}</h2>
        <p className={styles.author}>by {podcast.author}</p>
      </Link>

      <hr className={styles.divider} />

      <div className={styles.description}>
        <h3>Description:</h3>
        <p>{podcast.description}</p>
      </div>
    </div>
  );
};

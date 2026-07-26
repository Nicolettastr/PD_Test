import { Link, useOutletContext } from "react-router-dom";
import type { NavigationContext } from "../../../../layouts/MainLayout";
import { buildPodcastDetailRoute } from "../../../../router/routes";
import type { Podcast } from "../../model/podcast.model";
import styles from "./PodcastCard.module.css";

interface PodcastCardProps {
  podcast: Podcast;
}

export const PodcastCard: React.FC<PodcastCardProps> = ({ podcast }) => {
  const { startNavigation } = useOutletContext<NavigationContext>();

  return (
    <Link
      onClick={startNavigation}
      to={buildPodcastDetailRoute(podcast.id)}
      className={styles.link}
    >
      <article className={styles.card}>
        <img src={podcast.image} alt={podcast.name} className={styles.image} />
        <div className={styles.content}>
          <h2 className={styles.title}>{podcast.name}</h2>
          <p className={styles.author}>Author: {podcast.artist}</p>
        </div>
      </article>
    </Link>
  );
};

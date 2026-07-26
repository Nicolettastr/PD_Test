import type { Episode } from "../../model/episode.model";
import styles from "./EpisodeCard.module.css";

interface EpisodeCardProps {
  episode: Episode | undefined;
}

export const EpisodeCard = ({ episode }: EpisodeCardProps) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{episode?.title}</h2>

      <div
        className={styles.description}
        dangerouslySetInnerHTML={{ __html: episode?.description ?? "" }}
      />

      <audio className={styles.player} controls>
        <source src={episode?.audioUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

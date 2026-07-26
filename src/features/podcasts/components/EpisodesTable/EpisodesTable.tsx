import { Link, useOutletContext } from "react-router-dom";
import type { NavigationContext } from "../../../../layouts/MainLayout";
import { formatDate } from "../../../../utils/formatDate";
import { formatDuration } from "../../../../utils/formatDuration";
import type { Episode } from "../../model/episode.model";
import styles from "./EpisodesTable.module.css";

interface EpisodesTableProps {
  episodes: Episode[] | undefined;
  podcastId: string | undefined;
}

export const EpisodesTable: React.FC<EpisodesTableProps> = ({
  episodes,
  podcastId,
}) => {
  const { startNavigation } = useOutletContext<NavigationContext>();
  const episodesData = episodes?.map((episode) => (
    <tr key={episode.id}>
      <td>
        <Link
          to={`/podcast/${podcastId}/episode/${episode.id}`}
          onClick={startNavigation}
          className={styles.title}
        >
          {episode.title}
        </Link>
      </td>
      <td>{formatDate(episode.releaseDate)}</td>
      <td>{formatDuration(episode.duration)}</td>
    </tr>
  ));

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Title</th>
          <th>Date</th>
          <th>Duration</th>
        </tr>
      </thead>

      <tbody>{episodesData}</tbody>
    </table>
  );
};

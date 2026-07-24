import { useParams } from "react-router-dom";
import { EpisodesTable } from "../../features/podcasts/components/EpisodesTable/EpisodesTable";
import { EpisodesTotal } from "../../features/podcasts/components/EpisodesTotal/EpisodesTotal";
import { PodcastInfo } from "../../features/podcasts/components/PodcastInfo/PodcastInfo";
import { usePodcastDetail } from "../../features/podcasts/hooks/usePodcastDetail";

import styles from "./PodcastDetail.module.css";

export const PodcastDetail = () => {
  const { podcastId } = useParams();

  const { data, isLoading, isError } = usePodcastDetail(podcastId);

  if (isLoading) return <p>...Loading</p>;
  if (isError) return <p>Something went wrong</p>;

  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <PodcastInfo podcast={data?.podcast} />
      </aside>

      <section className={styles.content}>
        <div className={styles.totalContainer}>
          <EpisodesTotal total={data?.episodes?.length} />
        </div>
        <div className={styles.tableContainer}>
          <EpisodesTable
            episodes={data?.episodes}
            podcastId={data?.podcast.id}
          />
        </div>
      </section>
    </div>
  );
};

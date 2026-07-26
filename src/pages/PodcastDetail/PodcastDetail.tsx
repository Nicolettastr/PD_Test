import { useParams } from "react-router-dom";
import { EpisodesTable } from "../../features/podcasts/components/EpisodesTable/EpisodesTable";
import { EpisodesTotal } from "../../features/podcasts/components/EpisodesTotal/EpisodesTotal";
import { PodcastInfo } from "../../features/podcasts/components/PodcastInfo/PodcastInfo";
import { usePodcastDetail } from "../../features/podcasts/hooks/usePodcastDetail";

import { Error } from "../../components/shared/Error/Error";
import { Loader } from "../../components/shared/Loader/Loader";
import { useStopNavigation } from "../../hooks/useStopNavigation";
import styles from "./PodcastDetail.module.css";

export const PodcastDetail = () => {
  const { podcastId } = useParams();

  const { data, isLoading, isError } = usePodcastDetail(podcastId);

  useStopNavigation(isLoading);

  if (isLoading) return <Loader message="Loading podcast details..." />;

  if (isError) {
    return (
      <Error
        title="Unable to load podcast details"
        message="Please try again later."
      />
    );
  }

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

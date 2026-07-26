import { useParams } from "react-router-dom";
import { Error } from "../../components/shared/Error/Error";
import { Loader } from "../../components/shared/Loader/Loader";
import { EpisodeCard } from "../../features/podcasts/components/EpisodeCard/EpisodeCard";
import { PodcastInfo } from "../../features/podcasts/components/PodcastInfo/PodcastInfo";
import { usePodcastDetail } from "../../features/podcasts/hooks/usePodcastDetail";
import { useStopNavigation } from "../../hooks/useStopNavigation";
import styles from "./EpisodeDetail.module.css";

export const EpisodeDetail = () => {
  const { podcastId, episodeId } = useParams();

  const { data, isLoading, isError } = usePodcastDetail(podcastId ?? "");

  const episode = data?.episodes.find((episode) => episode.id === episodeId);

  useStopNavigation(isLoading);

  if (isLoading) return <Loader message="Loading podcast episode..." />;

  if (isError) {
    return (
      <Error
        title="Unable to load podcast episode"
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
        <EpisodeCard episode={episode} />
      </section>
    </div>
  );
};

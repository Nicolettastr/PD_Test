import { useParams } from "react-router-dom";
import { EpisodeCard } from "../../features/podcasts/components/EpisodeCard/EpisodeCard";
import { PodcastInfo } from "../../features/podcasts/components/PodcastInfo/PodcastInfo";
import { usePodcastDetail } from "../../features/podcasts/hooks/usePodcastDetail";
import styles from "./EpisodeDetail.module.css";

export const EpisodeDetail = () => {
  const { podcastId, episodeId } = useParams();

  const { data, isLoading, isError } = usePodcastDetail(podcastId ?? "");

  const episode = data?.episodes.find((episode) => episode.id === episodeId);

  if (isLoading) return <p>...Loading</p>;
  if (isError) return <p>Something went wrong</p>;

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

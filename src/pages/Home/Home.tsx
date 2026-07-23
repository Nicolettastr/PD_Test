import { useMemo, useState } from "react";
import { Searchbar } from "../../components/shared/Searchbar";
import { PodcastCard } from "../../features/podcasts/components/PodcastCard/PodcastCard";
import { useTopPodcasts } from "../../features/podcasts/hooks/useTopPodcasts";
import styles from "../Home/Home.module.css";

export const Home = () => {
  const { data, isLoading, isError } = useTopPodcasts();
  const [search, setSearch] = useState<string>("");

  const filteredPodcast = useMemo(() => {
    const query = search.trim().toLowerCase();

    return (
      data?.filter(
        (podcast) =>
          podcast.name.toLowerCase().includes(query) ||
          podcast.artist.toLowerCase().includes(query),
      ) ?? []
    );
  }, [data, search]);

  const podcastItems = filteredPodcast?.map((podcast) => (
    <li key={podcast.id}>
      <PodcastCard podcast={podcast} />
    </li>
  ));

  if (isLoading) return <p>...Loading</p>;
  if (isError) return <p>Something went wrong</p>;

  return (
    <main>
      <div className={styles.searchbar}>
        <span className={styles.counter}>{filteredPodcast?.length}</span>
        <Searchbar
          onChange={setSearch}
          value={search}
          placeholder="Filter podcasts..."
        />
      </div>
      <section className={styles.home} aria-label="Top podcasts">
        <ul className={styles.list}>{podcastItems}</ul>
      </section>
    </main>
  );
};

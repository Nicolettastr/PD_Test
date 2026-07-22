import { useEffect } from "react";
import { getTopPodcasts } from "../../features/podcasts/services/podcast.service";

export const Home = () => {
  useEffect(() => {
    getTopPodcasts();
  }, []);

  return <div>Home</div>;
};

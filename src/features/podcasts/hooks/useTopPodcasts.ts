import { useQuery } from "@tanstack/react-query";
import type { Podcast } from "../model/podcast.model";
import { getTopPodcasts } from "../services/podcast.service";

export const useTopPodcasts = () => {
  return useQuery<Podcast[]>({
    queryKey: ["top-podcast-list"],
    queryFn: getTopPodcasts,
  });
};

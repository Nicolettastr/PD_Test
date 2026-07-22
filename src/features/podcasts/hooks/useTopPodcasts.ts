import { useQuery } from "@tanstack/react-query";
import { mapPodcasts } from "../mappers/podcast.mapper";
import { getTopPodcasts } from "../services/podcast.service";

export const useTopPodcasts = () => {
  return useQuery({
    queryKey: ["top-podcast-list"],
    queryFn: async () => {
      const data = await getTopPodcasts();

      return mapPodcasts(data.feed.entry);
    },
  });
};

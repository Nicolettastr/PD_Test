import { useQuery } from "@tanstack/react-query";
import { getPodcastDetail } from "../services/podcastDetail.service";

export const usePodcastDetail = (podcastId: string | undefined) => {
  return useQuery({
    queryKey: ["podcast-detail", podcastId],
    queryFn: () => getPodcastDetail(podcastId),
    enabled: !!podcastId,
  });
};

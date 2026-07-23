import { useQuery } from "@tanstack/react-query";
import { mapPodcastDetailResponse } from "../mappers/podcastDetailsResponse.mapper";
import { getPodcastDetail } from "../services/podcastDetail.service";

export const usePodcastDetail = (podcastId: string) => {
  return useQuery({
    queryKey: ["podcast-detail", podcastId],
    queryFn: async () => {
      const data = await getPodcastDetail(podcastId);
      return mapPodcastDetailResponse(data);
    },
  });
};

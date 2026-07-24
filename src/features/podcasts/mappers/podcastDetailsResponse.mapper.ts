import type { PodcastDetailResponseDTO } from "../dto/podcastDetail.dto";
import type { PodcastDetailData } from "../model/podcastDetailData.model";
import { mapEpisodes } from "./episode.mapper";
import { mapPodcastDetail } from "./podcastDetail.mapper";

export const mapPodcastDetailResponse = (
  dto: PodcastDetailResponseDTO,
): PodcastDetailData => {
  return {
    podcast: mapPodcastDetail(dto),
    episodes: mapEpisodes(dto),
  };
};

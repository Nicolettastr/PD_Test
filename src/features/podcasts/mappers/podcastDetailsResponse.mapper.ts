import type {
  EpisodeDTO,
  PodcastDetailResponseDTO,
  PodcastInfoDTO,
} from "../dto/podcastDetail.dto";
import type { Episode } from "../model/episode.model";
import type { PodcastDetail } from "../model/podcastDetail.model";
import { mapEpisodes } from "./episode.mapper";
import { mapPodcastDetail } from "./podcastDetail.mapper";

interface PodcastDetailData {
  podcast: PodcastDetail;
  episodes: Episode[];
}

export const mapPodcastDetailResponse = (
  dto: PodcastDetailResponseDTO,
): PodcastDetailData => {
  const [podcastDto, ...episodeDtos] = dto.results;

  return {
    podcast: mapPodcastDetail(podcastDto as PodcastInfoDTO),
    episodes: mapEpisodes(episodeDtos as EpisodeDTO[]),
  };
};

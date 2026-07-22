import type { PodcastDTO } from "../dto/podcast.dto";
import type { Podcast } from "../model/podcast.model";

export const mapPodcast = (dto: PodcastDTO): Podcast => ({
  id: dto.id.attributes["im:id"],
  name: dto["im:name"].label,
  image: dto["im:image"][2].label,
  artist: dto["im:artist"].label,
  category: dto.category.attributes.label,
  summary: dto.summary.label,
  releaseDate: dto["im:releaseDate"].label,
});

export const mapPodcasts = (dtos: PodcastDTO[]): Podcast[] => {
  return dtos.map(mapPodcast);
};

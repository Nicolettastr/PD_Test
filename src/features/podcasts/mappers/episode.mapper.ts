import type {
  EpisodeDTO,
  PodcastDetailResponseDTO,
} from "../dto/podcastDetail.dto";
import type { Episode } from "../model/episode.model";

const mapEpisode = (dto: EpisodeDTO): Episode => ({
  id: dto.trackId.toString(),
  title: dto.trackName,
  description: dto.description,
  releaseDate: dto.releaseDate,
  duration: dto.trackTimeMillis,
  audioUrl: dto.episodeUrl,
});

export const mapEpisodes = (dto: PodcastDetailResponseDTO): Episode[] => {
  const episodes = dto.results.filter(
    (item): item is EpisodeDTO => item.kind === "podcast-episode",
  );

  return episodes.map(mapEpisode);
};

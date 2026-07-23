import type { EpisodeDTO } from "../dto/podcastDetail.dto";
import type { Episode } from "../model/episode.model";

export const mapEpisode = (dto: EpisodeDTO): Episode => ({
  id: dto.trackId.toString(),
  title: dto.trackName,
  description: dto.description,
  releaseDate: dto.releaseDate,
  duration: dto.trackTimeMillis,
  audioUrl: dto.episodeUrl,
});

export const mapEpisodes = (episodes: EpisodeDTO[]): Episode[] =>
  episodes.map(mapEpisode);

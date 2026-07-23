export interface PodcastDetailResponseDTO {
  results: (PodcastInfoDTO | EpisodeDTO)[];
}

export interface PodcastInfoDTO {
  collectionId: number;
  collectionName: string;
  artistName: string;
  artworkUrl600: string;
  artworkUrl100: string;
}

export interface EpisodeDTO {
  trackId: number;
  trackName: string;
  releaseDate: string;
  trackTimeMillis: number;
  description: string;
  episodeUrl: string;
}

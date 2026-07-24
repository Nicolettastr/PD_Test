import type {
  PodcastDetailResponseDTO,
  PodcastInfoDTO,
} from "../dto/podcastDetail.dto";
import type { PodcastDetail } from "../model/podcastDetail.model";

export const mapPodcastDetail = (
  dto: PodcastDetailResponseDTO,
): PodcastDetail => {
  const podcast = dto.results.find(
    (item): item is PodcastInfoDTO => item.kind === "podcast",
  );

  if (!podcast) {
    throw new Error("Podcast not found");
  }

  return {
    id: podcast.collectionId.toString(),
    title: podcast.collectionName,
    author: podcast.artistName,
    image: podcast.artworkUrl600 || podcast.artworkUrl100,
    description: `${podcast.collectionName} is a podcast by ${
      podcast.artistName
    } focused on ${podcast.primaryGenreName.toLowerCase()}, featuring ${
      podcast.trackCount
    } episodes.`,
  };
};

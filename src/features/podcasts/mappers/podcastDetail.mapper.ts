import type {
  PodcastDetailResponseDTO,
  PodcastInfoDTO,
} from "../dto/podcastDetail.dto";
import type { PodcastDetail } from "../model/podcastDetail.model";

export const mapPodcastDetail = (
  dto: PodcastDetailResponseDTO,
): PodcastDetail => {
  const podcast = dto.results.find(
    (item): item is PodcastInfoDTO => "collectionId" in item,
  );

  if (!podcast) {
    throw new Error("Podcast not found");
  }

  return {
    id: podcast.collectionId.toString(),
    title: podcast.collectionName,
    author: podcast.artistName,
    image: podcast.artworkUrl600 || podcast.artworkUrl100,
    description: "",
  };
};

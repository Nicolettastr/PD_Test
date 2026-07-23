import type { PodcastInfoDTO } from "../dto/podcastDetail.dto";
import type { PodcastDetail } from "../model/podcastDetail.model";

export const mapPodcastDetail = (dto: PodcastInfoDTO): PodcastDetail => ({
  id: dto.collectionId.toString(),
  title: dto.collectionName,
  author: dto.artistName,
  image: dto.artworkUrl600 || dto.artworkUrl100,
  description: "",
});

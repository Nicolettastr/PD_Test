import type { Episode } from "./episode.model";
import type { PodcastDetail } from "./podcastDetail.model";

export interface PodcastDetailData {
  podcast: PodcastDetail;
  episodes: Episode[];
}

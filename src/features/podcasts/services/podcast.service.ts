import axiosClient from "../../../lib/axios";
import { PODCAST_API } from "../constants/podcastApi";
import type { TopPodcastsResponseDTO } from "../dto/podcast.dto";

export const getTopPodcasts = async () => {
  const { data } = await axiosClient.get<TopPodcastsResponseDTO>(
    PODCAST_API.TOP_PODCASTS,
  );
  return data;
};

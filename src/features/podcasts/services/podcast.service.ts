import { CACHE_KEYS } from "../../../constants/cache";
import axiosClient from "../../../lib/axios";
import { getCachedData, setCachedData } from "../../../lib/cache";
import { PODCAST_API } from "../constants/podcastApi";
import type { TopPodcastsResponseDTO } from "../dto/podcast.dto";
import { mapPodcasts } from "../mappers/podcast.mapper";
import type { Podcast } from "../model/podcast.model";

export const getTopPodcasts = async () => {
  const cachedData = getCachedData<Podcast[]>(CACHE_KEYS.TOP_PODCASTS);

  if (cachedData) return cachedData;

  const { data } = await axiosClient.get<TopPodcastsResponseDTO>(
    PODCAST_API.TOP_PODCASTS,
  );

  const podcasts = mapPodcasts(data.feed.entry);

  setCachedData(CACHE_KEYS.TOP_PODCASTS, podcasts);

  return podcasts;
};

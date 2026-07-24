import { PODCAST_DETAIL_PARAMS } from "../../../constants/api";
import { CACHE_KEYS } from "../../../constants/cache";
import axiosClient from "../../../lib/axios";
import { getCachedData, setCachedData } from "../../../lib/cache";
import { PODCAST_API } from "../constants/podcastApi";
import type { PodcastDetailResponseDTO } from "../dto/podcastDetail.dto";
import { mapPodcastDetail } from "../mappers/podcastDetail.mapper";
import type { PodcastDetail } from "../model/podcastDetail.model";

export const getPodcastDetail = async (podcastId: string) => {
  const cacheKey = CACHE_KEYS.PODCAST_DETAIL(podcastId);

  const cachedData = getCachedData<PodcastDetail>(cacheKey);

  if (cachedData) {
    return cachedData;
  }

  const { data } = await axiosClient.get<PodcastDetailResponseDTO>(
    PODCAST_API.PODCAST_DETAIL,
    {
      params: {
        id: podcastId,
        ...PODCAST_DETAIL_PARAMS,
      },
    },
  );

  const podcastDetail = mapPodcastDetail(data);

  setCachedData(cacheKey, podcastDetail);

  return podcastDetail;
};

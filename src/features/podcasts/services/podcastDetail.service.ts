import { PODCAST_DETAIL_PARAMS } from "../../../constants/api";
import { CACHE_KEYS } from "../../../constants/cache";
import axiosClient from "../../../lib/axios";
import { getCachedData, setCachedData } from "../../../lib/cache";
import { PODCAST_API } from "../constants/podcastApi";
import type { PodcastDetailResponseDTO } from "../dto/podcastDetail.dto";
import { mapPodcastDetailResponse } from "../mappers/podcastDetailsResponse.mapper";
import type { PodcastDetailData } from "../model/podcastDetailData.model";

export const getPodcastDetail = async (podcastId: string | undefined) => {
  if (!podcastId) return;

  const cacheKey = CACHE_KEYS.PODCAST_DETAIL(podcastId);

  const cachedData = getCachedData<PodcastDetailData>(cacheKey);

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

  const podcastDetail = mapPodcastDetailResponse(data);

  setCachedData(cacheKey, podcastDetail);

  return podcastDetail;
};

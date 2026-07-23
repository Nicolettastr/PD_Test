import { PODCAST_DETAIL_PARAMS } from "../../../constants/api";
import axiosClient from "../../../lib/axios";
import { PODCAST_API } from "../constants/podcastApi";
import type { PodcastDetailResponseDTO } from "../dto/podcastDetail.dto";

export const getPodcastDetail = async (podcastId: string) => {
  const { data } = await axiosClient.get<PodcastDetailResponseDTO>(
    PODCAST_API.PODCAST_DETAIL,
    {
      params: {
        id: podcastId,
        ...PODCAST_DETAIL_PARAMS,
      },
    },
  );
  return data;
};

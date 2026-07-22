import axiosClient from "../../../lib/axios";
import { PODCAST_API } from "../constants/podcastApi";

export const getTopPodcasts = async () => {
  const { data } = await axiosClient.get(PODCAST_API.TOP_PODCASTS);

  return data;
};

export const ROUTES = {
  HOME: "/",
  PODCAST_DETAIL: "/podcast/:podcastId",
  EPISODE_DETAIL: "/podcast/:podcastId/episode/:episodeId",
} as const;

export const buildPodcastDetailRoute = (podcastId: string) =>
  `/podcast/${podcastId}`;

export const buildEpisodeDetailRoute = (podcastId: string, episodeId: string) =>
  `/podcast/${podcastId}/episode/${episodeId}`;

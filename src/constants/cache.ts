export const ONE_DAY_MS = 24 * 60 * 60 * 1000;

export const CACHE_KEYS = {
  TOP_PODCASTS: "top-podcasts",
  PODCAST_DETAIL: (podcastId: string) => `podcast-detail-${podcastId}`,
} as const;

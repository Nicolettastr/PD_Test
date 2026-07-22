export interface PodcastDTO {
  "im:name": {
    label: string;
  };

  "im:image": PodcastImageDTO[];

  summary: {
    label: string;
  };

  "im:price": {
    label: string;
    attributes: {
      amount: string;
      currency: string;
    };
  };

  "im:contentType": {
    attributes: {
      term: string;
      label: string;
    };
  };

  rights: {
    label: string;
  };

  title: {
    label: string;
  };

  link: {
    attributes: {
      rel: string;
      type: string;
      href: string;
    };
  };

  id: {
    attributes: {
      "im:id": string;
    };
  };

  "im:artist": {
    label: string;
  };

  category: {
    attributes: {
      "im:id": string;
      term: string;
      scheme: string;
      label: string;
    };
  };

  "im:releaseDate": {
    label: string;
    attributes: {
      label: string;
    };
  };
}

export interface PodcastImageDTO {
  label: string;
  attributes: {
    height: string;
  };
}

export interface TopPodcastsResponseDTO {
  feed: {
    entry: PodcastDTO[];
  };
}

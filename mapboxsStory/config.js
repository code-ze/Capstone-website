var config = {
  style: "mapbox://styles/aj-code/cleqekz8s000w01o5ggdmcp3j",
  accessToken:
    "pk.eyJ1IjoiYWotY29kZSIsImEiOiJja25uc3JuazQxMWdyMm9tb3N3NXJheHo4In0.6hc8FrlG1IXnQIpFYHGILQ",
  showMarkers: true,
  theme: "light",
  title: "",
  subtitle: "",
  byline: "",
  footer: "",
  chapters: [
    {
      id: "St. Mary of the Hill",
      alignment: "right",
      title: "St. Mary of the Hill",
      image: "",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      location: {
        center: [-82.18056, 39.46192],
        zoom: 15.83,
        pitch: 0.0,
        bearing: 0.0,
      },
      onChapterEnter: [
        {
          layer: "phl-city-limits",
          opacity: 0.45,
        },
      ],
      onChapterExit: [
        {
          layer: "phl-city-limits",
          opacity: 0,
        },
      ],
    },
    {
      id: "Fork Union Baptist Church",
      alignment: "right",
      title: "Fork Union Baptist Church",
      image: "",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      location: {
        center: [-82.16319, 39.51342],
        zoom: 13.62,
        pitch: 55.5,
        bearing: -7.2,
      },
      onChapterEnter: [
        {
          layer: "phl-bike-network",
          opacity: 1,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "Mount Zion Cemetery in Nelsonville, Ohio",
      alignment: "right",
      title: "Mount Zion Church",
      image: "",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      location: {
        center: [-82.29776, 39.42196],
        zoom: 13.15,
        pitch: 60.0,
        bearing: -16.8,
      },
      onChapterEnter: [
        {
          layer: "indego-stations",
          opacity: 0.8,
        },
      ],
      onChapterExit: [
        {
          layer: "indego-stations",
          opacity: 0,
        },
      ],
    },
    {
      id: "United Pentecostal Church",
      alignment: "right",
      title: "United Pentecostal Church",
      image: "",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      location: {
        center: [-82.2433, 39.58076],
        zoom: 14.99,
        pitch: 44.0,
        bearing: -40.0,
      },
      onChapterEnter: [
        {
          layer: "belmont",
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "belmont",
          opacity: 0,
        },
      ],
    },
    {
      id: "Stewart Wesleyan Church",
      alignment: "right",
      title: "Stewart Wesleyan Church",
      image: "",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      location: {
        center: [-81.89262, 39.30802],
        zoom: 20.08,
        pitch: 47.5,
        bearing: 32.8,
      },
      onChapterEnter: [
        {
          layer: "wissahickon",
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "wissahickon",
          opacity: 0,
        },
      ],
    },
    {
      id: "Stewart United Methodist Church",
      alignment: "right",
      title: "Stewart United Methodist Church",
      image: "",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      location: {
        center: [-81.894582, 39.30813],
        zoom: 16.73,
        pitch: 43.5,
        bearing: 96.8,
      },
      onChapterEnter: [
        {
          layer: "pennypack",
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "pennypack",
          opacity: 0,
        },
      ],
    },
  ],
};

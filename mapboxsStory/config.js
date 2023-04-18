var config = {
  style: "mapbox://styles/aj-code/clg3aa3kd004k01ppexxanafj",
  accessToken:
    "pk.eyJ1IjoiYWotY29kZSIsImEiOiJjbGczYThjYW0wOHp2M2VxaTQ5ZnFlcGdiIn0.BSb4NqXhHk6LS_3ijX-EnQ",
  showMarkers: false,
  theme: "dark",
  title: "",
  use3dTerrain: true,
  subtitle: "",
  byline: "",
  footer: "",
  chapters: [
    {
      // show the region for ohio
      id: "Abandoned churches in the Appalachia region",
      alignment: "center",
      title: '"Nones" on the Rise',
      image: "",
      hidden: false,
      description:
        ' "Nones" is a popular term used in recent years to describe those who aren\'t religiously affiliated: atheist, agnostic or nothing in particular. 22% of Ohioans fall under that identity, according to a study from the Pew Research Center. That demographic of people might have either been raised in a church or never attended but are currently unaffiliated with a religion.',
      location: {
        center: [-82.18056, 39.46192],
        zoom: 5.83,
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
      id: "St. Mary of the Hill",
      alignment: "right",
      title: "St. Mary of the Hill",
      image: "",
      description:
        '<b>Location:<b> <a href="https://goo.gl/maps/3TPYZHiZm3C4mFty8" target="_blank">17645 Bank St., Nelsonville,OH</a> <br> <strong> town population:<strong> 4,571',

      location: {
        center: [-82.18056, 39.46193],
        zoom: 15.83,
        pitch: 5.0,
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
      alignment: "left",
      title: "Fork Union Baptist Church",
      image: "",
      description:
        '<b> Geo Location:<b> <a href="https://goo.gl/maps/yDUrGtovk9ACZ6CFA" target="_blank"> 38.815581, -82.583010</a> <br> <strong> town population:<strong> Abandoned ',
      location: {
        center: [-82.16319, 39.51342],
        zoom: 15.92,
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
        '<b> Location:<b> <a href="https://goo.gl/maps/8gYobrFz3GQR7pUH9" target="_blank"> 45955 Corning St, Murray City, OH 43144</a> <br> <strong> town population:<strong> 345  ',
      location: {
        center: [-82.29776, 39.42196],
        zoom: 15.15,
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
      alignment: "left",
      title: "United Pentecostal Church",
      image: "",
      description:
        '<b> Location:<b><a href="https://goo.gl/maps/NTe9VCuhAemPcjap9" target="_blank"> 333 Main St, New Straitsville, OH 43766 </a> <br> <strong> town population:<strong> 654   ',
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
        '<b> Location:<b><a href="https://goo.gl/maps/hGjWS5X8yBDMWidq6" target="_blank"> 8721 OH-144, Stewart, OH 45778 </a> <br> <strong> town population:<strong> 326   ',
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
      alignment: "left",
      title: "Stewart United Methodist Church",
      image: "",
      description:
        '<b> Location:<b> <a href="https://goo.gl/maps/sYS1zMYr8e3UfnkJ6" target="_blank"> 3 Church St, Athens, OH 45701 </a> <br> <strong> town population:<strong> 326  ',
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

import { IProject } from '../interfaces/IProject'

export const projectsData: IProject[] = [
  {
    id: 999,
    name: 'Coming Soon',
    tag: 'More',
    image: 'more',
    link: '/',
    date: new Date('2000-01-01'),
    imgs: [], // No images
    technologies: [], // No technologies
    externalLinks: {}, // No external links
  },

  {
    id: 1,
    name: 'Smart Garbage',
    tag: 'Project One',
    image: 'smart-garbage/1',
    link: '/projects/smart-garbage',
    date: new Date('2022-06-01'),
    imgs: [
      {
        src: 'smart-garbage/2',
        alt: 'Smart Garbage Photo',
      },
      {
        src: 'smart-garbage/3',
        alt: 'Flyer Smart Garbage',
      },
      {
        src: 'smart-garbage/4',
        alt: 'Design wireframes',
      },
      {
        src: 'smart-garbage/5',
        alt: 'Design wireframes',
      },
    ],
    technologies: [
      'Python',
      'HTML',
      'CSS',
      'JavaScript',
      'MySQL',
      'GitHub',
      'Git',
      'Flask',
      'JSON',
      'Adobe XD',
      'UI/UX',
      'Raspberry Pi',
      'Socket.io',
    ],
    externalLinks: {
      instructables: 'https://www.instructables.com/Making-a-Smart-Garbage/',
      github: 'https://github.com/howest-mct/2021-2022-projectone-Jinlei2000',
    },

    study: 'MCT',
    school: 'Howest Kortrijk',
  },
  {
    id: 2,
    name: 'Oncolor',
    tag: 'Interaction Design',
    image: 'oncolor/1',
    link: '/projects/oncolor',
    date: new Date('2022-08-01'),
    imgs: [
      {
        src: 'oncolor/2',
        alt: '2 Mobile Screens Oncolor',
      },
      {
        src: 'oncolor/3',
        alt: 'Wireframes Oncolor',
      },
    ],
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'GitHub',
      'Git',
      'JSON',
      'Adobe XD',
      'UI/UX',
      'Postman',
    ],
    externalLinks: {
      github: 'https://github.com/Jinlei2000/ProjectOnColor',
      website: 'https://oncolor.leijin.be',
    },

    study: 'MCT',
    school: 'Howest Kortrijk',
  },
  {
    id: 3,
    name: 'Anime/Manga App',
    tag: 'Project One',
    image: 'anime-app/1',
    link: '/projects/anime-app',
    date: new Date('2022-10-01'),
    imgs: [],
    technologies: [
      'GitHub',
      'Git',
      'JSON',
      '.NET',
      'Azure',
      'Xamarin',
      'Postman',
      'C#',
    ],
    externalLinks: {
      github: 'https://github.com/Jinlei2000/ProjectOnColor',
    },
    study: 'MCT',
    school: 'Howest Kortrijk',
  },
  {
    id: 4,
    name: 'Interactive Bollards',
    tag: 'Team Project',
    image: 'interactive-poles/5',
    link: '/projects/interactive-poles',
    featured: true,
    date: new Date('2023-01-01'),
    imgs: [
      {
        src: 'interactive-poles/2',
        alt: 'Flyer interactive poles',
      },
      {
        src: 'interactive-poles/3',
        alt: 'Illustration interactive pole design',
      },
      {
        src: 'interactive-poles/4',
        alt: 'Men holding phone with interactive poles app',
      },
      {
        src: 'interactive-poles/1',
        alt: 'Photo interactive poles on the field',
      },
    ],
    technologies: [
      'Python',
      'HTML',
      'CSS',
      'JavaScript',
      'GitHub',
      'Git',
      'Flask',
      'Adobe XD',
      'UI/UX',
      'Raspberry Pi',
      'GitKraken',
      'MQTT',
    ],
    externalLinks: {
      github: 'https://github.com/Bart-Roels/teamproject-groep5',
    },
    study: 'MCT',
    school: 'Howest Kortrijk',
    client: 'Sports innovation campus',
  },
  {
    id: 5,
    name: 'Movie Zone',
    tag: 'Smart App Development',
    image: 'movie-zone/1',
    link: '/projects/movie-zone',
    featured: true,
    date: new Date('2023-05-01'),
    imgs: [
      {
        src: 'movie-zone/2',
        alt: 'Login screen',
      },
      {
        src: 'movie-zone/3',
        alt: 'Detail screen The Super Mario Bros Movie',
      },
      {
        src: 'movie-zone/4',
        alt: 'Detail screen & Rating The Super Mario Bros Movie',
      },
      {
        src: 'movie-zone/5',
        alt: 'Search screen & Profile screen',
      },
      {
        src: 'movie-zone/6',
        alt: 'Home screen & Watchlist screen & Random movie screen',
      },
    ],
    technologies: [
      'JavaScript',
      'GitHub',
      'Git',
      'Adobe XD',
      'UI/UX',
      'React Native',
      'GitKraken',
      'Expo',
      'TypeScript',
      'Node.js',
      'NPM',
    ],
    externalLinks: {
      github: 'https://github.com/Jinlei2000/project-smart-app',
      expo: 'https://expo.dev/@leix3/movie-zone',
      tmdb: 'https://www.themoviedb.org/',
    },
    study: 'MCT',
    school: 'Howest Kortrijk',
  },
  {
    id: 6,
    name: 'Portfolio',
    tag: 'Frontend Development',
    image: 'portfolio/1',
    link: '/projects/portfolio',
    date: new Date('2023-05-01'),
    imgs: [],
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'GitHub',
      'Git',
      'Adobe XD',
      'UI/UX',
      'Netlify',
      'Tailwind CSS',
      'React Native',
      'TypeScript',
      'NPM',
      'GitKraken',
      'Vite',
    ],
    externalLinks: {
      github: 'https://github.com/Jinlei2000/portfolio-2023',
    },
    study: 'MCT',
    school: 'Howest Kortrijk',
  },

  // {
  //   id: 7,
  //   name: 'Trello Animation',
  //   tag: 'Motion Design',
  //   image: '/img/trello-1.jpg',
  //   link: '/projects/trello',
  //   date: '2023-05-01',
  // },

  // {
  //   id: 8,
  //   name: 'Slack Onboarding',
  //   tag: 'Motion Design',
  //   image: '/img/slack-1.jpg',
  //   link: '/projects/slack',
  //   date: '2023-05-01',
  // },

  {
    id: 9,
    name: 'Expo 50 Years E17',
    tag: 'Industry Project',
    image: 'e17/1',
    featured: true,
    link: '/projects/e17',
    date: new Date('2023-05-02'),
    imgs: [],
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'GitHub',
      'Git',
      'Adobe XD',
      'UI/UX',
      'Tailwind CSS',
      'TypeScript',
      'NPM',
      'GitKraken',
      'Firebase',
      'Next.js',
    ],
    externalLinks: {
      website: 'https://mct-industry-project-e17.vercel.app/',
    },
    study: 'MCT',
    school: 'Howest Kortrijk',
    client: 'Leiedal',
  },

  {
    id: 10,
    name: 'Tuinbouw',
    tag: 'Full Stack Development',
    image: 'more',
    link: '/projects/tuinbouw',
    date: new Date('2023-10-01'),
    imgs: [], // No images
    technologies: [], // No technologies
    externalLinks: {}, // No external links
  },

  {
    id: 11,
    name: 'Discord Carplay',
    tag: 'New Interface Design',
    image: 'more',
    link: '/projects/discord-carplay',
    date: new Date('2023-11-01'),
    imgs: [], // No images
    technologies: [], // No technologies
    externalLinks: {}, // No external links
  },

  {
    id: 12,
    name: 'Pizza AR App',
    tag: 'Research Project',
    image: 'more',
    link: '/projects/pizza-ar',
    date: new Date('2024-01-08'),
    imgs: [], // No images
    technologies: [], // No technologies
    externalLinks: {}, // No external links
  },
]

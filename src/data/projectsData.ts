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
      'Adobe XD',
      'CSS',
      'Flask',
      'Git',
      'GitHub',
      'GitKraken',
      'HTML',
      'JavaScript',
      'MQTT',
      'Python',
      'Raspberry Pi',
      'UI/UX',
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
      'Adobe XD',
      'Expo',
      'Git',
      'GitHub',
      'GitKraken',
      'JavaScript',
      'Node.js',
      'NPM',
      'Prettier',
      'React Native',
      'TypeScript',
      'UI/UX',
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
      'Adobe XD',
      'Git',
      'GitHub',
      'GitKraken',
      'Netlify',
      'NPM',
      'Prettier',
      'React',
      'Tailwind CSS',
      'TypeScript',
      'UI/UX',
      'Vite',
    ],
    externalLinks: {
      github: 'https://github.com/Jinlei2000/portfolio-2023',
    },
    study: 'MCT',
    school: 'Howest Kortrijk',
  },

  {
    id: 7,
    name: 'Expo 50 Years E17',
    tag: 'Industry Project',
    image: 'e17/1',
    link: '/projects/e17',
    date: new Date('2023-05-02'),
    imgs: [],
    technologies: [
      'Adobe XD',
      'CSS',
      'Firebase',
      'Git',
      'GitHub',
      'GitKraken',
      'HTML',
      'JavaScript',
      'Next.js',
      'NPM',
      'Prettier',
      'Tailwind CSS',
      'TypeScript',
      'UI/UX',
    ],
    externalLinks: {
      website: 'https://mct-industry-project-e17.vercel.app/',
    },
    study: 'MCT',
    school: 'Howest Kortrijk',
    client: 'Leiedal',
  },

  {
    id: 8,
    name: '3D Car',
    tag: 'Future Technology',
    image: '3d-car/1',
    link: '/projects/3d-car',
    date: new Date('2023-11-01'),
    imgs: [],
    technologies: ['Astro', 'Three.js', 'UI/UX', 'Netlify', 'NPM', 'Prettier'],
    externalLinks: {
      github: 'https://github.com/Jinlei2000/threejs-bun-astro-car-drive',
      website: 'https://3d-car.leijin.be/',
    },
    study: 'MCT',
    school: 'Howest Kortrijk',
  },

  {
    id: 9,
    name: 'Discord Carplay',
    tag: 'New Interface Design',
    image: 'discord-carplay/1',
    link: '/projects/discord-carplay',
    date: new Date('2023-11-01'),
    imgs: [
      {
        src: 'discord-carplay/1',
        alt: 'Discord Carplay',
      },
      {
        src: 'discord-carplay/2',
        alt: 'Discord Carplay',
      },
      {
        src: 'discord-carplay/3',
        alt: 'Discord Carplay',
      },
    ],
    technologies: ['Adobe XD', 'Figma', 'UI/UX'],
    externalLinks: {
      youtube: 'https://youtu.be/Hejafxpwi3w',
    },
    study: 'MCT',
    school: 'Howest Kortrijk',
  },

  {
    id: 10,
    name: 'Tuinbouw',
    tag: 'Full Stack Development',
    image: 'tuinbouw/1',
    featured: true,
    link: '/projects/tuinbouw',
    date: new Date('2023-10-01'),
    imgs: [
      {
        src: 'tuinbouw/2',
        alt: 'Dashboard employee',
      },
      {
        src: 'tuinbouw/3',
        alt: 'Calendar employee',
      },
      {
        src: 'tuinbouw/4',
        alt: 'Client create a appointment',
      },
      {
        src: 'tuinbouw/5',
        alt: 'Admin user management',
      },
    ],
    technologies: [
      'Azure',
      'Docker',
      'Eslint',
      'Figma',
      'Firebase',
      'Git',
      'GitHub',
      'GitKraken',
      'GraphQL',
      'Jest',
      'Kubernetes',
      'Lerna',
      'MongoDB',
      'Nest.js',
      'Netlify',
      'NPM',
      'Prettier',
      'Tailwind CSS',
      'TypeScript',
      'UI/UX',
      'UnoCSS',
      'Vite',
      'Vue.js',
    ],
    externalLinks: {
      github: 'https://github.com/Jinlei2000/Lei_Samuel',
      youtube: 'https://youtu.be/PGCatT_ZWvo',
    },
    study: 'MCT',
    school: 'Howest Kortrijk',
  },

  {
    id: 11,
    name: 'Pizza AR App',
    tag: 'Research Project',
    featured: true,
    image: 'pizza-ar/1',
    link: '/projects/pizza-ar',
    date: new Date('2024-01-08'),
    imgs: [
      {
        src: 'pizza-ar/2',
        alt: 'Pizza AR App',
      },
      {
        src: 'pizza-ar/3',
        alt: 'Pizza AR App',
      },
      {
        src: 'pizza-ar/4',
        alt: 'Pizza AR App',
      },
      {
        src: 'pizza-ar/5',
        alt: 'Pizza AR App',
      },
      {
        src: 'pizza-ar/6',
        alt: 'Pizza AR App',
      },
    ],
    technologies: ['Figma', 'Flutter', 'Git', 'GitHub', 'GitKraken', 'UI/UX'],
    externalLinks: {
      github: 'https://github.com/Jinlei2000/pizza-ar-flutter-2023/tree/main',
      youtube: 'https://youtu.be/T2qpL45bmXs',
      medium:
        'https://medium.com/@jinleix3/how-to-implement-augemented-reality-in-flutter-for-iphone-27ca3cf2ddb5',
      linkedin:
        'https://www.linkedin.com/feed/update/urn:li:activity:7155572807601410049/',
      figma:
        'https://www.figma.com/file/Mt8dw28h1CW9aHIVsWnDN8/pizza-flutter-app?type=design&t=h4tjoR5UBJnvsefc-6',
    },
    study: 'MCT',
    school: 'Howest Kortrijk',
  },
]

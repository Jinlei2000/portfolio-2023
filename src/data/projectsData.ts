import Project from '../interfaces/Project'
import { skillsData } from './skillsData'

export const projectsData: Project[] = [
  {
    id: 999,
    name: 'Coming Soon',
    tag: 'More',
    image: '/img/more.jpg',
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
    image: '/img/smart-garbage-1.jpg',
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
      skillsData[0],
      skillsData[1],
      skillsData[2],
      skillsData[3],
      skillsData[4],
      skillsData[5],
      skillsData[6],
      skillsData[7],
      skillsData[8],
      skillsData[9],
      skillsData[16],
      skillsData[17],
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
    image: '/img/oncolor-1.jpg',
    link: '/projects/oncolor',
    featured: true,
    date: new Date('2022-08-01'),
    imgs: [
      {
        src: '/img/smart-garbage-2.jpg',
        alt: 'Smart Garbage',
      },
      {
        src: '/img/smart-garbage-3.jpg',
        alt: 'Flyer Smart Garbage',
      },
      {
        src: '/img/smart-garbage-4.jpg',
        alt: 'Design wireframes',
      },
    ],
    technologies: [],
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
    image: '/img/anime-app-1.jpg',
    link: '/projects/anime-app',
    featured: true,
    date: new Date('2022-10-01'),
    imgs: [
      {
        src: '/img/smart-garbage-2.jpg',
        alt: 'Smart Garbage',
      },
      {
        src: '/img/smart-garbage-3.jpg',
        alt: 'Flyer Smart Garbage',
      },
      {
        src: '/img/smart-garbage-4.jpg',
        alt: 'Design wireframes',
      },
    ],
    technologies: [],
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
    image: '/img/interactive-poles-1.jpg',
    link: '/projects/interactive-poles',
    featured: true,
    date: new Date('2023-01-01'),
    imgs: [
      {
        src: '/img/smart-garbage-2.jpg',
        alt: 'Smart Garbage',
      },
      {
        src: '/img/smart-garbage-3.jpg',
        alt: 'Flyer Smart Garbage',
      },
      {
        src: '/img/smart-garbage-4.jpg',
        alt: 'Design wireframes',
      },
    ],
    technologies: [],
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
    image: '/img/movie-zone-1.jpg',
    link: '/projects/movie-zone',
    date: new Date('2023-05-01'),
    imgs: [
      {
        src: '/img/smart-garbage-2.jpg',
        alt: 'Smart Garbage',
      },
      {
        src: '/img/smart-garbage-3.jpg',
        alt: 'Flyer Smart Garbage',
      },
      {
        src: '/img/smart-garbage-4.jpg',
        alt: 'Design wireframes',
      },
    ],
    technologies: [],
    externalLinks: {
      github: '',
      expo: '',
    },
    study: 'MCT',
    school: 'Howest Kortrijk',
  },

  // {
  //   id: 6,
  //   name: 'Portfolio',
  //   tag: 'Frontend Development',
  //   image: '/img/portfolio-1.jpg',
  //   link: '/projects/portfolio',
  //   date: '2023-05-01',
  // },

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

  // {
  //   id: 9,
  //   name: 'Expo 50 Years E17',
  //   tag: 'Industry Project',
  //   image: '/img/expo-1.jpg',
  //   link: '/projects/expo',
  //   date: '2023-05-01',
  // },
]

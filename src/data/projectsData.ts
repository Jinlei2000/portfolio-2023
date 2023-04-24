import {IProject} from '../interfaces/IProject'
import { skillsData } from './skillsData'

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
    image: 'oncolor/1',
    link: '/projects/oncolor',
    featured: true,
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
      skillsData[1],
      skillsData[2],
      skillsData[3],
      skillsData[5],
      skillsData[6],
      skillsData[8],
      skillsData[9],
      skillsData[11],
      skillsData[18],
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
    featured: true,
    date: new Date('2022-10-01'),
    imgs: [],
    technologies: [
      skillsData[5],
      skillsData[6],
      skillsData[8],
      skillsData[13],
      skillsData[14],
      skillsData[15],
      skillsData[18],
      skillsData[32],
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
    image: 'interactive-poles/1',
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
        alt: 'Photo interactive poles on the field',
      },
      {
        src: 'interactive-poles/4',
        alt: 'Illustration interactive pole',
      },
    ],
    technologies: [
      skillsData[0],
      skillsData[1],
      skillsData[2],
      skillsData[3],
      skillsData[5],
      skillsData[6],
      skillsData[7],
      skillsData[8],
      skillsData[9],
      skillsData[10],
      skillsData[16],
      skillsData[36],
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
    date: new Date('2023-05-01'),
    imgs: [
      // {
      //   src: '/img/smart-garbage-2.jpg',
      //   alt: 'Smart Garbage',
      // },
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

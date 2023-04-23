import Project from '../interfaces/Project'

export const projectsData: Project[] = [
  {
    id: 999,
    name: 'Coming Soon',
    tag: 'More',
    image: '/img/more.jpg',
    link: '/',
    date: new Date('2000-01-01'),
  },
  {
    id: 1,
    name: 'Smart Garbage',
    tag: 'Project One',
    image: '/img/smart-garbage-1.jpg',
    link: '/projects/smart-garbage',
    date: new Date('2022-06-01'),

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

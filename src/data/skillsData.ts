import {
  SiAdobeaftereffects,
  SiAdobexd,
  SiArduino,
  SiChartdotjs,
  SiCsharp,
  SiCss3,
  SiDocker,
  SiDotnet,
  SiEslint,
  SiExpo,
  SiFigma,
  SiFirebase,
  SiFlask,
  SiFlutter,
  SiGit,
  SiGithub,
  SiGitkraken,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiJson,
  SiKubernetes,
  SiLerna,
  SiMicrosoftazure,
  SiMongodb,
  SiMqtt,
  SiMysql,
  SiNetlify,
  SiNextdotjs,
  SiNodedotjs,
  SiNpm,
  SiPostman,
  SiPython,
  SiRaspberrypi,
  SiReact,
  SiSass,
  SiSocketdotio,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiUnocss,
  SiVite,
  SiVuedotjs,
  SiXamarin,
} from 'react-icons/si'
import { ISkill } from '../interfaces/ISkill'

// Make a list of skills from a list of skill titles
export const getSkills = (skills: string[]): ISkill[] => {
  const skillsList: ISkill[] = []
  skills.forEach(skill => {
    const foundSkill = skillsData.find(skillData => skillData.title === skill)
    if (foundSkill) {
      skillsList.push(foundSkill)
    } else {
      throw new Error(`Skill not found: ${skill}`)
    }
  })
  return skillsList
}

export const skillsData: ISkill[] = [
  { icon: SiPython, title: 'Python', color: '#3776AB' },
  { icon: SiHtml5, title: 'HTML', color: '#E34F26' },
  { icon: SiCss3, title: 'CSS', color: '#1572B6' },
  { icon: SiJavascript, title: 'JavaScript', color: '#F7DF1E' },
  { icon: SiMysql, title: 'MySQL', color: '#4479A1' },
  { icon: SiGithub, title: 'GitHub', color: '#181717' },

  // 6 - 11
  { icon: SiGit, title: 'Git', color: '#F05032' },
  { icon: SiFlask, title: 'Flask', color: '#000' },
  { icon: SiJson, title: 'JSON', color: '#000' },
  { icon: SiAdobexd, title: 'Adobe XD', color: '#FF61F6' },
  { icon: SiArduino, title: 'Arduino', color: '#00979D' },
  { title: 'UI/UX', color: '#000' },

  // 12 - 17
  { icon: SiChartdotjs, title: 'Chart.js', color: '#FF6384' },
  { icon: SiDotnet, title: '.NET', color: '#512BD4' },
  { icon: SiMicrosoftazure, title: 'Azure', color: '#0089D6' },
  { icon: SiXamarin, title: 'Xamarin', color: '#3498DB' },
  { icon: SiRaspberrypi, title: 'Raspberry Pi', color: '#C51A4A' },
  { icon: SiSocketdotio, title: 'Socket.io', color: '#010101' },

  // 18 - 23
  { icon: SiPostman, title: 'Postman', color: '#FF6C37' },
  { icon: SiAdobeaftereffects, title: 'After Effects', color: '#9999FF' },
  { icon: SiNetlify, title: 'Netlify', color: '#00C7B7' },
  { icon: SiReact, title: 'React', color: '#61DAFB' },
  { icon: SiGitkraken, title: 'GitKraken', color: '#179287' },
  { icon: SiExpo, title: 'Expo', color: '#000020' },

  // 24 - 29
  { icon: SiSass, title: 'Sass', color: '#CC6699' },
  { icon: SiReact, title: 'React Native', color: '#61DAFB' },
  { icon: SiTailwindcss, title: 'Tailwind CSS', color: '#38B2AC' },
  { icon: SiVite, title: 'Vite', color: '#646CFF' },
  { icon: SiDocker, title: 'Docker', color: '#2496ED' },
  { icon: SiGraphql, title: 'GraphQL', color: '#E10098' },

  // 30 - 35
  { icon: SiMongodb, title: 'MongoDB', color: '#47A248' },
  { icon: SiTypescript, title: 'TypeScript', color: '#3178C6' },
  { icon: SiCsharp, title: 'C#', color: '#239120' },
  { icon: SiNodedotjs, title: 'Node.js', color: '#339933' },
  { icon: SiNpm, title: 'NPM', color: '#CB3837' },
  { icon: SiFirebase, title: 'Firebase', color: '#FFCA28' },

  // 36 - 41
  { icon: SiMqtt, title: 'MQTT', color: '#660066' },
  { icon: SiFirebase, title: 'Dapr', color: '#0D2192' },
  { icon: SiNextdotjs, title: 'Next.js', color: '#000000' },
  { icon: SiVuedotjs, title: 'Vue.js', color: '#4FC08D' },
  { icon: SiFlutter, title: 'Flutter', color: '#02569B' },
  { icon: SiThreedotjs, title: 'Three.js', color: '#000000' },

  // 42 - 47
  { icon: SiEslint, title: 'Eslint', color: '#4B32C3' },
  { icon: SiUnocss, title: 'UnoCSS', color: '#333333' },
  { icon: SiFigma, title: 'Figma', color: '#F24E1E' },
  { icon: SiJest, title: 'Jest', color: '#C21325' },
  { icon: SiLerna, title: 'Lerna', color: '#9333EA' },
  { icon: SiKubernetes, title: 'Kubernetes', color: '#326CE5' },
]

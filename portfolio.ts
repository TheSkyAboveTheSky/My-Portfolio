import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Mounji Said',
  title: "Welcome everyone , I'am MOUNJI Said",
  description:
    "I am a 21-year-old software engineering student at ENSIAS, the National School for Computer Science in Morocco. I am thrilled to share with you that I am a passionate full-stack developer, always eager to explore new technologies and take on new challenges. As a developer, I have experience working with a range of programming languages, including Javascript, Typescript, Python, and Java. I am also well-versed in various frameworks such as React, Angular, Vue JS, Laravel, Symfony,django,Flask and Springboot. These tools enable me to develop robust, scalable, and efficient applications that meet the needs of clients and users."
};

export const openSource = {
  githubUserName: 'TheSkyAboveTheSky',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  linkedin: 'https://www.linkedin.com/in/said-mounji-4a8154225/',
  github: 'https://github.com/TheSkyAboveTheSky',
  facebook: 'https://www.facebook.com/Eustass.d.kizaru/',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js'
        ),
        emoji('⚡ Building responsive static websites using Next.js'),
        emoji('⚡ Building RESTful APIs in Django & Django REST Framework'),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          fontAwesomeClassName: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          fontAwesomeClassName: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          fontAwesomeClassName: 'logos:javascript',
        },
        {
          skillName: 'Reactjs',
          fontAwesomeClassName: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Nextjs',
          fontAwesomeClassName: 'vscode-icons:file-type-light-next',
        },
        {
          skillName: 'Python',
          fontAwesomeClassName: 'logos:python',
        },
        {
          skillName: 'Django',
          fontAwesomeClassName: 'vscode-icons:file-type-django',
        },

        {
          skillName: 'Redux',
          fontAwesomeClassName: 'logos:redux',
        },
        {
          skillName: 'NPM',
          fontAwesomeClassName: 'logos:npm-icon',
        },
        {
          skillName: 'Yarn',
          fontAwesomeClassName: 'logos:yarn',
        },
        {
          skillName: 'Angular',
          fontAwesomeClassName: 'logos:angular',
        },
        {
          skillName: 'Laravel',
          fontAwesomeClassName: 'logos:laravel',
        },
        {
          skillName: 'Symfony',
          fontAwesomeClassName: 'logos:symfony',
        },
        {
          skillName: 'Flask',
          fontAwesomeClassName: 'logos:flask',
        },
      ],
    },
    {
      title: 'Cloud Infra-Architecture',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Experience of working on multiple cloud platforms'),
        emoji(
          '⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases'
        ),
        emoji(
          '⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions'
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'AWS',
          fontAwesomeClassName: 'logos:aws',
        },
        {
          skillName: 'Azure',
          fontAwesomeClassName: 'logos:microsoft-azure',
        },
        {
          skillName: 'PostgreSQL',
          fontAwesomeClassName: 'logos:postgresql',
        },
        {
          skillName: 'Github',
          fontAwesomeClassName: 'akar-icons:github-fill',
        },
        {
          skillName: 'Docker',
          fontAwesomeClassName: 'logos:docker-icon',
        },
        {
          skillName: 'Github Actions',
          fontAwesomeClassName: 'logos:github-actions',
        },
        {
          skillName: 'Cloudinary',
          fontAwesomeClassName: 'logos:cloudinary',
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Frontend/Design', //Insert stack or technology you have experience in
    progressPercentage: '70', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Backend',
    progressPercentage: '80',
  },
  {
    Stack: 'Programming',
    progressPercentage: '90',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'CPGE : MP',
    subHeader: 'Class prépartoire MP',
    duration: 'September 2018 - September 2021'
  },
  {
    schoolName: 'ENSIAS : National school For Computer Science',
    subHeader: 'Génie logiciel',
    duration: 'September 2021 - September 2025',
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Full Stack Developer',
    company: 'Technocollabs',
    companyLogo: '/img/icons/common/techno.jpeg',
    date: 'Aug 2022 - Oct 2022',
    desc: 'Worked as fullstack web developer to create a website in which I worked with MERN Stack',
  },
  {
    role: 'President',
    company: 'ADEI ENSIAS',
    companyLogo: '/img/icons/common/adei.jpg',
    date: 'Nov 2022 - Now',
    desc: 'President of ADEI ENSIAS (Association Des Elèves Ingénieurs ENSIAS)',
  },
];

/* export const projects: ProjectType[] = [
  {
    name: 'developer-portfolio',
    desc: 'Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.',
    github: 'https://github.com/1hanzla100/developer-portfolio',
    link: 'https://developer-portfolio-1hanzla100.vercel.app/',
  },
  {
    name: 'AtlasMart',
    desc: 'With Atlas Mart, it’s easy to find the products with the best price and ship them straight to your door.',
    github: 'https://github.com/1hanzla100/Django-React-Marketplace',
  },
  {
    name: 'Technota (Forum)',
    desc: 'Get hands-on experience in technical skills with Technota',
    github: 'https://github.com/1hanzla100/django-react-forum',
  },
  {
    name: 'Shopaza (Ecommerce)',
    desc: 'Now your reach to all your favorite entertainment and luxury items is just one touch apart',
    github: 'https://github.com/1hanzla100/Django-ecommerce',
  },
]; */

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'MOUNJI Said',
  description:
    'A passionate Full Stack Web Developer.',
  author: 'MOUNJI Said',
  image: 'https://media.licdn.com/dms/image/C4E03AQFK94rxRj4e7Q/profile-displayphoto-shrink_800_800/0/1648067150278?e=1687996800&v=beta&t=UmUR_D1M1iTBWQgJzNa6eIhiPLxfm9yXK1k3UN7-u-0',
  url: 'https://developer-portfolio-1hanzla100.vercel.app',
  keywords: [
    'Mounji',
    'Mounji Said',
    'TheSkyAboveTheSky',
    'MOUNJISaid',
    'Portfolio',
    'Mounji Portfolio ',
    'Mounji Said Portfolio',
  ],
};

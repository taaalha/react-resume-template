import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  //FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
//import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
//import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
//import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume',
  description: '',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'Life snippets',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Talha Khalid`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Helsinki based <strong className="text-stone-100">Google and Azure Cloud Engineer</strong>, currently
        working at <strong className="text-stone-100">Nordcloud - an IBM Company</strong> helping customers navigate
        their complex cloud environment.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me jogging in <strong className="text-stone-100">Nature</strong>, socialzing
        with <strong className="text-stone-100">Friends</strong>, or hiking in{' '}
        <strong className="text-stone-100">Norwegian Fjords</strong>.
      </p>
    </>
  ),
  actions: [
    // {
    //   href: '/assets/resume.pdf',
    //   text: 'Resume',
    //   primary: true,
    //   Icon: ArrowDownTrayIcon,
    // },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact me',
      primary: false,
      Icon: ArrowDownTrayIcon,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I am a highly accomplished and certified IT professional with an extensive background in automation, software development, and cloud computing.
  I hold a Master's degree in Automation and Electrical Engineering, and am Professionally certified by Google and Microsoft in Cloud Technology.`,
  aboutItems: [
    {label: 'Location', text: 'Helsinki, FI', Icon: MapIcon},
    {label: 'Age', text: '28', Icon: CalendarIcon},
    //{label: 'Nationality', text: 'Canadian / Irish', Icon: FlagIcon},
    {label: 'Interests', text: 'Hiking, Jogging, Socializing', Icon: SparklesIcon},
    {label: 'Study', text: 'Aalto University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Nordcloud - an IBM Company.', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Certifications',
    skills: [
      {
        name: 'Google Cloud - Professional Cloud Architect',
        level: 10,
      },
      {
        name: 'Google Cloud - Associate Cloud Engineer',
        level: 10,
      },
      {
        name: 'Google Cloud - Cloud Digital Leader',
        level: 10,
      },
      {
        name: 'Microsoft Azure Fundamentals',
        level: 10,
      },
      {
        name: 'AWS Cloud Practitoner',
        level: 10,
      },
      {
        name: 'AWS - Migration Ambassador Foundation',
        level: 10,
      },
      {
        name: 'Terraform Associate 002',
        level: 10,
      },
    ],
  },
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Urdu',
        level: 10,
      },
      {
        name: 'Finnish',
        level: 6,
      },
      {
        name: 'German',
        level: 2,
      },
    ],
  },
  {
    name: 'Tech Skills',
    skills: [
      {
        name: 'Cloud Architecture, Deployment and Management',
        level: 10,
      },
      {
        name: 'Public Cloud Migrations',
        level: 10,
      },
      {
        name: 'Kubernetes',
        level: 10,
      },
      {
        name: 'Scripting via PowerShell, Python, Bash',
        level: 10,
      },
      {
        name: 'Web scraping via Selenium & BeautifulSoup',
        level: 10,
      },
      {
        name: 'Web development via React, Node, JavaScript',
        level: 10,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: '',
    description: '',
    url: '',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2020 - 2023',
    location: 'Aalto University, Finland',
    title: 'Masters in Automation Engineering',
    content: <p>Major: Control, Robotics and Autonomous Systems</p>,
  },
  {
    date: '2014 - 2019',
    location: 'Häme University of Applied Sciences, Finland',
    title: 'Bachelors in Automation Engineering',
    content: <p></p>,
  },
  {
    date: '2017 - 2018',
    location: 'VIA Univeristy College, Denmark',
    title: 'Bachelors in Mechanical Engineering',
    content: <p>This was a double degree program organized by Häme University</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'December 2021 - Present',
    location: 'Nordcloud - an IBM Company',
    title: 'Cloud Engineer',
    content: (
      <p>
        My work as a Cloud Engineer involves arhitecting new solutions and managing customer's complex cloud
        environment. I deal with both Google Cloud and Microsoft Azure, and work with Firewall management, VM creation,
        Networking, Landing Zones, Defender for Cloud, Automation Accounts and KQL queries to name a few.
      </p>
    ),
  },
  {
    date: 'July 2021 - October 2021',
    location: 'MigraineBan Oy',
    title: 'Mechanical Design Engineer',
    content: (
      <p>
        This was a contract based role, where I was responsible for designing a prototype of a Migraine Care device.
        This was a successful project, and I was able to hand over 4 working prototypes at the end of the project.
      </p>
    ),
  },
  {
    date: 'October 2021 - December 2021',
    location: 'Aalto University',
    title: 'Teaching Assistant',
    content: <p>Teaching Assistant for the course of Software Engineering</p>,
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Customer',
      text: 'Very professional and quick response time in handling the setup and configuration of Google Cloud DNS API. The process was thoroughly documented and went over and beyond by offering security best practices.',
      image: '',
    },
    {
      name: 'Customer',
      text: 'Extremely helpful with infrastructure issue.  Very knowledgeable and efficient.  Would not hesitate to hire again for network infrastructure issues in the future',
      image: '',
    },
    {
      name: 'Customer',
      text: 'Excellent work delivered in configuring Azure Defender for Cloud, and creating interactive dashboards ',
      image: '',
    },
    {
      name: 'Customer',
      text: 'Very knowledgeable in Kubernetes realted issues. Helped us configure auto scaling GKE Clusters with seperate node pools',
      image: '',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch',
  description: 'You can reach out to me via the following email',
  items: [
    {
      type: ContactType.Email,
      text: 'talhak.ytk@gmail.com',
      href: 'mailto:talhak.ytk@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Helsinki, Finland',
      href: 'https://www.google.com/maps/place/Helsinki/@60.1729021,24.9235216,13.21',
    },
    /*     {
      type: ContactType.Instagram,
      text: '@tbakerx',
      href: 'https://www.instagram.com/tbakerx/',
    }, */
    {
      type: ContactType.Github,
      text: 'taaalha',
      href: 'https://github.com/taaalha',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/taaalha'},
  //{label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/talha-khalid1/'},
  //{label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/tbakerx/'},
  //{label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];

import { GetStaticProps } from 'next';
import React from 'react';
import Hero, { HeroProps } from '@components/Hero';
import ListSection, { ListSectionProps } from '@components/ListSection';

const data = {
  hero: {
    name: 'Zack Sunderland',
    title: 'Software Engineer',
    description:
      'I’m a full-stack software engineer, with a love for all things JavaScript. I’ve spent the last few years building up my front-end skills using React.js in combination with Next.js, Express.js and a host of other OSS packages. Before that I worked mostly on back-ends, using Java and before that with PHP. At the end of the day, I just love solving interesting problems with well-thought-out and intuitive solutions! So what problems can we solve together?',
  },
  lists: [
    {
      title: 'Experience',
      orientation: 'right',
      items: [
        {
          title: 'Lead Developer - Underbelly',
          description:
            'Technical lead for a team of 3 - 4 developers, each with their own project(s). Responsible for ensuring that each project meets the quality expectations of Underbelly, stay within the timeline established with the client, and most importantly isn\'t overworking or overwhelming the team. Responsible for all code reviews for each team member. Perform daily to weekly paired programming sessions with each team member, as well as less structured "help sessions" meant to unblock and train. Assist with task scheduling and prioritization for the team. Additionally, work with the engineering leadership team to review practices and policies to ensure we are supporting both our team and our clients as effectively as possible.',
        },
        {
          title: 'Software Developer - Underbelly',
          description:
            "Supported the 5 Netflix websites that were developed by Underbelly including both public-facing and internal projects, while also creating the new Netflix Animation Job Site (netflixanimation.com). All these sites were built utilizing Next.js (react and express) for both client and server code, Contentful as a CMS, and Netflix's internal ecosystem for all dev-ops. Eventually transitioned to focusing full-time on building a new web app that Netflix now uses to determine appropriate compensation for new and existing employees alike. This app was built utilizing Create React App, TypeORM and Nexus (for a GraphQL API), express, PostgreSQL, along with a host of other OSS packages. Constantly worked to improve our internal processes in an effort to increase efficiency and reduce opportunities for bugs and site down-time. Integrated myself into the Netflix ecosystem so that their best practices were always prioritized. As one of the more senior developers at Underbelly, I also worked closely with teammates to assist and mentor them, whenever needed.",
        },
        {
          title: 'Software Developer - TaskEasy',
          description:
            'Working within a cross-functional team building full-stack web applications in an agile environment. Utilizing React and redux, on the client-side, along with a Java Play monolith, combined with Node and Python microservices using the Serverless Framework. Creating React component libraries for simple and consistent use throughout the company. Working closely with management to establish best practices and simplified solutions for both the front and back-end. Working to solve the software problems of an ever-changing business through the continued development and improvement of performant and intuitive web applications.',
        },
        {
          title: 'Software Developer - America First Credit Union',
          description:
            'Worked with the department on the management and continued development of an enterprise-level website, including the primary client-facing site and intranet sites. Drove an initiative to bring git into our development and deployment workflow and improve existing workflows. Helped to devise new methods of process improvement within the development team and performance improvements throughout the various codebases. Contributed to the orchestration and implementation a massive restructure from outdated technology to a new more extensible and reusable CMS.',
        },
        {
          title: 'Software Developer - Ad Ventures Inc.',
          description:
            'Full-stack web development utilizing the standard HTML5, CSS3, Javascript (with JQuery and many other open-source libraries) set for front end and the CakePHP framework for server-side. Managed the entire design process, from a rough concept provided by a business owner to deployment into a production setting. Maintained entire web application codebase including all new development, design improvements, maintenance, testing, and deployment. Assisted in the management of other development teams, including work with an offshore development team. Managed remote servers through Amazon Web Services (AWS) using the EC2, RDS, and Elastic Beanstalk tools for hosting and deployment. Maintained and improved schema on a MySQL database using the RDS service. Designed and developed a RESTful API for the mobile counterparts to the web application. Collaborated with the mobile development team to improve the existing API process and increase the overall speed and usability of the mobile apps.',
        },
      ],
    },
    {
      title: 'Education',
      orientation: 'left',
      items: [
        {
          title: "Bachelor's Degree - Weber State University",
          description:
            "Graduated in December of 2017 with a Bachelor's Degree majoring in Computer Science.",
        },
        {
          title: "Associate's Degree - Weber State University",
          description:
            "Graduated in December of 2010 with an Associate's degree majoring in General Studies",
        },
      ],
    },
    {
      title: 'Skills',
      orientation: 'right',
      items: [
        {
          title: 'Front-end',
          description: 'Javascript | HTML | CSS | React | Next | Gatsby',
        },
        {
          title: 'Back-end',
          description:
            'Java | NodeJS | Express | SQL | AWS | Firebase | Serverless',
        },
        { title: 'Project Management', description: 'Jira | Trello | Asana' },
        { title: 'Source Control', description: 'Git | Github | Bitbucket' },
      ],
    },
  ],
};

export interface HomeProps {
  lists: Array<ListSectionProps>;
  hero: HeroProps;
}

const Home = ({ lists = [], hero }: HomeProps) => (
  <>
    <Hero {...hero} />
    {lists.map(list => (
      <ListSection key={list.title} {...list} />
    ))}
  </>
);

export default Home;

export const getStaticProps: GetStaticProps = () => {
  return { props: data };
};

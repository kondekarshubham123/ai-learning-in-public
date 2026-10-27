// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '365 Days of AI',
  tagline: 'Learning, building, and sharing in public',
  favicon: 'img/favicon.ico',

  url: 'https://kondekarshubham123.github.io',
  baseUrl: '/365-days-of-ai/',
  organizationName: 'kondekarshubham123',
  projectName: '365-days-of-ai',
  trailingSlash: false,
  onBrokenLinks: 'throw',

  i18n: {defaultLocale: 'en', locales: ['en']},

  markdown: {mermaid: true},
  themes: [
    '@docusaurus/theme-mermaid',
    [
      '@easyops-cn/docusaurus-search-local',
      {hashed: true, indexBlog: true, indexDocs: true, blogRouteBasePath: '/blog'},
    ],
  ],
  plugins: ['docusaurus-plugin-image-zoom'],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/kondekarshubham123/365-days-of-ai/tree/main/',
        },
        blog: {
          routeBasePath: 'blog',
          path: './blog',

          blogTitle: '365 Days of AI — Daily Log',
          blogDescription:
            '365 days of hands-on AI experiments, open-source tools, agents, LLMs, and practical learnings.',

          showReadingTime: true,
          blogSidebarCount: 10,
          blogSidebarTitle: 'Recent Experiments',
          postsPerPage: 10,

          feedOptions: {
            type: ['rss', 'atom'],
            copyright: `Copyright © ${new Date().getFullYear()} Shubham Kondekar`,
          },

          editUrl:
            'https://github.com/kondekarshubham123/365-days-of-ai/tree/main/',
        },
        theme: {customCss: './src/css/custom.css'},
      },
    ],
  ],

  themeConfig: {
    image: 'img/social-card.png',
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: false,
      disableSwitch: false,
    },
    navbar: {
      title: '365 Days of AI',
      items: [
        {to: '/blog', label: 'Daily Log', position: 'left'},
        {type: 'docSidebar', sidebarId: 'tutorialSidebar', label: 'Roadmap & Resources', position: 'left'},
        {to: '/blog/tags', label: 'Topics', position: 'left'},
        {href: 'https://github.com/kondekarshubham123/365-days-of-ai', label: 'GitHub', position: 'right'},
        {href: 'https://www.linkedin.com/in/shubham-kondekar', label: 'LinkedIn', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      copyright: `© ${new Date().getFullYear()} 365 Days of AI. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'python', 'json', 'yaml', 'docker'],
    },
    zoom: {selector: '.markdown img', background: {light: 'rgb(255,255,255)', dark: 'rgb(50,50,50)'}},
  },
};

export default config;
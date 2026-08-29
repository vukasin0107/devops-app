// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

// ─────────────────────────────────────────────────────────────────────────
// ⚠️  UPDATE THESE TWO VALUES before deploying to GitHub Pages:
const GITHUB_USERNAME = 'vukasin0107'; // e.g. 'vukasinvujadinovic'
const REPO_NAME = 'devops-app';
// ─────────────────────────────────────────────────────────────────────────

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DevOps Cookbook',
  tagline: 'Concepts, diagrams, and interview prep for DevOps & SRE',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: `https://${GITHUB_USERNAME}.github.io`,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment of a project site, this is '/<repoName>/'
  baseUrl: `/${REPO_NAME}/`,

  // GitHub pages deployment config.
  organizationName: GITHUB_USERNAME, // Usually your GitHub org/user name.
  projectName: REPO_NAME, // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Enable Mermaid diagrams in Markdown
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', // serve docs at the site root instead of /docs
          sidebarPath: './sidebars.js',
          editUrl: `https://github.com/${GITHUB_USERNAME}/${REPO_NAME}/tree/main/`,
        },
        blog: false, // no blog for this project
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your own social card image later (static/img/social-card.jpg)
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'DevOps Cookbook',
        logo: {
          alt: 'DevOps Cookbook Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Cookbook',
          },
          {
            href: `https://github.com/${GITHUB_USERNAME}/${REPO_NAME}`,
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Cookbook',
            items: [
              {
                label: 'Foundations',
                to: '/foundations/sdlc-devops-foundations',
              },
              {
                label: 'Interview Questions',
                to: '/interview-questions',
              },
              {
                label: 'Examples',
                to: '/examples',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: `https://github.com/${GITHUB_USERNAME}/${REPO_NAME}`,
              },
              {
                label: 'roadmap.sh/devops',
                href: 'https://roadmap.sh/devops',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} DevOps Cookbook. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;

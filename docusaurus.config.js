// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SillyAndroid',
  tagline: '安卓安装即玩的 AI 角色扮演应用',
  favicon: 'img/favicon.ico',

  url: 'https://你的域名.com',
  baseUrl: '/',

  organizationName: '你的GitHub用户名',
  projectName: 'SillyAndroid',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/你的仓库/tree/main/',
        },
        blog: false, // 如果不需要博客可以关闭
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'SillyAndroid',
        logo: {
          alt: 'SillyAndroid Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '文档',
          },
          {
            href: 'https://github.com/你的仓库',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: '下载',
                to: '/docs/download',
              },
              {
                label: '酒馆教程',
                to: '/docs/setup-complete',
              },
            ],
          },
          {
            title: '社区',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/你的仓库',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} SillyAndroid`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;

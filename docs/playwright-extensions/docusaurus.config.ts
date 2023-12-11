import { themes as prismThemes } from 'prism-react-renderer';
import type { Config, LoadContext, PluginOptions } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const config: Config = {
  title: 'Playwright Extensions',
  tagline: 'Useful Extension Functions for Playwright Test Runner',

  // Set the production url of your site here
  url: 'https://sustainjane98.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/playwright-extensions/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'sustainjane98', // Usually your GitHub org/user name.
  projectName: 'playwright-extensions', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  plugins: [
    async function myPlugin(context: LoadContext, options: PluginOptions) {
      return {
        name: 'docusaurus-tailwindcss',

        configureWebpack(config, isServer, utils, content) {
          // Remov
          config.plugins = config.plugins.slice(1);

          config.module.rules.push({
            test: /.css$/,
            exclude: /node_modules/,
            include: path.resolve(__dirname, 'src'),
            use: [
              MiniCssExtractPlugin.loader,
              'style-loader',
              'css-loader',
              'postcss-loader',
            ],
          });

          console.log(config);

          return config;
        },
      };
    },
  ],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Playwright Extensions',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/sustainjane98/playwright-extensions',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/playwright',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/sustainjane98',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Sustainjane98.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

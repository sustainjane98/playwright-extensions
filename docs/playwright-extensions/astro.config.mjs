import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://sustainjane98.github.io',
  base: 'playwright-extensions',
  vite: {
    ssr: {
      noExternal: ['execaSync'],
    },
  },
	integrations: [
		starlight({
			title: 'Playwright Extensions',
			social: {
				github: 'https://github.com/sustainjane98/playwright-extensions',
			},
      editLink: {
        baseUrl: 'https://github.com/sustainjane98/playwright-extensions/edit/main/',
      },
			sidebar: [
        {
					label: 'Installation',
					link: "/installation",
				},
        {
					label: 'Getting Started',
					link: "/getting_started",
				},
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' },
				}
			],
      customCss: ['./src/tailwind.css'],
		}),
    tailwind({ applyBaseStyles: false }),
	],
});

// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwindcss from '@tailwindcss/vite';

import starlightObsidian, { obsidianSidebarGroup } from 'starlight-obsidian'

// https://astro.build/config
export default defineConfig({
  integrations: [
      starlight({
          title: 'My Docs',
          plugins: [
        // Generate the Obsidian vault pages.
        starlightObsidian({
          vault: '../../worklight-docs-obsidian-vault/worklight-docs-obsidian-vault',
        }),
      ],
          customCss: [
        // Path to your Tailwind base styles:
        './src/styles/global.css',
      ],
          social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
          sidebar: [
              {
                  label: 'Guides',
                  items: [
                      // Each item here is one entry in the navigation menu.
                      { label: 'Example Guide', slug: 'guides/example' },
                  ],
              },
              {
                  label: 'Reference',
                  autogenerate: { directory: 'reference' },
              },
                      // Add the generated sidebar group to the sidebar.
        obsidianSidebarGroup,
          ],
      }),
	],

  vite: {
    plugins: [tailwindcss()],
  },
});
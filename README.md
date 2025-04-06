# Obsidian Typofilter plugin

Adds a Ribbon icon and a command to use Typofilter on selected or whole text in the [Obsidian](https://obsidian.md/) editor.

[Typofilter.js library](https://github.com/graker/typofilter.js) is used to do the following:

- replaces (c) with ©
- replaces (r) with ®
- replaces multiple dots with ellipsis
- replaces +- with ±
- replaces -> with →
- replaces <- with ←
- replaces quotes with laquo/raquo (Russian-style quotes)
- replaces hyphens with mdash in text when appropriate
- replaces hyphens with ndash in number ranges
- removes spaces between a number and the percent sign

Markdown-style code blocks are ignored.

## How to use

- Clone this repo.
- Make sure your NodeJS is at least v16 (`node --version`).
- `npm i` or `yarn` to install dependencies.
- `npm run dev` to start compilation in watch mode.

## Manually installing the plugin

- Copy over `main.js`, `styles.css`, `manifest.json` to your vault `VaultFolder/.obsidian/plugins/your-plugin-id/`.
- Enable the plugin in the list of Community plugins
- Select some text and click the magic wand icon on the left. Enjoy typography.

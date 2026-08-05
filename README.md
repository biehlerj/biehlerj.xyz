# [biehlerj.xyz](https://biehlerj.github.io) Astro rewrite

This repository contains code for my custom rewrite of my personal website using [Astro](https://astro.build). The previous version of my personal website was written using Hugo, but I wanted to have more control over the look and features of my website so I decided to rewrite my website using Astro.

- [biehlerj.xyz Astro rewrite](#biehlerjxyz-astro-rewrite)
  - [🚀 Project Structure](#-project-structure)
  - [🧞 Commands](#-commands)
  - [Technologies used](#technologies-used)
  - [Roadmap](#roadmap)
  - [👀 Want to learn more about Astro?](#-want-to-learn-more-about-astro)

## 🚀 Project Structure

```sh
/
├── public/
│   ├── favicon.ico
│   ├── favicon.svg
│   └── resume.pdf
├── src/
│   ├── assets/
│   │   ├── pfp.jpg
│   │   └── pfp.webp
│   ├── components/
│   │   ├── Card.astro
│   │   ├── Date.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── Logo.astro
│   │   ├── Menu.astro
│   │   ├── MonthYearDate.astro
│   │   ├── MultiDate.astro
│   │   └── SocialIcons.astro
│   ├── content/
│   │   ├── certs/
│   │   │   └── *.md
│   │   ├── education/
│   │   │   └── *.md
│   │   ├── experience/
│   │   │   └── *.md
│   │   ├── projects/
│   │   │   └── *.md
│   │   └── config.ts
│   ├── icons/
│   │   └── *.svg
│   ├── layouts/
│   │   ├── CertEntry.astro
│   │   ├── EducationEntry.astro
│   │   ├── Experience.astro
│   │   ├── Layout.astro
│   │   └── ProjectEntry.astro
│   ├── pages/
│   │   ├── certs/
│   │   │   └── [...slug].astro
│   │   ├── education/
│   │   │   └── [...slug].astro
│   │   ├── experience/
│   │   │   ├── [...slug].astro
│   │   │   └── index.astro
│   │   ├── projects/
│   │   │   ├── [...slug].astro
│   │   │   └── index.astro
│   │   ├── about.astro
│   │   ├── education.astro
│   │   └── index.astro
│   └── styles/
│       └── global.css
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, can be placed in the `public/` directory.

For this project I am using the [experimental assets support](https://docs.astro.build/en/guides/assets/) for images.

This website also uses the [content collections API](https://docs.astro.build/en/guides/content-collections/) to easily manage and configure entries for things like my education, projects I've worked on, etc. All subdirectories in `src/content/` hold items that are all similar and then are used by the `[...slug].astro` file in the corresponding directory in `src/pages/`.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                            |
| :--------------------- | :------------------------------------------------ |
| `pnpm install`         | Installs dependencies                             |
| `pnpm dev`             | Starts local dev server at `localhost:3000`       |
| `pnpm build`           | Build your production site to `./dist/`           |
| `pnpm preview`         | Preview your build locally, before deploying      |
| `pnpm sync`            | Generates TypeScript types for all Astro modules. |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check`  |
| `pnpm astro -- --help` | Get help using the Astro CLI                      |

## Technologies used

A big thank you to the following projects for helping me build my website the way I want without having to reinvent the wheel:

- [Astro](https://astro.build) for making building this website so much easier and fun!
- [Astro Icon](https://github.com/natemoo-re/astro-icon) for making me not have worry about inlining my svgs on my own.
- [Hugo PaperMod theme](https://github.com/adityatelange/hugo-PaperMod) for inspiring my layout and providing the SVGs for my social media links.
- [date-fns](https://github.com/date-fns/date-fns) for making working with dates so much easier!
- [Tailwind CSS](https://tailwindcss.com/) for helping make my site beautiful with ease!
- [Catppuccin Palette](https://github.com/catppuccin/palette) for helping theme my website the way I want!

## Roadmap

Below is a non-exhaustive list of things that are planned which includes things that will be added soon&trade;:

- ~~Use Tailwind CSS to make the site look beautiful~~ Added in [v0.2.0](https://github.com/biehlerj/biehlerj.xyz/releases/tag/v0.2.0)
- ~~Leverage [Catppuccin Tailwind CSS Plugin](https://github.com/catppuccin/tailwindcss) to toggle between light and dark mode.~~ Added in [v0.2.0](https://github.com/biehlerj/biehlerj.xyz/releases/tag/v0.2.0)
- ~~Improve the navigation in pages:~~ Added in [v0.3.0](https://github.com/biehlerj/biehlerj.xyz/releases/tag/v0.3.0)
  - ~~Have content pages have a button to go back to the landing page for that content collection~~
  - ~~Tag skills for all content collections (where applicable):~~
    - ~~Use tags to allow users to search through my skills and how much, when, and where I used/learned them~~
- Create a blog:
  - Make tags for blog posts that are separate from tags for skills
  - Create a CMS to make uploading new posts easy

## 👀 Want to learn more about Astro?

Feel free to check [the Astro documentation](https://docs.astro.build).

[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

# Node Package Template

An opinionated boilerplate for getting your node projects started.

[Report a bug or request a feature][issues-url]

## About The Project

There are many templates for Node/Express and other frameworks, but not ones that suited my preferences for building packages and command line tools. Tired of spending in upwards of 30 minutes to an hour setting up my preferred tooling, I decided it was time to create and share my starter template for node projects.

This repo contains an opinionated setup for developing Node applications including linting, testing, and other tooling with the goal of allowing a developer to quickly get past setup and get to work creating Node apps.

### Built With

- [Jest][jest]
- [ESLint][eslint]
- [Prettier][prettier]

## Getting Started

Make a fork or [generate a new repository from this template](https://github.com/median-man/mern-jwt-boilerplate/generate).

### Prerequisites

Requires Node v12+ and npm v7+.

### Installation

1. Make a fork or [generate a new repository from this template](https://github.com/median-man/mern-jwt-boilerplate/generate).

2. Install dependencies: `npm install`.

### Linting and Code Style

This project uses [Prettier][prettier] and [ESLint][eslint] for code style and linting. The project is configured to use `eslint:recommended` rules for improved code quality with overrides to avoid conflicts with the formatting rules from Prettier.

Run `npm run lint` print a list of lint errors in the terminal.

Run `npm run lint:fix` to auto-fix any auto-fixable lint errors and format files in languages supported by [Prettier][prettier].

Run `npm run format` to use [Prettier][prettier] apply code format to any html, css, js, json, and md files.

Run `npm run format:check` to print output from Prettier without applying fixes to files.

### Testing

Run `npm run test` or `npm run test:w` to run tests continuously in file watch mode.

This boilerplate includes [Jest][jest] testing framework. Files with names ending in `.test.js` will be including the test scripts.

## Report Bugs and Request Features

See the [open issues][issues-url] for a list of proposed features (and known issues).

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

John Desrosiers - <john.desro@gmail.com>

Project Link: <https://github.com/median-man/node-package-template>

## Acknowledgements

- [Jest][jest]
- [ESlint][eslint]
- [Prettier][prettier]
- [Img Shields](https://shields.io)
- [Choose an Open Source License](https://choosealicense.com)
- [Best README Template](https://github.com/othneildrew/Best-README-Template)
- [Setting up ESLint to work with new or proposed JavaScript features by George Griffiths](https://griffa.dev/posts/setting-up-eslint-to-work-with-new-or-proposed-javascript-features-such-as-private-class-fields./)

[contributors-url]: https://github.com/median-man/node-package-template/graphs/contributors
[eslint]: https://eslint.org/
[issues-shield]: https://img.shields.io/github/issues/median-man/node-package-template.svg?style=for-the-badge
[issues-url]: https://github.com/median-man/node-package-template/issues
[jest]: https://jestjs.io/
[license-shield]: https://img.shields.io/github/license/median-man/node-package-template.svg?style=for-the-badge
[license-url]: https://github.com/median-man/node-package-template/blob/master/LICENSE.txt
[prettier]: https://prettier.io/

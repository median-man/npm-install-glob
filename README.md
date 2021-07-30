[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

# npm install glob

Command-line tool to recursively run `npm install` using a glob pattern to match
files. Ignores node_modules.

[Report a bug or request a feature][issues-url]

## About The Project

I teach a full-stack coding bootcamp and I'm constantly needing to install
node_modules in numerous folders. I wanted a script that I can run to
recursively install node_modules using a glob pattern to match the root
directory/ies. This script will do just that. The script will match all folders
against a pattern argument (glob notation) and recursively run `npm install` in
any folder containing a `package.json` file ignoring any `node_modules`
directories.

## Getting Started

### Prerequisites

Requires Node v12+ and npm v7+.

### Installation

Run `npm install -g npm-install-glob`.

## Usage

Run `npm-install-glob 'glob_pattern'` to run the `npm install` command on all
matching folders containing a `package.json` file. (Must wrap the glob pattern
in quotes.) Excludes `node_modules` directory. Supports globstar (`**`) in glob
pattern. See [Glob](https://github.com/isaacs/node-glob#readme) for additional
details on how glob patterns are parsed.

### Example

Given the following file tree in the working directory:

```
└───activities
    ├───01-arya
    │   │   package-lock.json
    │   │   package.json
    │   │
    │   └───node_modules
    |         ...
    │
    ├───02-jon
    │       package-lock.json
    │       package.json
    │
    ├───03-bran
    │   ├───Solved
    │   │       package.json
    │   │
    │   └───Unsolved
    │           package.json
    │
    └───04-jaime
            index.js
```

Run `npm-install-glob 'activities/**'`. (Be sure to wrap pattern in quotes.)
Results in the following output:

```
Installing activities/01-arya
Installing activities/02-jon
Installing activities/03-bran/Solved
Installing activities/03-bran/Unsolved
Finished installing dependencies.
```

File tree after running the command:

```
└───activities
    ├───01-arya
    │   │   package-lock.json
    │   │   package.json
    │   │
    │   └───node_modules
    |         ...
    │
    ├───02-jon
    │   │   package-lock.json
    │   │   package.json
    │   │
    │   └───node_modules
    │         ...
    │
    ├───03-bran
    │   ├───Solved
    │   │   │   package-lock.json
    │   │   │   package.json
    │   │   │
    │   │   └───node_modules
    │   │         ...
    │   │
    │   │
    │   └───Unsolved
    │       │   package-lock.json
    │       │   package.json
    │       │
    │       └───node_modules
    │             ...
    │
    └───04-jaime
            index.js
```

## Report Bugs and Request Features

See the [open issues][issues-url] for a list of proposed features (and known
issues).

## Contributing

Contributions are what make the open source community such an amazing place to
be learn, inspire, and create. Any contributions you make are **greatly
appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

John Desrosiers - <john.desro@gmail.com>

Project Link: <https://github.com/median-man/npm-install-glob>

## Acknowledgements

- [node-glob](https://github.com/isaacs/node-glob)
- [recursive-install](https://github.com/emgeee/recursive-install)

[contributors-url]: https://github.com/median-man/npm-install-glob/graphs/contributors
[issues-shield]: https://img.shields.io/github/issues/median-man/npm-install-glob.svg?style=for-the-badge
[issues-url]: https://github.com/median-man/npm-install-glob/issues
[license-shield]: https://img.shields.io/github/license/median-man/npm-install-glob.svg?style=for-the-badge
[license-url]: https://github.com/median-man/npm-install-glob/blob/master/LICENSE.txt

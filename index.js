#!/usr/bin/env node

const { execSync } = require("child_process");
const fs = require("fs");
const glob = require("glob");
const path = require("path");

const pattern = process.argv[2];

if (!pattern) {
  console.log("You must provide a valid glob pattern.");
  console.log("e.g. npm-glob-install '{0..3}*/**'");
  process.exit(1);
}

let matches = glob.sync(pattern);

if (matches.length === 0) {
  console.log("No matches found.");
  process.exit(0);
}

matches
  .filter(
    (file) =>
      !/node_modules/.test(file) &&
      fs.existsSync(path.join(file, "package.json"))
  )
  .forEach((file) => {
    try {
      console.log(`Installing ${file}`);
      execSync("npm install", { cwd: file });
    } catch (error) {
      console.log(`Error installing ${file}`);
    }
  });

console.log("Finished installing dependencies.");

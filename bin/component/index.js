#!/usr/bin/env node
const fs = require("fs");
const simpleComponentCreate = require("./simple");
const pageName = process.argv[2] || "example";
const checkComponents = fs.readdirSync(process.cwd());
if (!checkComponents.includes("components")) {
  fs.mkdirSync("components");
}
process.chdir("./components");
simpleComponentCreate(pageName);

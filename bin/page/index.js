#!/usr/bin/env node
const fs = require("fs");
const simplePageCreate = require("./simple");
const pageName = process.argv[2] || "example";
const checkComponents = fs.readdirSync(process.cwd());
if (!checkComponents.includes("pages")) {
  fs.mkdirSync("pages");
}
process.chdir("./pages");
simplePageCreate(pageName);

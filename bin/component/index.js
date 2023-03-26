#!/usr/bin/env node
const fs = require("fs");
const simpleComponentCreate = require("./simple");
const pageName = process.argv[2] || "example";
const extName = process.argv[3] || "js";
const dir = fs.readdirSync("../", { encoding: "utf-8" });
const checkComponents = fs.readdirSync(process.cwd());
if (!checkComponents.includes("components") && !dir.includes("components")) {
  fs.mkdirSync("components");
}
if (!dir.includes("components")) {
  process.chdir("./components");
}
simpleComponentCreate(pageName, extName);

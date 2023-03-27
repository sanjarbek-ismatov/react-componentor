const fs = require("fs");
/**
 * create simple component
 * @param {string} name
 * @param {string} extension
 */
module.exports = (name, extension) => {
  if (fs.readdirSync("./").includes(name)) {
    return process.stdout.write("Component already created!");
  }
  const fixedExtenstion = extension.match(/sx/g)
    ? extension.slice(0, 2)
    : extension;
  fs.mkdirSync(name);
  process.chdir(name);
  fs.writeFileSync(
    `index.${extension}`,
    `import './${name}.css'
function ${name}() {
  return (
    <>
      <p>Hello, ${name}</p>
    </>
  );
}
export default ${name};`.trim()
  );
  fs.writeFileSync(`${name}.css`, "");
  process.chdir("../");
  const folder = fs.readdirSync("./");
  if (!folder.includes(`index.${fixedExtenstion}`)) {
    fs.writeFileSync(`index.${fixedExtenstion}`, "");
  }
  const oldCode = fs.readFileSync(`./index.${fixedExtenstion}`, {
    encoding: "utf-8",
  });
  fs.writeFileSync(
    `./index.${fixedExtenstion}`,
    oldCode + `export {default as ${name}} from "./${name}";\n`
  );
};

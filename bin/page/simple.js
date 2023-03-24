const fs = require("fs");
/**
 * create simple page
 * @param {string} name
 */
module.exports = (name) => {
  const currentPath = process.cwd();
  fs.mkdirSync(name);
  process.chdir(name);
  fs.mkdirSync("components");
  fs.writeFileSync(`${name}.module.css`, "");
  fs.writeFileSync(
    "index.js",
    `import './${name}.module.css'
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
};

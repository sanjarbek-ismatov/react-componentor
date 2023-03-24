const fs = require("fs");
/**
 * create simple component
 * @param {string} name
 */
module.exports = (name) => {
  const currentPath = process.cwd();
  fs.mkdirSync(name);
  process.chdir(name);
  fs.writeFileSync(
    "index.js",
    `import './${name}.css'
function About() {
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

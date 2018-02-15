const chalk = require("chalk");

const message = "Hello " + chalk.yellow("World");
const error = chalk.bold.red;

console.log(message);
console.log(error('Uh-oh! It\'s an error!'));

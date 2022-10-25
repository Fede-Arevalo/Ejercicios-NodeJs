const Logger = require("logplease");
const logger = Logger.create("utils");

const esPar = (numero) => {
  return numero % 2 == 0
    ? logger.info("El número es par")
    : logger.error("El número no es par");
};

module.exports = {
  esPar,
};

/**
 * Função que valida os caracteres das rotas da ferrovia.
 * @param {string} routes
 */
function validateCharacters(routes) {
  const validCharacter = new RegExp(/^[a-e0-9, ]*$/gmi);
  if (!validCharacter.test(routes)) {
    throw new Error('Algum caractere invalido dentro das rotas, as rotas devem ser uma string possuindo apenas caracteres aceitaveis.\nCaracteres aceitaveis: Letras de A até E, numeros inteiros maior que 0, e ","(virgula) para separação das rotas.');
  }
}

function validateFormat(routes) {
  const arrRoutes = routes.split(',');
  arrRoutes.forEach((elem) => {
    if (!elem.trim().match(/^[a-e]{2}[1-9][0-9]*$/gi)) {
      throw new Error(`Formato da rota "${elem}" é invalido, formato padrão das rotas: letra(A-E)|letra(A-E)|numero(inteiro > 0), Ex: AB3, CA6.`);
    }
  });
}

exports.validateRoutes = (routes) => {
  validateCharacters(routes);
  validateFormat(routes);

  return routes;
};

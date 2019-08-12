const readline = require('readline-sync');

const Routes = require('./classes/Routes');

function start() {
  console.log('Bem vindo(a) ao controle de ferrovias!');
  console.log('Formato padrão das rotas: letra(A-E)|letra(A-E)|numero(inteiro > 0), Ex: AB3, CA6.');
  console.log('Lembrando que as rotas devem ser separadas por ",".');
  const routesInput = readline.question('Digite as rotas desta ferrovia:');

  const routesClass = new Routes(routesInput);

  const firstAnswer = routesClass.distanceBetween('A', 'C', ['B']);
  const secondAnswer = routesClass.distanceBetween('A', 'D');
  const thirdAnswer = routesClass.distanceBetween('A', 'C', ['D']);
  const fourthAnswer = routesClass.distanceBetween('A', 'D', ['E', 'B', 'C']);
  const fifthAnswer = routesClass.distanceBetween('A', 'D', ['E']);

  // Em teste
  const sixthAnswer = routesClass.tripsWithMaxOrEqualStops('C', 'C', 3);
  const seventhAnswer = routesClass.tripsWithMaxOrEqualStops('A', 'C', 4, true);

  console.log(`Output #1: ${firstAnswer}`);

  console.log(`Output #2: ${secondAnswer}`);

  console.log(`Output #3: ${thirdAnswer}`);

  console.log(`Output #4: ${fourthAnswer}`);

  console.log(`Output #5: ${fifthAnswer}`);

  console.log(`Output #6: ${sixthAnswer} "EM TESTE"`);

  console.log(`Output #7: ${seventhAnswer} "EM TESTE"`);
}

start();

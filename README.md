# trains

# Arquitetura:
O projeto foi desenvolvido com o uso da linguagem javaScript juntamente com Node para execução no backEnd, foi projetado de maneira simples e com o mínimo de bibliotecas externas possíveis,projetado na forma de Controller/Classe onde o index executa a classe que executa os controllers caso necessario, com este formato torna-se fácil a evolução da aplicação para outra estrutura como API por exemplo.

# Estrutura de pastas:
 * [classes](./classes)
   * [Routes.js](./classes/Routes.js)
 * [controllers](./controllers)
   * [validate.js](./controllers/validate.js)
 * [index.js](./index.js)
 * [.gitignore](./.gitignore)
 * [package-lock.json](./package-lock.json)
 * [README.md](./README.md)
 * [package.json](./package.json)

# Tecnologias Usadas:
 * NodeJs v10.16.0 (Execução do código)
 * NPM v6.10.3 (Gerenciador de pacotes)

# Pacotes usados:
 * readline-sync (gerencia os inputs de forma sincrona e simplificada)
 * eslint (padronização de codigo e performance, utilização do Style Guide do Airbnb)

# Execução:
 * Checar se o **Node** e **NPM** estão previamente instalados,
   * caso os mesmos não se encontrem na maquina os links são: https://nodejs.org/pt-br/ e https://www.npmjs.com/get-npm respectivamente.
 * Após a checagem/instalação, executar o comando **npm i**, após o termino do comando anterior executar: **node index.js** ou **npm start**.

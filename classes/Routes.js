const validateController = require('../controllers/validate');

module.exports = class Routes {
  constructor(routes) {
    const validateRoutes = validateController.validateRoutes(routes);

    const arrRoutes = validateRoutes.split(',').map(item => item.trim());
    const roots = arrRoutes.map(elem => ({
      // Local de partida da rota
      from: elem[0].toUpperCase(),
      // Local de chegada da rota.
      to: elem[1].toUpperCase(),
      // Distancia desta rota.
      distance: elem.substring(2),
    }));

    this.arrRoutes = roots;
  }

  /**
   * Metodo que calcula a distancia entre os pontos.
   * @param {string} from
   * @param {string} to
   * @param {array} stops
   */
  distanceBetween(from, to, stops = []) {
    if (stops && !Array.isArray(stops)) {
      throw new Error('Formato de parada invalido, digite os pontos de parada dentro de um array.');
    }

    // validar os pontos de parada (ser entre as letras a-d)

    let distance = 0;
    let fromFormated = from.toUpperCase();
    const { arrRoutes } = this;

    stops.push(to.toUpperCase());

    for (const stop of stops) {
      const result = arrRoutes.find(routes => routes.from === fromFormated && routes.to === stop);

      if (!result) {
        return 'NO SUCH ROUTE';
      }

      distance += Number(result.distance);
      fromFormated = result.to;
    }
    return distance;
  }

  /**
   * Metodo que pega a quantidade de rotas,
   * que tenham o numero de paradas total menor ou igual a passada por parametro.
   * Tendo opção de pegar apenas as rotas com a quantidade de paradas igual a passada por parametro.
   * @param {string} from
   * @param {string} to
   * @param {number} quantityStops
   * @param {boolean} equal
   */
  tripsWithMaxOrEqualStops(from, to, quantityStops, equal = false) {
    let tripsQty = 0;

    const ola = [...this.arrRoutes];

    let log = [];
    let fromFormated = from.toUpperCase();
    for (let stops = 1; stops <= quantityStops; stops += 1) {
      const cacheLog = [];
      const possibleRoutes = ola.filter((routes) => {
        if (fromFormated.includes(routes.from)) {
          const logFinded = log.find((logElem) => {
            if (logElem.lastRoute.to === routes.from) {
              cacheLog.push({
                historicRoute: logElem.historicRoute.concat(routes),
                lastRoute: routes,
              });
              return true;
            }
            return false;
          });

          if (!logFinded) {
            log.push({
              historicRoute: [routes],
              lastRoute: routes,
            });
          }

          if (!equal && routes.to === to.toUpperCase()) {
            tripsQty += 1;
          } else if (equal && stops === quantityStops && routes.to === to.toUpperCase()) {
            // Realizar um tratamento diferente para os que entram em loop.
            tripsQty += 1;
          }
          return true;
        }
        return false;
      });

      if (cacheLog.length) {
        log = cacheLog;
      }

      fromFormated = possibleRoutes.map(value => value.to);
    }
    return tripsQty;
  }
};

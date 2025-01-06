const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const stats = {};

  domains.forEach(domain => {
    const parts = domain.split('.').reverse();

    let dnsPart = '';
    
    for (let i = 0; i < parts.length; i++) {
      dnsPart =  dnsPart + '.' + parts[i];  

      if (!stats[dnsPart]) {
        stats[dnsPart] = 1;
      } else {
        stats[dnsPart] += 1;
      }
    }
  });

  return stats;
}

module.exports = {
  getDNSStats
};

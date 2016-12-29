/* @flow */
import arrayFrom from 'array-from';

/**
 * sanketa
 *
 * @param {number|string} rawChars - raw chars
 * @param {Object} [opts] - options
 * @param {boolean} [opts.reverse] - reverse flag
 * @param {number|string} [opts.sepalater] - sepalater
 * @param {boolean} [opts.signOfNumber] - if true, put a signed numbers
 * @return {string}
 */
export default function sanketa(rawChars: (number|string), opts: Object = {}): string {
  const digits = 3;
  const separater = opts.sepalater ? opts.sepalater : ',';
  let chars = rawChars;
  let snum = 0;

  chars = typeof chars === 'number' ? Math.abs(chars).toString() : chars;
  chars = opts.reverse ? chars : reverse(chars);
  chars = arrayFrom(chars).map((c, key, map) => {
    if (key < map.length - 1) {
      if (key % digits === 2) {
        if (typeof separater === 'object' && separater instanceof Array) {
          snum = snum < separater.length ? snum + 1 : 1;
          return c + separater[snum - 1];
        }
        return c + separater;
      }
    }
    return c;
  }).join('');

  let results = opts.reverse ? chars : reverse(chars);
  if (typeof rawChars === 'number') {
    if (opts.signOfNumber) {
      results = rawChars < 0 ? `-${results}` : `+${results}`;
    } else {
      results = rawChars < 0 ? `-${results}` : results;
    }
  }
  return results;
}

/**
 * reverse function
 *
 * @param {string} chars - chars
 * @return {string} reversed chars
 */
function reverse(chars: string): string {
  return arrayFrom(chars).reverse().join('');
}

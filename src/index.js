/* @flow */
/**
 * sanketa
 *
 * @param {number|string} rawChars - raw chars
 * @param {Object} [opts] - options
 * @param {boolean} [opts.r] - reverse flag
 * @param {number|string} [opts.s] - sepalater
 * @return {string}
 */
export default function sanketa(rawChars: (number|string), opts: Object = {}): string {
  const digits = 3;
  const separater = opts.s ? opts.s : ',';
  let chars = rawChars;
  let snum = 0;

  chars = typeof chars === 'number' ? chars.toString() : chars;
  chars = opts.r ? chars : reverse(chars);
  chars = Array.from(chars).map((c, key, map) => {
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
  return opts.r ? chars : reverse(chars);
}

/**
 * reverse function
 *
 * @param {string} chars - chars
 * @return {string} reversed chars
 */
function reverse(chars: string): string {
  return Array.from(chars).reverse().join('');
}

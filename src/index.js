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
  const sepalater = opts.s ? opts.s : ',';
  let chars = rawChars;
  let snum = 0;

  chars = typeof chars === 'number' ? chars.toString() : chars;
  chars = opts.r ? reverse(chars) : chars;
  chars = chars.split('').map((c, key) => {
    if (key % digits === 2) {
      if (typeof sepalater === 'object' && sepalater instanceof Array) {
        snum = snum < sepalater.length ? snum + 1 : 1;
        return c + sepalater[snum - 1];
      }
      return c + sepalater;
    }
    return c;
  }).join('');
  return opts.r ? reverse(chars) : chars;
}

/**
 * reverse function
 *
 * @param {string} chars - chars
 * @return {string} reversed chars
 */
function reverse(chars: string): string {
  return chars.split('').reverse().join('');
}

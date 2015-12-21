'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sanketa;

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

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
function sanketa(rawChars /*: (number|string)*/) /*: string*/ {
  var opts /*: Object*/ = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  var digits = 3;
  var sepalater = opts.s ? opts.s : ',';
  var chars = rawChars;
  var snum = 0;

  chars = typeof chars === 'number' ? chars.toString() : chars;
  chars = opts.r ? reverse(chars) : chars;
  chars = chars.split('').map(function (c, key) {
    if (key % digits === 2) {
      if ((typeof sepalater === 'undefined' ? 'undefined' : _typeof(sepalater)) === 'object' && sepalater instanceof Array) {
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
function reverse(chars /*: string*/) /*: string*/ {
  return chars.split('').reverse().join('');
}

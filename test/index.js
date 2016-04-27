import assert from 'assert';
import sanketa from '../src/index';

/** @test {sanketa} */
describe('sanketa', () => {
  it('is funtion', () => {
    assert(typeof sanketa === 'function');
  });

  it('should return string', () => {
    const n = 1234567890;
    assert(sanketa('characters') === 'c,har,act,ers');
    assert(sanketa(n) === '1,234,567,890');
  });

  it('if reverse opts is false, should return three digits from before', () => {
    assert(sanketa('characters', {reverse: true}) === 'cha,rac,ter,s');
  });

  it('should finally the separator no', () => {
    assert(sanketa('character') === 'cha,rac,ter');
  });

  describe('should return texts of custom sepalates', () => {
    it('is Number or String', () => {
      assert(sanketa('characters', {sepalater: 'A'}) === 'cAharAactAers');
      assert(sanketa('characters', {sepalater: 1}) === 'c1har1act1ers');
      assert(sanketa('characters', {sepalater: '🍣'}) === 'c🍣har🍣act🍣ers');
    });

    it('is Array', () => {
      assert(sanketa('characters', {sepalater: ['🍣', '🍵']}) === 'c🍣har🍵act🍣ers');
    });
  });

  describe('should return number of signed', () => {
    it('flag is true', () => {
      assert(sanketa(123, {signOfNumber: true}) === '+123');
      assert(sanketa(-123, {signOfNumber: true}) === '-123');
      assert(sanketa(12345, {signOfNumber: true}) === '+12,345');
      assert(sanketa(-12345, {signOfNumber: true}) === '-12,345');
    });

    it('flag is false', () => {
      assert(sanketa(123) === '123');
      assert(sanketa(-123) === '-123');
      assert(sanketa(12345) === '12,345');
      assert(sanketa(-12345) === '-12,345');
    });
  });

  it('if typeof string should not return number of signed', () => {
    assert(sanketa('123', {signOfNumber: true}) === '123');
    assert(sanketa('-123', {signOfNumber: true}) === '-,123');
    assert(sanketa('12345', {signOfNumber: true}) === '12,345');
    assert(sanketa('-12345', {signOfNumber: true}) === '-12,345');
  });

});

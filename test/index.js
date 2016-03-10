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
    assert(sanketa('characters', {r: true}) === 'cha,rac,ter,s');
  });

  it('should finally the separator no', () => {
    assert(sanketa('character') === 'cha,rac,ter');
  });

  describe('should return texts of custom sepalates', () => {
    it('is Number or String', () => {
      assert(sanketa('characters', {s: 'A'}) === 'cAharAactAers');
      assert(sanketa('characters', {s: 1}) === 'c1har1act1ers');
      assert(sanketa('characters', {s: '🍣'}) === 'c🍣har🍣act🍣ers');
    });

    it('is Array', () => {
      assert(sanketa('characters', {s: ['🍣', '🍵']}) === 'c🍣har🍵act🍣ers');
    });
  });
});

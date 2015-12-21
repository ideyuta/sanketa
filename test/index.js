import assert from 'assert';
import sanketa from '../src/index';

/** @test {sanketa} */
describe('sanketa', () => {
  it('is funtion', () => {
    assert(typeof sanketa === 'function');
  });

  it('should return string', () => {
    const n = 1234567890;
    assert(sanketa('characters') === 'cha,rac,ter,s');
    assert(sanketa(n) === '123,456,789,0');
  });

  it('if reverse opts is true should return reverse three digits', () => {
    assert(sanketa('characters', {r: true}) === 'c,har,act,ers');
  });

  it('should finally the separator no', () => {
    assert(sanketa('character') === 'cha,rac,ter');
  });

  describe('should return texts of custom sepalates', () => {
    it('is Number or String', () => {
      assert(sanketa('characters', {s: 'A'}) === 'chaAracAterAs');
      assert(sanketa('characters', {s: 1}) === 'cha1rac1ter1s');
      assert(sanketa('characters', {s: '🍣'}) === 'cha🍣rac🍣ter🍣s');
    });

    it('is Array', () => {
      assert(sanketa('characters', {s: ['🍣', '🍵']}) === 'cha🍣rac🍵ter🍣s');
    });
  });
});

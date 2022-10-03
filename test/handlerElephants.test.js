const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('If no param returns undefined', () => {
    expect(handlerElephants()).toBe(undefined);
  });
  it('If param isnt a string returns a invalid param message', () => {
    expect(handlerElephants(7)).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('If param has the same name of the key return the key value', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('If param is count return elephants.residents.length', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('If param is names return elephants names', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('If param is averageAge return elephants average ages', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
  it('If param is a string and doesnt match with switch cases return null', () => {
    expect(handlerElephants('qualquerCoisa')).toBe(null);
  });
});

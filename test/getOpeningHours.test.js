const { hours } = require('../data/zoo_data');
const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('No params return an array hours', () => {
    expect(getOpeningHours()).toEqual(hours);
  });
  it('Params Monday and 09:00-AM return the zoo is closed', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });
  it('Params Tuesday and 04:00-PM return the zoo is open', () => {
    expect(getOpeningHours('Tuesday', '04:00-PM')).toBe('The zoo is open');
  });
  it('Second param is anything diferent of the correct format return an specific Error', () => {
    expect(() => getOpeningHours('Friday', 'what')).toThrow(new Error('The hour should represent a number'));
  });
  it('Second param isnt has AM-PM return an specific Error', () => {
    expect(() => getOpeningHours('Wednesday', '04:00-SM')).toThrow(new Error('The abbreviation must be \'AM\' or \'PM\''));
  });
  it('Second param has incorrect hour format return an specific Error', () => {
    expect(() => getOpeningHours('Friday', '14:00-PM')).toThrow(new Error('The hour must be between 0 and 12'));
  });
  it('Second param has incorrect minute format return an specific Error', () => {
    expect(() => getOpeningHours('Friday', '04:70-PM')).toThrow(new Error('The minutes must be between 0 and 59'));
  });
  it('First param isnt a week day return an specific Error', () => {
    expect(() => getOpeningHours('Frayday', '04:10-PM')).toThrow(new Error('The day must be valid. Example: Monday'));
  });
});

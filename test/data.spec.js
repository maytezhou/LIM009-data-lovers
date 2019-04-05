global.window = global;
require('../src/data');
require('./data.spec.js');
const input =arrDataWorldBankPeru;
const output=worldBank.getInitialsIndicatorCodeValues(arrDataWorldBankPeru);

describe('getInitialsIndicatorCodeValues', () => {
  
  it('debería ser una función', () => {
    expect(typeof worldBank.getInitialsIndicatorCodeValues).toBe('function');
  });

  it('debería retornar "example"', () => {
    expect(worldBank.getInitialsIndicatorCodeValues(input)).toEqual(output);
  });
})

import { TestScheduler } from 'jest';
import AgeCalculator from '../src/age-calculator.js';

describe ('Test', () => {
  let newTest; 
  beforeEach(() => {
    let age = 88;
    let expectancy = 73
    newTest = new AgeCalculator(age, expectancy);
  });

  test('should return the age in Earth years', () => {
    expect(newTest.earthCalculator()).toEqual(30);
  })

  test('should return the age in Mercury years', () => {
    expect(newTest.mercuryCalculator()).toEqual(7)
  })

  test('should return the age in Venus years', () => {
    expect(newTest.venusCalculator()).toEqual(19)
  })

  test('should return the age in Mars years', () => {
    expect(newTest.marsCalculator()).toEqual(56)
  })

  test('should return the age in Jupiter years', () => {
    expect(newTest.jupiterCalculator()).toEqual(356)
  })

  test('should return the number of years left to live on Earth', () => {
    expect(newTest.yearsRemain()).toEqual(43)
  })

  test('should return the number of years past lives past life expectancy if current age exceeds average life expectancy', () => {
    expect(newTest.yearsExceed()).toEqual('You have lived 15 years beyond average life expectancy.')
  })

})
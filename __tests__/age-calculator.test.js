import { TestScheduler } from 'jest';
import AgeCalculator from '../src/age-calculator.js';

describe ('Test', () => {
  let newTest; 
  beforeEach(() => {
    let age = 30;
    let expectancy = 73;
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

  test('should either return the number of years left to live on Earth or if current age exceeds average life expectancy, return the number of years lived beyond life expectancy', () => {
    expect(newTest.lifeCalculator()).toEqual('You have 43 years left to live before reaching average life expectancy on Earth.')
  })
})
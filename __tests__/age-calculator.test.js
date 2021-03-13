import { TestScheduler } from 'jest';
import AgeCalculator from '../src/age-calculator.js';

describe ('Test', () => {
  let newTest; 
  beforeEach(() => {
    let age = 30;
    newTest = new AgeCalculator(age);
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






})
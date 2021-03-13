import AgeExpectancy from '../src/age-expectancy.js';

describe ('Test', () => {
  let expectancyTest;
  beforeEach(() => {
    let region = "Americas";
    let gender = "female";
    let tobacco = "heavy";
    let alcohol = "moderate";
    // let region = $("#region").val();
    // let gender = $("#gender").val();
    // let tobacco = $("#tobacco").val();
    // let alcohol = $("#alcohol").val();
    expectancyTest = new AgeExpectancy(region, gender, tobacco, alcohol)
  });

  test('should return average life expectancy based on region', () => {
    expect(expectancyTest.regionCalculator()).toEqual(77);
  })

  test('should return average life expectancy based on gender', () => {
    expectancyTest.regionCalculator();
    expect(expectancyTest.genderCalculator()).toEqual(82);
  })

  test('should return average life expectancy based on tobacco use', () => {
    expectancyTest.regionCalculator();
    expectancyTest.genderCalculator();
    expect(expectancyTest.tobaccoCalculator()).toEqual(69);
  })

  test('should return average life expectancy based on alcohol use', () => {
    expectancyTest.regionCalculator();
    expectancyTest.genderCalculator();
    expectancyTest.tobaccoCalculator();
    expect(expectancyTest.alcoholCalculator()).toEqual(67);
  })
})
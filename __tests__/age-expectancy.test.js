import AgeExpectancy from './../src/js/age-expectancy.js';

describe ('Test', () => {
  let expectancyTest;
  beforeEach(() => {
    let age = 30;
    let region = "Americas";
    let gender = "female";
    let tobacco = "heavy";
    let alcohol = "moderate";
    expectancyTest = new AgeExpectancy(age, region, gender, tobacco, alcohol)
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
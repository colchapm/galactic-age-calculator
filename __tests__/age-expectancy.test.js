import AgeExpectancy from '../src/age-expectancy.js';

describe ('Test', () => {
  let expectancyTest;
  beforeEach(() => {
    let region = "Americas";
    let gender = "Male";
    let tobacco = "Socially";
    let alcohol = "2-5 Drinks Per Week";
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
      expect(expectancyTest.genderCalculator()).toEqual(77);
    })


})
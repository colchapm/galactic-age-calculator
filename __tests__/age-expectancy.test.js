import AgeExpectancy from './../src/js/age-expectancy.js';


describe ('AgeExpectancy', () => {
  test('should  return average life expectancy based on region', () => {
    const age = 30;
    const region = "Americas";
    const gender = "female";
    const tobacco = "heavy";
    const alcohol = "moderate";
    const newTest = new AgeExpectancy(age, region, gender, tobacco, alcohol);
    expect(newTest.regionCalculator()).toEqual(77);
  });
});

describe ('AgeExpectancy', () => {
  test('should  return average life expectancy based on region', () => {
    const age = 30;
    const region = "Africa";
    const gender = "female";
    const tobacco = "heavy";
    const alcohol = "moderate";
    const newTest = new AgeExpectancy(age, region, gender, tobacco, alcohol);
    expect(newTest.regionCalculator()).toEqual(64);
  });
});

describe ('AgeExpectancy', () => {
  test('should  return average life expectancy based on region', () => {
    const age = 30;
    const region = "Eastern Mediterranean";
    const gender = "female";
    const tobacco = "heavy";
    const alcohol = "moderate";
    const newTest = new AgeExpectancy(age, region, gender, tobacco, alcohol);
    expect(newTest.regionCalculator()).toEqual(70);
  });
});

describe ('AgeExpectancy', () => {
  test('should  return average life expectancy based on region', () => {
    const age = 30;
    const region = "Europe";
    const gender = "female";
    const tobacco = "heavy";
    const alcohol = "moderate";
    const newTest = new AgeExpectancy(age, region, gender, tobacco, alcohol);
    expect(newTest.regionCalculator()).toEqual(78);
  });
});

describe ('AgeExpectancy', () => {
  test('should  return average life expectancy based on region', () => {
    const age = 30;
    const region = "Western Pacific";
    const gender = "female";
    const tobacco = "heavy";
    const alcohol = "moderate";
    const newTest = new AgeExpectancy(age, region, gender, tobacco, alcohol);
    expect(newTest.regionCalculator()).toEqual(78);
  });
});

describe ('AgeExpectancy', () => {
  test('should  return average life expectancy based on region', () => {
    const age = 30;
    const region = "South-East Asia";
    const gender = "female";
    const tobacco = "heavy";
    const alcohol = "moderate";
    const newTest = new AgeExpectancy(age, region, gender, tobacco, alcohol);
    expect(newTest.regionCalculator()).toEqual(71);
  });
});

describe ('AgeExpectancy', () => {
  test('should return average life expectancy based on gender', () => {
    const age = 30;
    const region = "Americas";
    const gender = "female";
    const tobacco = "heavy";
    const alcohol = "moderate";
    const newTest = new AgeExpectancy(age, region, gender, tobacco, alcohol);
    newTest.regionCalculator();
    expect(newTest.genderCalculator()).toEqual(82);
  });
});

describe ('AgeExpectancy', () => {
  test('should return average life expectancy based on gender', () => {
    const age = 30;
    const region = "Americas";
    const gender = "male";
    const tobacco = "heavy";
    const alcohol = "moderate";
    const newTest = new AgeExpectancy(age, region, gender, tobacco, alcohol);
    newTest.regionCalculator();
    expect(newTest.genderCalculator()).toEqual(77);
  });
});

describe ('AgeExpectancy', () => {
  test('should return average life expectancy based on tobacco use', () => {
    const age = 30;
    const region = "Americas";
    const gender = "female";
    const tobacco = "never";
    const alcohol = "moderate";
    const newTest = new AgeExpectancy(age, region, gender, tobacco, alcohol);
    newTest.regionCalculator();
    newTest.genderCalculator();
    expect(newTest.tobaccoCalculator()).toEqual(82);
  });
});

describe ('AgeExpectancy', () => {
  test('should return average life expectancy based on tobacco use', () => {
    const age = 30;
    const region = "Americas";
    const gender = "female";
    const tobacco = "social";
    const alcohol = "moderate";
    const newTest = new AgeExpectancy(age, region, gender, tobacco, alcohol);
    newTest.regionCalculator();
    newTest.genderCalculator();
    expect(newTest.tobaccoCalculator()).toEqual(78);
  });
});


describe ('AgeExpectancy', () => {
  test('should return average life expectancy based on tobacco use', () => {
    const age = 30;
    const region = "Americas";
    const gender = "female";
    const tobacco = "social";
    const alcohol = "moderate";
    const newTest = new AgeExpectancy(age, region, gender, tobacco, alcohol);
    newTest.regionCalculator();
    newTest.genderCalculator();
    expect(newTest.tobaccoCalculator()).toEqual(78);
  });
});

describe ('AgeExpectancy', () => {
  test('should return average life expectancy based on alcohol use', () => {
    const age = 30;
    const region = "Americas";
    const gender = "female";
    const tobacco = "heavy";
    const alcohol = "never";
    const newTest = new AgeExpectancy(age, region, gender, tobacco, alcohol);
    newTest.regionCalculator();
    newTest.genderCalculator();
    newTest.tobaccoCalculator();
    expect(newTest.alcoholCalculator()).toEqual(69);
  });
});

describe ('AgeExpectancy', () => {
  test('should return average life expectancy based on alcohol use', () => {
    const age = 30;
    const region = "Americas";
    const gender = "female";
    const tobacco = "heavy";
    const alcohol = "minimal";
    const newTest = new AgeExpectancy(age, region, gender, tobacco, alcohol);
    newTest.regionCalculator();
    newTest.genderCalculator();
    newTest.tobaccoCalculator();
    expect(newTest.alcoholCalculator()).toEqual(69);
  });
});

describe ('AgeExpectancy', () => {
  test('should return average life expectancy based on alcohol use', () => {
    const age = 30;
    const region = "Americas";
    const gender = "female";
    const tobacco = "heavy";
    const alcohol = "moderate";
    const newTest = new AgeExpectancy(age, region, gender, tobacco, alcohol);
    newTest.regionCalculator();
    newTest.genderCalculator();
    newTest.tobaccoCalculator();
    expect(newTest.alcoholCalculator()).toEqual(67);
  });
});

describe ('AgeExpectancy', () => {
  test('should return average life expectancy based on alcohol use', () => {
    const age = 30;
    const region = "Americas";
    const gender = "female";
    const tobacco = "heavy";
    const alcohol = "heavy";
    const newTest = new AgeExpectancy(age, region, gender, tobacco, alcohol);
    newTest.regionCalculator();
    newTest.genderCalculator();
    newTest.tobaccoCalculator();
    expect(newTest.alcoholCalculator()).toEqual(64);
  });
});

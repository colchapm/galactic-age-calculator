export default class AgeCalculator {
  constructor(age, expectancy) {
    this.age = age;
    this.expectancy = expectancy
}

  earthCalculator() {
    let earthAge = this.age * 1.0;
    return earthAge;
}

  mercuryCalculator() {
    let mercuryAge = Math.round(this.age * .24)
    return mercuryAge;
  }

  venusCalculator() {
    let venusAge = Math.round(this.age * .62)
    return venusAge;
  }

  marsCalculator() {
    let marsAge = Math.round(this.age * 1.88)
    return marsAge;
  }

  jupiterCalculator() {
    let jupiterAge = Math.round(this.age * 11.86)
    return jupiterAge;
  }

  yearsRemain() {
    let toGo = Math.round(this.expectancy - this.age)
    return toGo;
  }

  yearsExceed() {
    if (this.age > this.expectancy) {
      let yearsBeyond = Math.round(this.age - this.expectancy)
      return (`You have lived ${yearsBeyond} years beyond average life expectancy.`);
    } else {
    }
    }
  }
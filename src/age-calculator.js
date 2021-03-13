export default class AgeCalculator {
  constructor(age) {
    this.age = age;
}

  earthCalculator() {
    let earthAge = this.age * 1.0;
    return earthAge;
}

  mercuryCalculator() {
    let mercuryAge = Math.round(this.age * .24)
    return mercuryAge;
  }


}
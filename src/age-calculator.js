export default function AgeCalculator(age) {
  this.age = age;
}

AgeCalculator.prototype.earthCalculator = function () {
  let earthAge = this.age * 1.0;
  return earthAge;
}
//Business Logic

export default class AgeExpectancy {
  constructor (region, gender, tobacco, alcohol) {
    this.region = region;
    this.gender = gender;
    this.tobacco = tobacco;
    this.alcohol = alcohol;
    this.ageExpectancy = 0;
  }

  regionCalculator() {
    if (this.region === "Americas") {
      this.ageExpectancy = 77;
    } 
    else if (this.region === "Africa") {
      this.ageExpectancy = 64;
    } 
    else if (this.region === "Eastern Mediterranean") {
      this.ageExpectancy = 70;
    } 
    else if (this.region === "Europe") {
      this.ageExpectancy = 78;
    } 
    else if (this.region === "Western Pacific") {
      this.ageExpectancy = 78;
    } 
    else {
      this.ageExpectancy = 71;
    }
    return this.ageExpectancy;
  }

  genderCalculator() {
    if (this.gender === "female") {
      this.ageExpectancy += 5;
      return this.ageExpectancy;
    } 
    else {
      return this.ageExpectancy;
    }
  }


}


//User Interface Logic

// $(document).ready(function() {
//   $("form#userInput").submit(function(event)
//     event.preventDefault();
//     let age = $("#userAge").val();
//     let region = $("#region").val();
//     let gender = $("#gender").val();
//     let tobacco = $("#tobacco").val();
//     let alcohol = $("#alcohol").val();
// })

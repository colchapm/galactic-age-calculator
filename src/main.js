import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import AgeCalculator from './js/age-calculator.js';
import AgeExpectancy from './js/age-expectancy.js';


$(document).ready(function() {
  $("form#userInput").submit(function(event) {
    event.preventDefault();
    let age = $("#userAge").val();
    let region = $("#region").val();
    let gender = $("input:radio[name=gender]:checked").val();
    let tobacco = $("input:radio[name=tobacco]:checked").val();
    let alcohol = $("input:radio[name=alcohol]:checked").val();

    let userInfo = new AgeExpectancy(age, region, gender, tobacco, alcohol);

    userInfo.regionCalculator();
    userInfo.genderCalculator();
    userInfo.tobaccoCalculator();
    userInfo.alcoholCalculator();
    const userLifeExpectancy = userInfo.ageExpectancy;

    let solarAge = new AgeCalculator(age, userLifeExpectancy);

    const mercuryAge = solarAge.mercuryCalculator();
    const venusAge = solarAge.venusCalculator();
    const marsAge = solarAge.marsCalculator();
    const jupiterAge = solarAge.jupiterCalculator();
    const ageComment = solarAge.lifeCalculator();

    $("#mercuryAge").text(mercuryAge);
    $("#venusAge").text(venusAge);
    $("#marsAge").text(marsAge);
    $("#jupiterAge").text(jupiterAge);
    $("#expectancy").text(userLifeExpectancy);
    $("#ageComment").text(ageComment);
  });
});


// $(document).ready(function() {
//   $("form#userInput").submit(function(event) {
//     event.preventDefault();
//     let age = $("#userAge").val();
//     let expectancy = userLifeExpectancy;

//     let solarAge = new AgeCalculator(age, expectancy);

//     const mercuryAge = solarAge.mercuryCalculator();
//     const venusAge = solarAge.venusCalculator();
//     const marsAge = solarAge.marsCalculator();
//     const jupiterAge = solarAge.jupiterCalculator();

//     $("#mercuryAge").text(mercuryAge);
//     $("#venusAge").text(venusAge);
//     $("#marsAge").text(marsAge);
//     $("#jupiterAge").text(jupiterAge);

//   });
// });
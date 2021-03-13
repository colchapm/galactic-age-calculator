import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
//import AgeCalculator from '../src/age-calculator.js';
import AgeExpectancy from '../src/age-expectancy.js';


$(document).ready(function() {
  $("form#userInput").submit(function(event) {
    event.preventDefault();
    let age = $("#userAge").val();
    let region = $("#region").val();
    let gender = $("#gender").val();
    let tobacco = $("#tobacco").val();
    let alcohol = $("#alcohol").val();

    let userInfo = new AgeExpectancy(age, region, gender, tobacco, alcohol);

    userInfo.regionCalculator();
    userInfo.genderCalculator();
    userInfo.tobaccoCalculator();
    userInfo.alcoholCalculator();
    const userLifeExpectancy = userInfo.ageExpectancy;
})
})
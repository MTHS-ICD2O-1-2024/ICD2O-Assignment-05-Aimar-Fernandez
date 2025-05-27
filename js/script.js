// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Aimar Fernandez
// Created on: May 2025
// This file contains the JS functions for index.html

"use strict"

function myButtonClicked() {
  let termOne = 2
  let termTwo = 1
  let termAnswer = 0
  const numberOfTerms = parseInt(document.getElementById("number-of-terms").value)
  if(numberOfTerms < 1) {
    document.getElementById("answer").innerHTML = 
      "<p>Error, number must be positive integer</p>"
  }
  else if (numberOfTerms == 1) {
    document.getElementById("answer").innerHTML = 
      "<p>Number is: 2</p>"
  }
  else if (numberOfTerms == 2) {
    document.getElementById("answer").innerHTML = 
      "<p>Number is: 1</p>"
  }
  else {
    for (let counter = 2; counter < numberOfTerms; counter++) {
      termAnswer = termOne + termTwo
      termOne = termTwo
      termTwo = termAnswer
    }
    document.getElementById("answer").innerHTML = 
    "<p>Number is: " + termAnswer + "</p>"
  }
}

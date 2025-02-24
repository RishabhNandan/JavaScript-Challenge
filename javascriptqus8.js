//Question - Write a program which enter annual family income and of a person and if the income is from 1 lakh
	//to 2 lakh and age is also form 18 to 24 then print eligible for scholorship, otherwise print not 
	//eligible for scholorship.
    
let income = 150000; 
let age = 20; 
let isEligible = income >= 100000 && income <= 200000 && age >= 18 && age <= 24;
console.log(isEligible ? "Eligible for scholarship" : "Not eligible for scholarship");
Question - Write a program which enter marks in three subject of a students and calculate its average, independing on the average
	check and print the division according to following rule.
	
	Average                      Division
	60+                           First
	45 - <60                      Second
	33 - <45                      third
	<33                           Fails
Solve:-let subject1 = 70; 
let subject2 = 65; 
let subject3 = 80; 
let average = (subject1 + subject2 + subject3) / 3;
let division = 
    average >= 60 ? "First" :
    average >= 45 ? "Second" :
    average >= 33 ? "Third" :
    "Fail";
console.log("Average:", average);
console.log("Division:", division);

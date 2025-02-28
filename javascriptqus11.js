Question - Write a MENU DRIVEN program, which calculate and print the area of squar or circle depending on the users coice
from the menu.
		step 1 -
				  1. ...........Area of Square
				  2. ...........Area of circle
				Enter your choice?
					   
		Step 2 - 
				Depending on choice it should ask:
				Enter side of square?
				or
				Enter radius of circle?
				   
		Step 3 -
				output As-
				Area of Square whose side is ..... is .....
				or
				Area of circle whose Radius is ...... is ......

Solve:-console.log("1. Area of Square");
console.log("2. Area of Circle");
let choice = parseInt(prompt("Enter your choice (1 or 2):"));
if (choice =1) {
    let side = parseFloat(prompt("Enter the side of the square:"));
    let area = side * side;
    console.log(`Area of Square whose side is ${side} is ${area.toFixed(2)}`);
} else if (choice =2) {
    let radius = parseFloat(prompt("Enter the radius of the circle:"));
    let area = Math.PI * radius * radius; 
    console.log(`Area of Circle whose radius is ${radius} is ${area.toFixed(2)}`);
} else {
    console.log("Invalid choice! Please select 1 or 2.");
}

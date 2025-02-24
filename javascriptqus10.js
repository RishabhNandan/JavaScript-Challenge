//Question - WAP which enter sex code of a person as M or m for male, or F or f form female then test and print whether
//the given data is of male, female or it was wrong code, enter by user.
let sexCode = 'm';
if (sexCode === 'M' || sexCode === 'm') {
    console.log("Male");
} else if (sexCode === 'F' || sexCode === 'f') {
    console.log("Female");
} else {
    console.log("Wrong code");
}
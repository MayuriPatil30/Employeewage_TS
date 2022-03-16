
console.log("Welcome to Employee Wage Computation");

var Is_Present: number = 1;
var Rate_Per_Hr: number = 20;
var Fday_Hr: number = 8;
var Part_Hr: number = 4;

var empCheck: number = Math.floor(Math.random() * 10) % 2;

if (empCheck == 1) {
    console.log("Emplyoee is Present");
    console.log("Daily wage is " + (Rate_Per_Hr * Fday_Hr));

} else if (empCheck == 2) {
    console.log("Emplyoee is Present");
    console.log("Part time daily wage:" + (Rate_Per_Hr * Part_Hr))
}
else {
    console.log("Emplyoee is absent");
}






console.log("Welcome to Employee Wage Computation");
var Is_Present = 1;
var Rate_Per_Hr = 20;
var Fday_Hr = 8;
var Total_DailyWadge;
Total_DailyWadge = Rate_Per_Hr * Fday_Hr;
var empCheck = Math.floor(Math.random() * 10) % 2;
if (empCheck == Is_Present) {
    console.log("Emplyoee is Present");
    console.log("Daily wedge is " + Total_DailyWadge);
}
else {
    console.log("Emplyoee is absent");
}

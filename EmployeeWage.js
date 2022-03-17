console.log("\n Welcome to Employee Wage Computation \n");
var Is_Present = 1;
var RATE_PER_HR = 20;
var FDAY_HR = 8;
var PART_HR = 4;
var No_of_day = 20;
var daywage = 0;
var monthwage = 0;
var empHr = 0;
var totalEmpHr = 0;
for (No_of_day = 0; No_of_day < 20; No_of_day++) {
    var empCheck = (Math.floor(Math.random() * 10) % 3);
    switch (empCheck) {
        case 1:
            console.log("Emplyoee is Present And Full Time Daily wage is: " + FDAY_HR);
            empHr = FDAY_HR;
            break;
        case 2:
            console.log("Emplyoee is Present And Part Time Daily Wage is: " + PART_HR);
            empHr = PART_HR;
            break;
        default:
            console.log("Emplyoee is absent");
            empHr = 0;
    }
    totalEmpHr = totalEmpHr + empHr;
    console.log("Total Employee Hr is :" + totalEmpHr);
}
monthwage = RATE_PER_HR * totalEmpHr;
console.log("\n Monthly wage is : " + monthwage, "\n");

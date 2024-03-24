// Code challengde 1
// Student grade generator
function studentGradeGenerator(marks){
//Conditional statements
 if (marks>79){
    return 'A';
 } else if (marks>=60 && marks<=79){
    return 'B';
 } else if (marks>=50 && marks<=59){
    return 'C';
 } else if (marks>=40 && marks<=49){
    return 'D';
 } else if (marks<40){
    return 'E';
 }
};
//Invoke the function
studentGradeGenerator();



//Code challenge 2
//Speed Detector
function speedDetector(speed){
    const speedLimit = '70km/s'
    const demeritPoints = 0
//Conditional statements
if (speed <= '70km/s'){
    return "Ok";
} else if(speed>'70km/s'){
    demeritPoints = Math.floor((speed - speedLimit)*0.2);
    return "demeritPoints";
} 
if(demeritPoints>12){
    return "License suspended."
}
};
//Invoke function
speedDetector();


//Code challenge 3
//Net salary calculator
function myPayee(grossSalary){
if (grossSalary <= 24000){
    return 'grossSalary*0.1'
} else if(grossSalary>=24001 && grossSalary<= 32333){
    return '(24000*0.1)+0.25*(grossSalary-24000)'
} else if (grossSalary>=32334 && grossSalary<=500000){
    return '(24000*0.1)+(3233*0.25)+0.3(grossSalary-32333)'
} else if (grossSalary>=500001 && grossSalary<=800000){
    return '(24000*0.1)+(3233*0.25)+(0.3(grossSalary-32333))+0.325*(grossSalary-500000)' 
}else {
    return '0.35*(grossSalary-800000)+(24000*0.1)+(3233*0.25)+(0.3(grossSalary-32333))+(0.325*(grossSalary-500000))' 
};
}
myPayee()

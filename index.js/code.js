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
    const speedLimit = 70
    let demeritPoints = 0
//Conditional statements
if (speed <= speedLimit){
    return "Ok";
} else if(speed>speedLimit){
    const demeritPoints = Math.floor((speed - speedLimit)*0.2);
    return demeritPoints;
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
//Write conditional statements to evaluate payee
if (grossSalary <= 24000){
    return grossSalary*0.1
} else if(grossSalary>=24001 && grossSalary<= 32333){
    return (24000*0.1)+0.25*(grossSalary-24000)
} else if (grossSalary>=32334 && grossSalary<=500000){
    return (24000*0.1)+(8333*0.25)+0.3*(grossSalary-32333)
} else if (grossSalary>=500001 && grossSalary<=800000){
    return (24000*0.1)+(8333*0.25)+(0.3*467667)+0.325*(grossSalary-500000)
}else {
    return 0.35*(grossSalary-800000)+(24000*0.1)+(8333*0.25)+(0.3*467667)+(0.325*300000) 
};
}
//Invoke the function to calculate payee as per gross saalary
myPayee()

//NHIF Deductions
//Create a function to calculate the NHIF Deductions
function NHIFDeduction(grossSalary){
if (grossSalary<=5999){
    return 150;
} else if(grossSalary>=6000 && grossSalary<=7999){
    return 300;
} else if(grossSalary>=8000 && grossSalary<=11999){
    return 400;
} else if(grossSalary>=12000 && grossSalary<=14999){
    return 500;
} else if(grossSalary>=15000 && grossSalary<=19999){
    return 600;
} else if(grossSalary>=20000 && grossSalary<=24999){
    return 700;
} else if(grossSalary>=25000 && grossSalary<=29999){
    return 800;
} else if(grossSalary>=30000 && grossSalary<=34999){
    return 900; 
} else if(grossSalary>=35000 && grossSalary<=39999){
    return 950;
} else if(grossSalary>=40000 && grossSalary<=44999){
    return 1000;
} else if(grossSalary>=45000 && grossSalary<=49999){
    return 1100;
} else if(grossSalary>=50000 && grossSalary<=59999){
    return 1200;
} else if(grossSalary>=60000 && grossSalary<=69999){
    return 1300;
} else if(grossSalary>=70000 && grossSalary<=79999){
    return 1400;
} else if(grossSalary>=80000 && grossSalary<=89999){
    return 1500;
} else if(grossSalary>=90000 && grossSalary<=99999){
    return 1600;
} else {
    return 1700;
}
};
//Invoke the function
NHIFDeduction();
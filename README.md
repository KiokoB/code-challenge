# code-challenge
* To get a copy and use this project, go to this [github repository](https://github.com/KiokoB/code-challenge)
* Fork and clone to get it to local machine then you can manipulate the codes. 

## challenge-1 studentGradeGenerator

- Create a function to input students grade.
  e.g function studentGradeGenerator(marks)
- Create conditional statements that should return the input grades using if...else statements
For grades ranging 0-100
   - A > 79
- B - 60 to 79
- C - 59 to 49
- D - 40 to 49
- E - less than 40.


## challenge-2 speedDetector
- Write a function to input speed.
    *function speedDetector(speed){}
- Call a variable with the speed limit of 70km/s.
  e.g const speedLimit = 70 
- Once the speed limit is exeeded, the driver earns demerit points.
* Use conditional statements if...else:
   - For speed <= speed limit , it should return "Ok"
    - For every 5 km/s above the speed limit , give 1 demerit point.
   - If a driver earns more than 12 demerit points,it should return  "License suspended".   


## challenge-3 calculateNetSalary
For this we are using: 
    KRA, NHIF, and NSSF values 
    - [KRA Tax Rates](https://www.kra.go.ke/en/individual/calculate-tax/calculating-tax/paye)
- [NHIF and NSSF rates](https://www.aren.co.ke/payroll/taxrates.htm)

- Calculate payee;
  - Create a function to calculate payee according to gross salary
  e.g function myPayee(grossSalary){}
  - Input conditional statements to calculate payee
  e.g Using if ...else if statements
       if (grossSalary <= 24000){
        return grossSalary*0.1
       }
       
- Calculate NHIF Deduction
 - Write a function to calculate NHIF deductions as per gross salary
 e.g NHIFDeduction(grossSalary){}
      Pass in conditional statements(if...else)
 e.g if(grossSalary<=5999){
   return 150;
 }      

- Calculate NSSF Deduction
- Declare variables using 'let' for tier1 and tier 2 NSSFF deductions
       let tier1 = 0;
 - Using a function,pass conditional statements to calculate according to the limits : Tier 1
              Tier 2
               

- To calculate net salary:
 - declare a variable for net salary 
     - const netSalary=...
* use the formula to calculate net
   net salary =gross salary - (payee+NHIF deduction+NSSF deduction)


## License

[MIT](https://choosealicense.com/licenses/mit/)
 
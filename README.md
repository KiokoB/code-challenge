# code-challenge
## challenge-1 studentGradeGenerator

- Create a function to input students grade.
- Create conditional statements that should return the input grades.
For grades 0-100
   - A > 79
- B - 60 to 79
- C - 59 to 49
- D - 40 to 49
- E - less than 40.


## challenge-2 speedDetector
- Write a function to input speed.
- Call a variable with the speed limit of 70km/s.
- Once the speed limit is exeeded, the driver earns demerit points.
    - for every 5 km/s above the speed limit , give 1 demerit point.
   - If a driver earns more than 12 demerit points,it should return  'License suspended'.   


## challenge-3 calculateNetSalary
For this we are using: 
    KRA, NHIF, and NSSF values 
    - [KRA Tax Rates](https://www.kra.go.ke/en/individual/calculate-tax/calculating-tax/paye)
- [NHIF and NSSF rates](https://www.aren.co.ke/payroll/taxrates.htm)
- Calculate payee;
  - Create a function to calculate payee according to gross salary
  - Input conditional statements to calculate payee
  e.g Using if ...else if statements
       if (grossSalary <= 24000){
        return grossSalary*0.1
       }

- Calculate NHIF Deduction
 - Create a function NHIFDeduction(){
      Pass in conditional statements
 }       

- Calculate NSSF Deduction
 - Using a function,pass conditional statements to calculate according to the limits : Tier 1
              Tier 2
               

- To calculate net salary:
declare a variable for net salary and use the formula
   net salary =gross salary - (payee+NHIF deduction+NSSF deduction)

 
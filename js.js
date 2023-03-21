

basic salary =document.queryselector(#'BASIC').value;
   benefits = document.queryselector(#'BENEFITS').value;                          



var grossSal = calculateGrossSalary(basicSalary, benefits);
console.log("Gross salary ; ", grossSal);

//Function to calcualte gross salary
function calculateGrossSalary(basicSalary, benefits) {
  var grossSalary = basicSalary + benefits;
  return grossSalary;
}

// Function to calculate nhif deductions
/*p to 5,999	150	 	40,000 - 44,999	1,000
6,000 - 7,999	300	 	45,000 - 49,999	1,100
8,000 - 11,999	400	 	50,000 - 59,999	1,200
12,000 - 14,999	500	 	60,000 - 69,999	1,300
15,000 - 19,999	600	 	70,000 - 79,999	1,400
20,000 - 24,999	750	 	80,000 - 89,999	1,500
25,000 - 29,999	850	 	90,000 - 99,999	1,600
30,000 - 34,999	900	 	100,000 and above	1,700
35,000 - 39,999	950	 */
var nhif = calculateNhifDeductions(grossSal);
console.log("NHIF ;", nhif);
function calculateNhifDeductions(grossSalary) {
  if (grossSalary > 0 && grossSalary < 6000) {
    return 150;
  } else if (grossSalary > 5999 && grossSalary < 8000) {
    return 300;
  } else if (grossSalary > 7999 && grossSalary < 12000) {
    return 400;
  } else if (grossSalary > 11999 && grossSalary < 15000) {
    return 500;
  } else if (grossSalary > 14999 && grossSalary < 20000) {
    return 600;
  } else if (grossSalary > 19999 && grossSalary < 25000) {
    return 750;
  } else if (grossSalary > 24999 && grossSalary < 30000) {
    return 850;
  } else if (grossSalary > 29999 && grossSalary < 35000) {
    return 900;
  } else if (grossSalary > 34999 && grossSalary < 40000) {
    return 950;
  } else if (grossSalary > 39999 && grossSalary < 45000) {
    return 1000;
  } else if (grossSalary > 49999 && grossSalary < 50000) {
    return 1100;
  } else if (grossSalary > 49999 && grossSalary < 60000) {
    return 1200;
  } else if (grossSalary > 59999 && grossSalary < 70000) {
    return 1300;
  } else if (grossSalary > 69999 && grossSalary < 80000) {
    return 1400;
  } else if (grossSalary > 79999 && grossSalary < 90000) {
    return 1500;
  } else if (grossSalary > 89999 && grossSalary < 100000) {
    return 1600;
  } else {
    return 400;
  }
}

//Function to calculate nssf
var nssf  = calculateNssfDeductions(grossSal);
console.log("NSSF ; ", nssf);
function calculateNssfDeductions(grossSal){
  var taxrate=0.06; 
  var nssf=taxrate  * grossSal;
    return nssf;


}

//Function to calculate the tax rate
/*1.calculate the taxable income
2.come up with the logic using the diffrent tax brackets
*/
var taxable =calculateTaxableIncome(grossSal, nssf,nhif)
console.log("taxableIncome ; ", taxable)
function calculateTaxableIncome(grossSal, nssf ,nhif)
{
  var taxable=grossSal - nssf -nhif;
  return taxable;
}

//Function to calculate the taxes
/*1.calculate the taxes charged.
2.classify the tax brackets.*/
var tax=calculateTheTaxes(taxable )
console.log("tax ; ", tax)
function calculateTheTaxes( taxable){
  var totaltax;
  if (taxable<=24000 ){ 
totaltax=taxable*0.1;
return totaltax;
  }else if (taxable>24000 && taxable<=32333){
    totaltax=taxable * 0.25;
    return totaltax;
  }else if (taxable>=32333){
    totaltax=taxable * 0.3;
    return totaltax;
  }
}

//FUnction to calculate payee
var payee=calculatePayee(taxable, tax)
console.log("payee " , payee)
function calculatePayee(taxable, tax){
  var payee=taxable-tax;
  return payee
}
    

   
    
   
    
    




    



 
    



  


 
 





    
  



          
            





     
    
     


           

        
     

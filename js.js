
//  calculate SPeed function
const calculate = () => {

    // speed input.
    let basic= document.querySelector("#BASIC").value;
   
    let allowance= ""
    let allowanceN=''
    
    
//condition for providing the grade according to marks keyed in
let allocation= basic
if(allocation<= 24000){
allowance= allocation*0.1;
    
}
else if(allocation <=32333 && allocation >=24001){

    allowance= allocation *0.25
    
    } 

else{
    allowance= allocation *0.3;
}

 allowanceN= allocation*0.05;
 





    
    // Condition  if the input is empty
    if (basic== "" 
                ) {
        document.querySelector("#data").innerHTML
            = "please enter your salary";
            //condition if details are keyed in 
    } else {}
    if(allocation=basic)
    {document.querySelector("#data").innerHTML =
    ` HI! ${allowance}.`  && ` HI! ${allowanceN}.`}

     
    
     


           

        
     
}
const dateOfBirth =document.querySelector("#date-of-birth");
const luckyNumber =document.querySelector("#lucky-number");
const checkNumberButton =document.querySelector("#check-number");
const outputBox=document.querySelector("#output-box");




function checkNumberIsLucky()
{
    const date=dateOfBirth.value;
    console.log(date);
    const sum=calculateSum(date);
    // console.log(sum);
    // compareValues(sum,luckyNumber.value);
    if(sum&&date)
    {compareValues(sum,luckyNumber.value); }
    else{outputBox.innerText="Please enter both fields" }
}

function compareValues(total,num_lucky){
    // console.log(sum , luckyNumber);
    if(total%num_lucky==0)
    {    outputBox.innerText="Your birthday is lucky 🎂🍰";
        // console.log("Your birthday is lucky");
    }
    else{ outputBox.innerText="Your birthday is not lucky🤕🥴";
        // console.log("Your birthday is not lucky");
    }
}

// #1 problem this is not working don't know why 
// if we're returning 25 then it gets printed before even eventlistener action
// but concole.log is not working in other cases 

function calculateSum(dob)
{ 
    console.log(dob);
    dob=dob.replaceAll("-","")
    let sum=0;
    console.log(dob)
    for(let i =0;i<dob.length;i++)
    {  sum=sum+ Number(dob.charAt(i));}
    console.log(sum);
    return 25; 
}

// checkNumberButton.addEventListener('click',function getValues(){

//     console.log(dateOfBirth.value,luckyNumber.value);
// })
// Get values working fine but it won't work without get values inside those functions

checkNumberButton.addEventListener('click',checkNumberIsLucky());
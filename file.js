const dateOfBirth =document.querySelector("#date-of-birth");
const luckyNumber =document.querySelector("#lucky-number");
const checkNumberButton =document.querySelector("#check-number");
const outputBox=document.querySelector("#output-box");

function checkNumberIsLucky()
{
    const date=dateOfBirth.value;
    console.log(date);
    const sum=caculateSum(date);
    console.log(sum);
}

function compareValues(sum,num_lucky){
    // console.log(sum , luckyNumber);
    if(sum%num_lucky==0)
    {
        outputBox.innerText="Your birthday is lucky 🎂🍰";
        // console.log("Your birthday is lucky");
    }
    else{
        outputBox.innerText="Your birthday is not lucky🤕🥴";
        // console.log("Your birthday is not lucky");
    }
}

function caculateSum(dob)
{
    dob=dob.replaceAll("-","")
    let sum=0;
    for(let i =0;i<dob.length;i++)
    {  sum=sum+ Number(dob.charAt(i));}
    return sum;

}

// checkNumberButton.addEventListener('click',function getValues(){

//     console.log(dateOfBirth.value,luckyNumber.value);
// })

checkNumberButton.addEventListener('click',checkNumberIsLucky())
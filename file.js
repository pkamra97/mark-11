const dateOfBirth =document.querySelector("#date-of-birth");
const luckyNumber =document.querySelector("#lucky-number");
const checkNumberButton =document.querySelector("#check-number")

function checkNumberIsLucky()
{
    const date=dateOfBirth.value;
    const sum=caculateSum(date);
}

function caculateSum(dob)
{
    dob=dob.replaceAll("-","")
    let sum=0;
    for(let i =0;i<dob.length;i++)
    {  sum=sum+ Number(dob.charAt(i));}
    return sum;

}

checkNumberButton.addEventListener('click',function getValues(){

    console.log(dateOfBirth.value,luckyNumber.value);
})
// form validation
function updateValues(){
    var email=document.forms ["form"]["e-mail"].value;
    // console.log(email);
    var password=document.forms ['form'] ['pwd'].value;
    // console.log(password);
    if(email=='mari20041999@gmail.com' && password=='123'){
        alert('Valid user');
        }
    else{
        alert('Invalid user')
    }
}

// sum of digit numbers
var number=544;
console.log("given number "+number);
var temp=number;
var digits=0;
var lastDigit1=temp%10;
 temp=(temp-lastDigit1)/10;
var lastDigit2=temp%10;
temp=(temp-lastDigit2)/10;
var lastDigit3=temp;
console.log("sum of given number");
var sum=lastDigit1+lastDigit2+lastDigit3;
console.log(sum);

// 10 numbers in Ascending order using array
const numbers=[0,1,34,4,44444,7,9,2,5555,8,3,5,6,55,43,333];
const ascendingOrder=numbers.sort(function(a,b){
    return a-b;
});
console.log(ascendingOrder);
const descendingOrder=ascendingOrder.reverse();
console.log(descendingOrder);






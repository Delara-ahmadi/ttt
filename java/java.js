var a;
var over;
var odd=0;
var even=0;
a = Number (prompt('inter your number'));

while(a!=0){
over = (a % 10);
a= parseInt(a / 10);

if(over % 2==0){
    even++;
}

else
    odd++
}
alert('number even'+even);
alert('number odd'+odd); 




// tamrin2


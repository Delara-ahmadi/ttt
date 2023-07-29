var name= prompt('نام خود را وارد کنید');
var n =Number(prompt('نمران خود را وارد کنید و در آخر end را بزنید')) ;
var max=0;
var max2=0;

while(n !='end'){
    n = prompt('نمران خود را وارد کنید و در آخر end را بزنید') ;
    if(n > max){
        max2 = max;
        max= n;
    }
        else if(n > max2){
            max2 = n;
        }
}
alert(max2+'نمره اول');
alert(max+ 'نمره دوم');

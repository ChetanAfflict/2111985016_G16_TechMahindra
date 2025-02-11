//setinterval

// function two(){
//     return 2;
// }
// function four(){
//     return 4;
// }

// console.log(1);
// console.log(two());
// setInterval(() => {
//    console.log(3) 
// }, 3000);
// console.log(four());
// setInterval(() => {
//     console.log(5);
// }, 5000);
// console.log(6);

// function ans(x){
//     setTimeout(() => {
//         console.log(x);   
//        },1000);
// }
// for(var i=1;i<=6;i++){
//     ans(i);
// }

// function x(){
//     var a=7;
//     function y(){
//         console.log(a);
//     }
//     a=100;
//     return y;
// }
// var z=x();
// console.log(z);
// z();

// function z(){
//     var b=900;
//     function x(){
//         var a=7;
//         function y(){
//             console.log(a,b);
//         }
//         y();
//     }
//     x();
// }
// z();


// function ans(){
//     var count=0;
//     return function inc(){
//         count++;
//         console.log(count);
//     } 
    

// }
// var ans1=ans();
// ans1();
// ans1();
// ans1();


function ans(){
    var count=0;
    this.inc=function(){
        count++;
        console.log(count);
    }
    this.dec=function(){
        count--;
        console.log(count);
    }
    

}
var ans1=new ans();
ans1.inc();
ans1.inc();
ans1.dec();





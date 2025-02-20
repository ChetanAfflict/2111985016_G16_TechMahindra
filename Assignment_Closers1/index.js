//  Question 1
function counter(){
    var count=0;
    this.increment=function(){
        count++;
        console.log(count);
    }
    this.decrement=function(){
        count--;
        console.log(count);
    }
    this.getCount=function(){
        console.log(count);
    }
} 

var counter1=new counter();
counter1.increment(); 
counter1.increment();
counter1.increment(); 
counter1.decrement();
counter1.getCount();  

// Question 2
function fibo(){
    var cache={};
    this.fiboans=function(n){
        if(n<=1){
            return n;
        }
        
        if(cache[n]){
            return cache[n];
        }
        cache[n]=this.fiboans(n-1)+this.fiboans(n-2);
        return cache[n];
    };
}

var fibo = new memoizedFibonacci();
console.log("Number at positon 2 in fiobnacci = "+fibo.findfibonaci(2));
console.log("Number at positon 5 in fiobnacci = "+fibo.findfibonaci(5));
console.log("Number at positon 3 in fiobnacci = "+fibo.findfibonaci(3 ));
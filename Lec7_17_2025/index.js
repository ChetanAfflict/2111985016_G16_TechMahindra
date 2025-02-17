//callback
// function a(){
//     console.log("first");
// }
// function b(a){
//     console.log("second");
//     a();
// }
// b(a());


//eventlistener on a button which prints button clicked

// const element1=document.getElementById("btn1");
// const element2=document.getElementById("btn2");
// var count=0;

// element1.addEventListener("click",function(){
//     count++;
//     console.log("clicked");
// })

// element2.addEventListener("click",function(){
//     count++;
//     console.log("clicked");
// })

//put the above code in closure , homework 


 function reachedRestaurants(callback){
    console.log("reached restaurant");
    setTimeout(callback,1000);
 }
 function tablefinding(callback){
    console.log("table finding");
    setTimeout(callback,1000);
 }
 function menudiscover(callback){
    console.log("menu discover");
    setTimeout(callback,1000);
 }
 function pricecheck(callback){
    console.log("price check");
    setTimeout(callback,1000);
 }
 function starterorder(callback){
    console.log("starter order");
    setTimeout(callback,1000);
 }
 function maincourse(callback){
    console.log("maincourse");
    setTimeout(callback,1000);
 }
 function dessert(callback){
    console.log("dessert");
    setTimeout(callback,1000);
 }
 function paybill(){
    console.log("pay bill");
 }


 //chaining the callback

 reachedRestaurants(()=>{
    tablefinding(()=>{
        menudiscover(()=>{
            pricecheck(()=>{
                starterorder(()=>{
                    maincourse(()=>{
                        dessert(()=>{
                            paybill();
                        })
                    })
                })
            })
        })
    })
 })

 //hence the pyramid of doom is made
 //to fix this, resolve and promises are made
 
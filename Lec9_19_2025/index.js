const arr=[5,7,3,1,8];

// var sumOfArr=0;
// for(let i=0;i<arr.length;i++){
//     sumOfArr+=arr[i];
// }

// console.log(sumOfArr);

// arr.reduce(function(acc,curr){
//     acc=acc+curr;
//     return acc;
// },0)
// console.log(ans);


// const users=[
//     {firstName:"a", lastName:"f",age:25},
//     {firstName:"b", lastName:"g",age:23},
//     {firstName:"c", lastName:"h",age:22},
//     {firstName:"d", lastName:"i",age:35},
//     {firstName:"e", lastName:"j",age:22},
// ]

// const ans=users.reduce(function(acc,curr){
//     if(!acc[curr.age]){
//         acc[curr.age]=1;
//     }
//     else{
//         acc[curr.age]++;
//     }
//     return acc;
// },{})
// console.log(ans);


// datamap=[4,5,6,2,1,7];
// var maxnum=0;
// for(let i=0;i<datamap.length;i++){
//     if(maxnum<datamap[i]){
//         maxnum=datamap[i];
//     }

// }
// console.log(maxnum);


// const ansmax=datamap.reduce(function(acc,curr){
//     if(curr>acc){
//         acc=curr;
//     }
//     return acc;
// },0);

// console.log(ansmax);


//PROMISES

//reachedRestaurant(function(){
//     console.log("I have reached the restaurant");  
// }).then(tableFinding)
// .then(menuDiscover)
// .then(priceCheck)
// .then(starterOrder)
// .then(mainCourse)


// const myRestaurantPromise=new Promise(resolve,reject){
//     if(1.30>time>2.30){
//         resolve("reached successfully");
//     }else{
//         reject("cant reach on time");
//     }
// }



// const githubData=fetch("https://github.com/users/pratiyushray");
// setTimeout(() => {
//     console.log(githubData);
// }, 1000);

// console.log(githubData);



const cart=[];


//using callback

// createOrder(cart,callback){
//     console.log("order created");
//     orderPayment(orderID, callback){
//         console.log("order payment");
//         orderSummary(orderID,callback){
//             console.log("order summary");
//             updateWallet(){
//                 console.log("wallet updated");
//             }
//         }
//     }
// }

//using promises

// function createOrder(cart){
//     const myPromise=new Promise(function(resolve,reject){
//         if(cart.length>0){
//             resolve("12345");
//         }else{
//             const err=new Error("Order Rejected");
//             reject(err.message);
//         }
//     });
//     return myPromise;
// }

// function orderPayment(orderID){
//     console.log("Order Payment Successfull",orderID);
// }
// function orderSummary(orderID){
//     console.log("Order Summary Created",orderID);
// }
// function updateWallet(){
//     console.log("Wallet Updated");
// }

// //console.log(createOrder(cart));


// createOrder(cart)
// .then(function (orderID){
//     return orderPayment(orderID)
// })
// .then(function(orderID){
//     return orderSummary(orderID)
// })
// .then(function(orderID){
//     return updateWallet();
// })
// .catch(function (err){
//     console.log("Error Occoured");
//     console.log(err.message);
// })

// createOrder(cart)
// .then(function orderPayment(orderID){
//     console.log("Order Payment Successfull",orderID);
// })
// .then(function orderSummary(orderID){
//     console.log("Order Summary",orderID);
// })


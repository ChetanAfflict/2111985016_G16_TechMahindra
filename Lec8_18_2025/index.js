// x is callback function and y is higher order function 
// function x(){
//     console.log("i am x");
// }
// function y(args){
//     console.log("i am y");
//     args();
// }
// y(x);


// Higher order function 

// data=[2,4,6,8,10];

// const calculateDoubleData = function(data){
//     var output=[];
//     for(let i=0;i<data.length;i++){
//         output.push(data[i]*2);
//     }
//     return output;
// }

// const calculateHalfData = function(data){
//     var output=[];
//     for(let i=0;i<data.length;i++){
//         output.push(data[i]/2);
//     }
//     return output;
// }

// const calculateAddTen = function(data){
//     var output=[];
//     for(let i=0;i<data.length;i++){
//         output.push(data[i]+10);
//     }
//     return output;
// }

// console.log(calculateDoubleData(data));
// console.log(calculateHalfData(data));
// console.log(calculateAddTen(data));


// data = [2,4,6,8,10];
// var insideData=10;

// function doubleData(insideData){
//     var ans=insideData*2;
//     return ans;
// }
// function halfData(insideData){
//     var ans=insideData/2;
//     return ans;
// }
// function addTen(insideData){
//     var ans=insideData+10;
//     return ans;
// }

// const calculateData = function (data,callback){
//     console.log("we are inside calculate data");
//     var output=[];
//     for(let i=0;i<data.length;i++){
//         output.push(callback(data[i]));

//     }
//     return output;
// }
// console.log(calculateData(data,doubleData));
// console.log(calculateData(data,halfData));
// console.log(calculateData(data,addTen));

//polyfill of map feature of js by using prototype

// data=[2,4,6,8];
// Array.prototype.map = function(logic){
//     var output=[];
//     for(let i=0;i<this.length;i++){
//        output.push(logic(this[i]));
        
//     }
//     return output;
// }

// console.log(data.map(doubleData));


// calculate diameter, circumference, area of circle

// data=[2,9,16,42,71];

// function diameter(data){
//     var ans=data*2;
//     return ans;
// }
// function circumference(data){
//     var ans=2*3.14*data;
//     return ans;
// }
// function area(data){
//     var ans=3.14*data*data;
//     return ans;
// }

// Array.map=function(logic){
//     var ans=[];
//     for(let i=0;i<this.length;i++){
//         ans.push(logic(this[i]));
//     }
//     return ans;
// }
// console.log(data.map(diameter));
// console.log(data.map(circumference));
// console.log(data.map(area));


// data =[2,4,6,3,7];



// //using function 
// const oddOutput = function odd(data){
//     var output=[];
//     for(let i=0;i<data.length;i++){
//         if(data[i]%2!=0){
//             output.push(data[i]);
//         }
//     }
//     return output;
// }
// console.log(oddOutput(data));



// //using prototype
// function oddNum(num){
//     if(num%2!=0){
//         return num;
//     }
// }

// Array.prototype.mapp=function(logic){
//     var output=[];
//     for(let i=0;i<this.length;i++){
//         if(this[i]%2!=0){
//             output.push(logic(this[i]));
//         }
//     }
//     return output;
// }
// console.log(data.mapp(oddNum));

// //using filter
// console.log(data.filter((num)=>{
//     return num%2!=0;
// }));


const users=[
    {firstName:"a", lastName:"f",age:25},
    {firstName:"b", lastName:"g",age:23},
    {firstName:"c", lastName:"h",age:22},
    {firstName:"d", lastName:"i",age:35},
    {firstName:"e", lastName:"j",age:21},
]

// combine first name and last name

const Fullname=users.map((user)=>{user.firstName+ " " +user.lastName});

// filter out age above 24, their full name

const filtered = users.filter((user) => user.age > 24)
    .map((user) => user.firstName + " " + user.lastName);

console.log(filtered);
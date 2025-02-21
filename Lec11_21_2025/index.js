// let student={
//     firstName:"aa",
//     lastName:"bb",

//     // getName:function(){
//     //     console.log(this.firstName,this.lastName);
//     // },

//     getResult:function(){
//         console.log("passed");
//     }
    
// }

// let getName= function (classStudent){
//     console.log(this.firstName,this.lastName,"from class",classStudent);
// }

// let student1={
//     firstName:"cc",
//     lastName:"dd",

//     // getName:function(){
//     //     console.log(this.firstName,this.lastName);
//     // },

//     getResult:function(){
//         console.log("passed");
//     }
// }



// //call()
// // getName.call(student);  
// // getName.call(student1);

// const getStudent=getName.call(student, "G16");
// //apply
// const getStudent1=getName.apply(student1,["G15, G16"]);

// //bind
// const getStudentBind=getName.bind(student, "G16");
// console.log(getStudentBind());



//============================================

//event bubbling and event capturing

// document.getElementById("grandparent").addEventListener("click",()=>{
//     console.log("This is grandparent div");
// },true)

// document.getElementById("parent").addEventListener("click",()=>{
//     console.log("This is parent div");
// },true)

// document.getElementById("child").addEventListener("click",()=>{
//     console.log("This is child div");
// },true)


// document.getElementById("cs").addEventListener("click",()=>{
//     window.location.href="localhost/cs";
// })

// document.getElementById("ece").addEventListener("click",()=>{
//     window.location.href="localhost/ece";
// })

// document.getElementById("me").addEventListener("click",()=>{
//     window.location.href="localhost/me";
// })

// document.getElementById("subjects").addEventListener("click",(e)=>{
//     console.log("https://localhost/"+e.target.id);
// })



// document.getElementById("searchbox").addEventListener("input",debouncingFunction);

// let whichcall=0;
// let timeout;

// function fetchData(){
//     console.log("Fetching API Data",whichcall++);
// }

// function debouncingFunction(){
//     clearTimeout(timeout);
//    a=setTimeout(fetchData,1000);
// }
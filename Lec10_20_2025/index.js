// const myPromiseFromNetflix = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         // resolve("Fetched data from Netflix 1sec");
//         reject("Error fetching data from Netflix 1sec");
//     },1000);
// });
// const myPromiseFromTwitter= new Promise(function(resolve,reject){
//     setTimeout(() => {
//         resolve("Fetched data from Twitter 2sec");
//         // reject("Error fetching data from Twitter 2sec");
//     },2000);
// });
// const myPromiseFromGithub= new Promise(function(resolve,reject){
//     setTimeout(() => {
//         // resolve("Fetched data from Github 3sec");
//         reject("Error fetching data from Github 3sec");
//     },3000);
// });
// const myPromiseFromHotstar= new Promise(function(resolve,reject){
//     setTimeout(() => {
//            // resolve("Fetched data from Hotstar 4sec ");
//         resolve("Fetched data from Hotstart 4sec");
//     },4000);
// });


// const dataFromAll=Promise.all([myPromiseFromGithub,myPromiseFromHotstar,myPromiseFromNetflix,myPromiseFromTwitter]);
// console.log(dataFromAll);

// const datasetteled=Promise.allSettled([myPromiseFromGithub,myPromiseFromHotstar,myPromiseFromNetflix,myPromiseFromTwitter]);
// console.log(datasetteled);

// const dataFromAny=Promise.any([myPromiseFromGithub,myPromiseFromHotstar,myPromiseFromNetflix,myPromiseFromTwitter]);
// console.log(dataFromAny);

// const dataRace=Promise.race([myPromiseFromGithub,myPromiseFromHotstar,myPromiseFromNetflix,myPromiseFromTwitter]);
// console.log(dataRace)



// Async - Await

// async function techDirect(){
//     console.log("this is TM");
// }

// const techData=techDirect();

// techData.then((res)=>{
//     return res;
// })

// const helloTM=async function(){
//     console.log("this is TM");
// }
// console.log(helloTM);
//helloTM();

// const samarPromised=new Promise(function(resolve,reject){
//     setTimeout(() => {
//         resolve("I will be on time");
//     }, 4000);
// })

// console.log("hello class");

// function techMahindra(){
//    const promiseofSamar=samarPromised;
//    console.log(promiseofSamar);
// }
// techMahindra();
// console.log("class end");

// const projectSubmission= new Promise(function(res,rej){
//     setTimeout(() => {
//         res("submitted project");
//     }, 5000);
// })

// async function projectEvalutation(){
//     const projectFile=await projectSubmission;
//     console.log(projectFile);
// }
// projectEvalutation();


//fetching data from api 
// https://api.chucknorris.io/

async function fetchAPIdata(){
    try{
        const data=await fetch("https://api.chucknorris.io/jokes/categories");
        const mydata=await data.json();
        return mydata;
    }
    catch(err){
        console.log(err);
    }
}
const finaldata=fetchAPIdata();

finaldata.then((res)=>{
    console.log(res);
})



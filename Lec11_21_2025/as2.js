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

function filteredData(){
    const search = document.getElementById("searchbox").value;
    const filtered=mydata.filter(category=>category.includes(search));

    displayData(filtered);
}

function displayData(){
    const result=document.getElementById("result");
    
}

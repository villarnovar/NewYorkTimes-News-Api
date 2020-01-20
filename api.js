let news = document.getElementById("news");
displayNews ="";

function handleSuccess(){
    let data =JSON.parse(this.responseText);
    console.log(data.results[0]);
    data.results.forEach(element =>{
    displayNews +=`<div id="body"><h2 id="section">${element.subsection}</h2><h2><a href="${element.url}"> ${element.title}</a></h2>
    <p>${element.abstract}</p></div>`;
    });
    news.innerHTML = displayNews;

}
function handleError(){
    console.log("An error occurred");
}
let getRequest = new XMLHttpRequest();
getRequest.open("GET", "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=P55mX1erCwJQiST142APRmlPCCskuzgI");
getRequest.onload = handleSuccess;
getRequest.onerror = handleError;
getRequest.send();
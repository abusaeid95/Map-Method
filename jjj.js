function search(){
    const searInput = document.getElementById('search-box');
    const searInputValue = searInput.value;
    // console.log(searInputValue);
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searInputValue}`)
    .then(response => response.json())
    .then(json => dsiplay(json.meals))    
}
function dsiplay(data){
    console.log(data);
    const h1 = document.getElementById('h1');
    h1.innerText = data.strMeal
}
var apiKey = "e51351d90f75304ab92e4efbc62abbb2" 


var searchForm = document.getElementById("searchform")
var searchBar = document.getElementById("searchbar")
var searchButton = document.getElementById("searchbutton")

function getWeather(search){
    var city=search //takes value of the user input form searchBar so we can use city in URL
    var apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`
    fetch(apiUrl)
    .then(function(res) {
        return res.json();
    })
    .then(function (data){
        console.log(data)
    })
}
//jQuery, stringify, append, 

function searchFunct(e){
    if (!searchBar.value){
        return;
    }
    e.preventDefault();
    var search = searchBar.value.trim();
    getWeather(search) // callback to get weather allows us to us us search variable inside the getWeather function
    console.log(search)
}
searchForm.addEventListener("submit", searchFunct)

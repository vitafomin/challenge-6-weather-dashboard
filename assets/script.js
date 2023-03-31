var today = $(".today");
var day1 = $(".card-body1");
var day2 = $(".card-body2");
var day3 = $(".card-body3");
var day4 = $(".card-body4");
var day5 = $(".card-body5");
var searchinput = $(".search-input");
var searchbtn = $(".search-btn");
var cityContainer = $(".container-fluid");
var previousHistory = $(".history");

function getApi(event) {
    event.preventDefault()
    var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchinput.val().trim() +
    "&appid=01c862e8225948b5e7389386a861c36a";
    console.log(requestUrl)
  fetch(requestUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
       // saveCity(JSON.stringify(data))

        // if theres is data, go grab it
        var savedCities = localStorage.getItem('cities') || "[]";
        console.log("Saved : ", savedCities);
        console.log("Type : ", typeof savedCities);
        // Converting the Data
        var cityArr = JSON.parse(savedCities)
        console.log("Parsed : ", cityArr);
        console.log("Type : ", typeof cityArr);  // --> this is JS Object (Array)

        // then we can Add data to it
        cityArr.push(searchinput.val().trim())
        console.log("New Array: ", cityArr);
        // We need to re-save the data 
        saveCity(JSON.stringify(cityArr))
    });
}

today.children().eq(0).text(dayjs().format("MM/DD/YYYY"));
day1.children().eq(0).text(dayjs().add(1, "day").format("MM/DD/YYYY"));
day2.children().eq(0).text(dayjs().add(2, "day").format("MM/DD/YYYY"));
day3.children().eq(0).text(dayjs().add(3, "day").format("MM/DD/YYYY"));
day4.children().eq(0).text(dayjs().add(4, "day").format("MM/DD/YYYY"));
day5.children().eq(0).text(dayjs().add(5, "day").format("MM/DD/YYYY"));

searchbtn.on("click", getApi);

function saveCity(data) {
  console.log(searchinput.val());

  //localStorage.setItem(searchinput.val(), data);
  localStorage.setItem('cities', data);
  // kick off our show history function
  history()
}


function history() {
    var visited = localStorage.getItem('cities') || "[]";
    var visitedArr = JSON.parse(visited);
    previousHistory.empty();
    for (var i = 0; i < visitedArr.length; i++) {
     // var data = localStorage.key(i);
     // var savedData = localStorage.getItem(data);
    
      var cityList = $("<p>");
      cityList.text(visitedArr[i]);

      // we need to empty/clear our container

      previousHistory.append(cityList);
    }
}

history();
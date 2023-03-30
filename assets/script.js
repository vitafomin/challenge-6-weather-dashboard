var city = $(".search-input").value
var today = $(".today")
var day1 = $(".card-body1")
var day2 = $(".card-body2")
var day3 = $(".card-body3")
var day4 = $(".card-body4")
var day5 = $(".card-body5")
var searchinput = $(".search-input")
var searchbtn = $(".search-btn")

today.children().eq(0).text(dayjs().format("MM/DD/YYYY"));
day1.children().eq(0).text(dayjs().add(1,"day").format("MM/DD/YYYY"));
day2.children().eq(0).text(dayjs().add(2,"day").format("MM/DD/YYYY"))
day3.children().eq(0).text(dayjs().add(3,"day").format("MM/DD/YYYY"))
day4.children().eq(0).text(dayjs().add(4,"day").format("MM/DD/YYYY"))
day5.children().eq(0).text(dayjs().add(5,"day").format("MM/DD/YYYY"))

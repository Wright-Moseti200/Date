let date = new Date();



function calender()
{
    let Date = date.getDate();
    let days = date.getDay();
    let month = date.getMonth();
    let year = date.getFullYear();

    let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = ["January","February","March","April","May","June","July","August","September","October","November"," December"];




    let date1 = document.querySelector(".date");
    date1.innerHTML = Date;
    let days1 = document.querySelector(".days");
    days1.innerHTML = weekdays[days];
    let month1 = document.querySelector(".month");
    month1.innerHTML = months[month];
    let year1 = document.querySelector(".year");
    year1.innerHTML=year;
}
 
setInterval(calender);
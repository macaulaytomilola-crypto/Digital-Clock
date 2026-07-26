function showTime(){
    let now = new Date();
    let hour = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    hour = hour % 12;
    hour = hour ? hour : 12;

    if (hour < 10) {
        hour = "0" + hour;
    }

    if(min < 10){
        min = "0" + min;
    }

    if(sec < 10){
        sec = "0" + sec;
    }

    let greeting = "";
    let rawHour = now.getHours();
    if (hour < 10){
        greeting = "Good Morning";
    }else if(hour < 10){
        greeting = "Good Afternoon";
    }else{
        greeting = "Good Evening";
    }

 document.getElementById("Clock").innerHTML =greeting + "<br>" + hour + "." + min + "." + sec ; 
} 

showTime();

setInterval(showTime, 1000)
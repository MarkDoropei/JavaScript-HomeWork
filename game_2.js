var clicks = 0;

var height = 400;
var width = 400;


var getRandomNumber = function (size) {
    return Math.floor(Math.random() * size);
}

var getDistance = function(event, target) {
    var diffX = event.offsetX - target.x;
    var diffY = event.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY) );
}

var getDistanceHint = function (distance) {
    if (distance < 10){
        $('html').css('background', '#A60000')
        return"Обожжешься!"}
    else if(distance < 20){
        $('html').css('background', '#FF4100')
        return"Очень горячо"
    }
    else if(distance < 40){
        $('html').css('background', '#FFB100')
         return"Горячо"
        }
    else if(distance < 80){
        $('html').css('background', '#FFD473')
        return"Тепло"
    }
    else if(distance < 160){
        $('html').css('background', '#63AFD0')
        return"Холодно!"
    }
    else if(distance < 320){
        $('html').css('background', '#3BA3D0')
        return"Очень холодно"
    }
    else{
        $('html').css('background', '#0772A1')
        return"Замерз"
    }
}

var target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
}

$("#map").click(function (event) {
    clicks++;
    
    var distance = getDistance(event, target);
    
    var distanceHint = getDistanceHint(distance);

    $("#distance").text(distanceHint);

    if(distance < 8){
        alert("Вы нашли клад!")
        var name = confirm("Желаете сыграть еще раз?");
        if(name == true){
            window.location.reload()
        }
    }
})


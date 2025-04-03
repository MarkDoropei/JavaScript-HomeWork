// первое задание var friends = ["рома","илья","кирилл","саша","джим"]

// for(var i = 0; i < 5; i++){
//     $("body").append("<p>" + friends[i] + "</p>").fadeOut(1000).fadeIn(2000)
// }

// $("p").append(" лучший")

// $("h1").text("Мои друзья!")


// второе задание for(var i = 0; i < 5; i++){$("h1").fadeOut(1000).fadeIn(2000)}


// третье задание $("h1").fadeOut(1500).delay(5000).fadeIn(1500)


// четвертое задание $("h1").fadeTo(250 , 0.9);



// первое задание

// $("html").click(function(event){
//     $("#heading").offset({
//         left:event.pageX,
//         top:event.pageY
// });
// });

// второе задание   

var direction = 'вправо';
var offset = 0;
var i = 0;
var y = 0;

$("#heading").offset({left: offset , top: offset});

var moveHeading = function (){
    if (direction === 'вправо'){
        $("#heading").offset({left: offset });
        offset++
    if (offset > 200){
        offset = 0;
        direction = 'вниз';
    }
    } else if (direction === 'вниз'){
        $("#heading").offset({top: offset });
        offset++;
    if (offset > 200){
        offset = 200;
        direction = 'влево';
    }    
    } else if (direction === 'влево'){
        $("#heading").offset({left: offset });
        offset--;
    if (offset < 0){
        offset = 200
        direction = 'вверх';
    }
    } else if (direction === 'вверх'){
        $("#heading").offset({top: offset });
        offset--;
    if (offset < 0){
        offset = 0
        direction = 'вправо';
    }
    }
    }

    $("#heading").click(function (event){
    i++
    console.log(i)
    y = y + 10;
    if(i == 10){
        $("h1").text("Вы выиграли !")
        direction = ' ';}
    else{
    $("h1").text("Вы попали " + i + " раз");
    }

    setInterval(moveHeading,10) == setInterval(moveHeading,10 + y);
    })

setInterval(moveHeading,10);  
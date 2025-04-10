var animals = ["Кот", "Рыба", "Лемур", "Комодский Варан"]
for (var i = 0; i < animals.length; i++){
    console.log(animals[i] + ' - прекрасное животное');
}


var alphabet = "абвгдеёжзиклмнопрстуфхцчшщъыьэюя";
var randomString = '';
var stringLength = 6; 
var x = Math.floor(Math.random() * alphabet.length);
for (var i = 0; i < stringLength ; i++){
    randomString += alphabet[x]
    var x = Math.floor(Math.random() * alphabet.length);
}
console.log(randomString)

var alphabet = "абвгдеёжзиклмнопрстуфхцчшщъыьэюя";
var randomString = '';
var stringLength = stringLength;
while(randomString.length < 6 ){
    randomString += alphabet[x]
    var x = Math.floor(Math.random() * alphabet.length);
}
console.log(randomString)


var input = 'javaScript is awesome';
var output = '';
for(var i = 0; i = input.length; i++ ){
    if (input[i] === "a"){
        output += '4';
    } else if (input[i] === "e"){
        output += '3';
    } else if (input[i] === "i"){
        output += '1';
    } else if (input[i] === "0"){
        output += '0';
    } else {output += output[i]}
    }
console.log(output);

var input = 'javaScript is awesome';
var output = '';
for(var i = 0; i < input.length ; i++ ){
    var x = input[i];
    if (x === "a"){
        output += '4';
    } else if (x === 'e'){
        output += '3';
    } else if (x === 'i'){
        output += '1';
    } else if (x === "0"){
        output += '0';
    } else {output += x}
    }
console.log(output);


//задача1
var name = prompt("Как вас зовут?");

//задача2
var name = confirm("Тебе нравятся кошки?");

//задача3
var name = alert("JavaScript это Очень круто!");

//задача4
var name = prompt("Как вас зовут?");
alert("Добро пожаловать " + name);

//задача5
 var name = confirm("Ты отправил письмо ?");
 if (confirm == true){
     alert(true)
 } else {
     alert(false)
}

//задача6
 var num = prompt("Подтвердите, что вы совершенно летний!");

 if (num >= 18) {
     alert("вы совершеннолетний!");
 } else {
     alert("вы несовершеннолетний, вход запрещен!");
}

//задача7
 var word = prompt("Зимой и летом одним цветом, что это?");

 if (word === "елка") {
     alert("Ответ верен");
 } else{
     alert("Ответ неверен");
 }

//задача8
  var num = prompt("Угадай число от 1 до 10");

  if (num == 7){
     alert("Вы угадали!")
  } else {
     alert("вы ошиблись, но в следующий раз вам обязательно повезет!")
  }

//задача9
var num1 = prompt("Введите сумму зарплаты");
var num2 = num1*1.15; 
    alert("Премия 15%. На руки " + num2);
var num3 = num2*0.9; 
    alert("Налоги -10%. На руки " + num3);
var num4 = num3 - 190
    alert("В магазине оставили 190.Осталось " + num4 );
var num5 = num4 / 2
    alert("Жене вы отдали половину " + num5 );

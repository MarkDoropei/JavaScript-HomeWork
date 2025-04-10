var words = [
    "программа",
    "обезьяна",
    "телевизор",
    "подстаканник",
    "апельсин"
]

var word = words[Math.floor(Math.random() * words.length)];

var answerArray = [ ];

var attempts = prompt("За сколько попыток вы управитесь?");

for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}
var remainingLetters = word.length;

 while (remainingLetters > 0 && attempts > 0){

    attempts--
    alert(answerArray.join(" "));

    var guess = prompt("Угадайте букву или нажмите отмена для выхода из игры.");

    var guess = guess.toLowerCase();

    if (guess === null) {break;}

  else if (guess.length !== 1){alert("Введите только 1 букву");}

  else { for (var j = 0; j < word.length; j++){
            if (word[j] === guess && answerArray[j] === "_") {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }
 }
alert(answerArray.join(" "));
if(attempts > 0) {
    alert("Отлично! Было загадано слово " +word);
} else {
    alert("Увы, но вы не справились! Было загадано слово " +word);
}


var words = [
    "программа",
    "обезьяна",
    "телевизор",
    "подстаканник",
    "апельсин"
]

var word = pickWord();
var answerArray = setupAnswerrray(word);

var attempts = prompt("За сколько попыток вы управитесь?");

for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}
var remainingLetters = word.length;

 while (remainingLetters > 0 && attempts > 0){

    attempts--
    alert(answerArray.join(" "));

    var guess = prompt("Угадайте букву или нажмите отмена для выхода из игры.");

    var guess = guess.toLowerCase();

    if (guess === null) {break;}

  else if (guess.length !== 1){alert("Введите только 1 букву");}

  else { for (var j = 0; j < word.length; j++){
            if (word[j] === guess && answerArray[j] === "_") {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }
 }
alert(answerArray.join(" "));
if(attempts > 0) {
    alert("Отлично! Было загадано слово " +word);
} else {
    alert("Увы, но вы не справились! Было загадано слово " +word);
}


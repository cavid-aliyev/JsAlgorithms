"use strict";

// ?Task-1
//1.Aşağıdakı cümlədə ən uzun sözü tapın.

function longWord(str) {
  var strSplit = str.split(" ");

  var longW = 0;

  for (var i = 0; i < strSplit.length; i++) {

    if (strSplit[i].length > longW) {
      longW = strSplit[i].length;
    }
  }
  return longW;
}

var test = longWord("EcmaCode üzvlərini salamlayırıq");
console.log(test); //12


//?Task 2
//2. Aşağıdakı cümlədə hər bir sözün ilk hərfinin böyük hərf olmasını təmin edin.

function capitalizeWord(text) {

  let wordArr = text.split(' ');

  let capsArray = wordArr.map( word=>{
      return  word.replace(word[0], word[0].toUpperCase());
  });

  return capsArray.join(' ');
}

var test2 = capitalizeWord("Javascript dili çox populyar dildi");
console.log(test2); //Javascript Dili Çox Populyar Dildi



//?Task 3
//3.Aşağıdakı arrayi sort edərək ən böyük rəqəmi çıxardın

function maxNumber(a,b){
  return a-b;
}

function largestNumber(num){
  let maximum = 0;

  for (let i=0; i<num.length; i+=1){
    if(num[i] > maximum){
      maximum = num[i];
    }
  }

  return maximum;
}

var arr = [1, 5, 8, 21, 4];
var arrSorted = arr.sort(maxNumber);

console.log(largestNumber(arrSorted)); //21


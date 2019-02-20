//Hello?

document.getElementById('createFortuneNow').hidden = true;
document.getElementById('textEntryNewFortune').hidden = true;


document.getElementById("createFortune").addEventListener('click', function() {
  document.getElementById('createFortuneNow').hidden = false;
  document.getElementById('textEntryNewFortune').hidden = false;
}); 

//Whatever the Array is vvvvvvv

var array = new  Array();
var array = [
   "If at first you don’t succeed, TPose harder",
   "When in doubt, dab it out",
   "Memes are like grandparents, everyone’s got ‘em, but some are dead.",
   "Look forward to seeing some great memes today",
   "Your great memes are gonna get you far in life",
   "This is so sad, Alexa play Despacito",
   "You don’t have enough money for chicken nuggets",
   "Soon, you WILL have enough money for chicken nuggets",
   "Having a bad day? Not if I have anything to say about it",
   "Don’t get mad, get memes!",
   "You WILL have a good day. There’s nothing you can do to change that",
   "Wow, I really miss Waxy",
   "Pop Tarts are ravioli, change my mind.",
   "Ask not what you can do for your country, ask what you can do for the meme",
   "This is a goo- ThIs Is A gOoD fOrTuNe",
   "Ravioli ravioli give me the formuoli",
   "You kinda look like a meme…. Nerd",
   "Wait… You eat your ramen raw?",
   "The dress is white and gold and the audio says yanny not laurel",
   "Hey Phil Swift here with FLEX TAPE",
   "Life is soup and you’re a fork",
   "Is a hippopotamus a hippopotamus or just a really cool opotamus?",
   "“People don’t think the universe be like it is, but it do.” -Black Science Man",
   "If everyone donated one penny to NASA, it would be really hard to count them."
];

console.log(array);
document.getElementById("createFortuneNow").addEventListener('click', function(evt) {
  evt.preventDefault();
  if (document.getElementById("textEntryNewFortune").value == "") {
    alert('Please enter something if you are going to submit.');
  } else {
    alert('Thanks for entering a fortune!');
    newEntry = document.getElementById('textEntryNewFortune').value;
    array.push(newEntry);
    console.log(array);
    document.getElementById('createFortuneNow').hidden = true;
    document.getElementById('textEntryNewFortune').hidden = true;
  }
});

function randomQuote() {
  random = Math.floor(Math.random() * array.length);
  console.log(random);
  return random;
}

console.log(array[randomQuote()-1]);

document.getElementById('fortuneCookieImg').addEventListener('click', function() {
  document.getElementById('fortuneText').hidden = true;
  document.getElementById('fortuneCookieImg').setAttribute('src', 'Images/cookie.gif');
  setTimeout(function(){ document.getElementById('fortuneCookieImg').setAttribute('src', 'Images/cookiebigboi.png'); document.getElementById('fortuneText').hidden = false; document.getElementById('fortuneText').innerHTML = array[randomQuote()-1]; }, 3000);
});
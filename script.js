/*
// chaine de caractere / string
var var1 = 'ceci est une chaine de caractere';
var var2 = 'ceci est aussi une chaine de caractere';

//nombre/number
var var3 = 12;

//booléens / boo!
var var4 = true;
var var5 = false;

//tableau / array bien finir le tableau par une virgule
var var6 = [
  "premier element",
  "deuxieme element",
  "troisieme element",
];
// objet/object
var var7 = {};

debugger;
*/
//select the div via it's id and store it inside the gameContainer var
/*
let gameContainer = document.querySelector('#game-container')
//when someone clicks on anything inside the game container,it triggers
// the anonymous function
gameContainer.addEventListener('click', function(el){
let childDivs = document.querySelectorAll('#game-container>div');

//we get the target of the click event,which is the specify div and not
//the container div
let clickElement = el.target;

  for(let i = 0; i < childDivs.length; i++)
  if(i > 0 && i < (childDivs.length - 1)) {
        // On va inverser la couleur de la div de gauche et de la div de droite
      } else if(i == 0) {
        // On va inverser la couleur de la div de droite
      } else if(i == (childDivs.length - 1)) {
        // On va inverser la couleur de la div de gauche
      }

  {
    if( i > 0&& 1 <(childDivs.length - 1)){
      //On va inverser

    }else if(i == O){

    }else if(i == (childDivs.length - 1)){
}
*/
// Select the div via it's id and store the selected element
// inside gameContainer var.

let gameContainer = document.querySelector('#game-container');
function invertColor(div){

  let green = "green-color";
  let red = "red-color";
  if(div.classList.contains(green)){
  div.classList.remove(green);
  div.classList.add(red);
}else{
  div.classList.remove(red);
  div.classList.add(green);
}
  //doit permettre d'inverser la couleur de ta div designée
}
function checkVictory(divs){
let victoryStats = true;
for (var i = 0; i < divs.length; i++) {
  if(divs[i].classList.contains('green-color')){
    victoryStats = false;
    break;
  }
}
if(victoryStats == true){
  alert('you win my friends now RUSH B for banana blyat')

}
}


// When someone clicks on anything inside the game container, it triggers
// the anonymous function
gameContainer.addEventListener('click', function(el) {
  let childDivs = document.querySelectorAll('#game-container>div');

  // We get the target of the click event, which is the specific div and not
  // the container div
  let clickedElement = el.target;

  for(let i = 0; i < childDivs.length; i++)
  {

    // childDivs[i] allow us to display every value of the childDivs array
    // because we select it via the array key [i]
    if (childDivs[i] == clickedElement) {


      if(i > 0 && i < (childDivs.length - 1)) {
        invertColor(childDivs[i + 1]);
        invertColor(childDivs[i - 1]);
        // On va inverser la couleur de la div de gauche et de la div de droite
      } else if(i == 0) {
        invertColor(childDivs[i + 1]);
        // On va inverser la couleur de la div de droite
      } else if(i == (childDivs.length - 1)) {
        invertColor(childDivs[i - 1]);
        // On va inverser la couleur de la div de gauche
      };

      checkVictory(childDivs);

    }
  }
});

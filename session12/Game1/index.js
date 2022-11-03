
    
function colourMyTree() {

   let rainbowColour = document.getElementById('answer').value;

   switch(rainbowColour) {

      case 'violet':
         document.getElementById('button-8').style.backgroundColor ='#5f2879';
         document.getElementById('question').innerHTML="You have started off well! Now colour your second tier";
         break;
      case 'indigo':
         if(document.getElementById('button-8').style.backgroundColor !='rgb(95, 40, 121)') {
            alert("you must start from the bottom"); 
         }
         else {
          document.getElementById('button-7').style.backgroundColor ='#00418D';
          document.getElementById('question').innerHTML="Well done! Onto the next tier";
         }
         break;
      case 'blue':
         if(document.getElementById('button-7').style.backgroundColor !='rgb(0, 65, 141)') {
            alert("you must start from the bottom"); 
         }
         else {
         document.getElementById('button-6').style.backgroundColor ='#00C2DE';
         document.getElementById('question').innerHTML="Well done! Onto the next tier";
         }
         break;
      case 'green':
         if(document.getElementById('button-6').style.backgroundColor !='rgb(0, 194, 222)') {
            alert("you must start from the bottom"); 
         }
         else {
            document.getElementById('button-5').style.backgroundColor ='#00BA71';
            document.getElementById('question').innerHTML="Great! Let's keep going";
         }
         break;
      case 'yellow':
         if(document.getElementById('button-5').style.backgroundColor !='rgb(0, 186, 113)') {
            alert("you must start from the bottom"); 
         }
         else {
            document.getElementById('button-4').style.backgroundColor ='#FAD717';
            document.getElementById('question').innerHTML="You are very smart! keep going!";
         }
         break;
      case 'orange':
         if(document.getElementById('button-4').style.backgroundColor !='rgb(250, 215, 23)') {
            alert("you must start from the bottom"); 
         }
         else{
            document.getElementById('button-3').style.backgroundColor ='#FA8901';
            document.getElementById('question').innerHTML="Well done! Onto the next tier";
         }
         break;
      case 'red':
         if(document.getElementById('button-4').style.backgroundColor !='rgb(250, 215, 23)') {
            alert("you must start from the bottom"); 
         }
         else{
            document.getElementById('button-2').style.backgroundColor ='#F43545';
            document.getElementById('question').innerHTML="Well done! Onto the next tier";
         }
         break;
      case '':
         document.getElementById('question').innerHTML="PLEASE ENTER A COLOUR IN THE BOX";
         break;
      default:
         document.getElementById('question').innerHTML="Sorry, wrong one, please try again";
      
   }
   

}


// const colourOrder = ['violet','indigo','blue','green','yellow','orange','red'];


// //change star colour randomly
// function starColour() {
// button-1.background = getRandomColor();
// setTimeout(starColour,1000);
// }

// function getRandomColor() {

//    const maxValue=100; 
//    let red = getRandomNumber(maxValue);
//    let orange = getRandomNumber(maxValue);
//    let yellow = getRandomNumber(maxValue);
//    let green = getRandomNumber(maxValue);
//    let blue = getRandomNumber(maxValue);
//    let indigo = getRandomNumber(maxValue);
//    let violet = getRandomNumber(maxValue);
//    return 'rgb('+red+','+orange+','+yellow+','+green+','+blue+','+indigo+','+violet+')';

// }

// function getRandomNumber(maxValue) {
//    let randomNumber = Math.random();
//    randomNumber = randomNumber*maxValue;
//    randomNumber = Math.floor(randomNumber);
//    return randomNumber;
// }
// if (button-8.background=='violet') {

//    starColour();
// }


// let buttonColour = document.getElementById('button-8').style.backgroundColor;
//  if (buttonColour =='violet') {
//    console.log('yes');
//    document.getElementById('button-1').style.backgroundColor =='red';

//  }



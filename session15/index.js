

// let screenDisplay = document.getElementById('result').value;

let myButtons = Array.from (document.getElementsByClassName('cbutton'));


myButtons.map(myTargetingFunction);

function myTargetingFunction(button){

    button.addEventListener('click', function(evt) {
        // to verify it works
        console.log('clicked');
        console.log(evt);
        console.log(evt.target);
        console.log(evt.target.innerText);

        switch(evt.target.innerText){
            case 'C':
                document.getElementById('result').value ='';
                break;
            case '=':
                try{
                    document.getElementById('result').value = eval(document.getElementById('result').value);                       
                } catch {
                    document.getElementById('result').value = 'error'
                }
                break; 
            default:
                document.getElementById('result').value  += evt.target.innerText;     
                // screenDisplay.innerText  += evt.target.innerText; 
                // screenDisplay has been defined on top but would not work when i use it in the statement...
                //therefore using document.getElementById('result').value
                
        }
    })

}





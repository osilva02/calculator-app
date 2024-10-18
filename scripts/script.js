const display = document.getElementById('display');

// Parameter 'input' cz we pass a character from html  

function appendToDisplay(input) { 
     
    display.value += input;

}

function clearDisplay(){
    display.value = '';
}

function calculateResults(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Invalid";
    }
    

}
workingScreen= document.querySelector('.workingSpace');
answerScreen = document.querySelector('.answer');
numberButtons = document.querySelectorAll('.numberButton');
numberButtons.forEach(number => {
    console.log(number);
    number.addEventListener('click',addToScreen);
    
});

function addToScreen(){
    console.log(this.textContent);
    if(workingScreen.childNodes.length===0){
        workingScreen.textContent="";
    }
    console.log(workingScreen.textContent);
    workingScreen.textContent+= this.textContent;
}



operationButtons= document.querySelectorAll('.operationButton');
operationButtons.forEach(operation=>{
    operation.addEventListener('click',addOperation)
});
var operationSelected=false;
var currentOperation =''

function addOperation(){
    if(!operationSelected && workingScreen.childNodes.length!=0){
        workingScreen.textContent+=`${this.textContent}`;
        operationSelected=true;
        currentOperation=this.textContent;
    }else if(!operationSelected && answerScreen.childNodes.length!=0){
        workingScreen.textContent=answerScreen.textContent+this.textContent;
        if (answerScreen.textContent.indexOf('.')>-1){firstNumberDecimal=true;}
        operationSelected=true;
        currentOperation=this.textContent;
    }


}


equalButton= document.querySelector('.equalButton');
equalButton.addEventListener('click',calculateOperation);

var splitPattern = /[\s()x/%+^-]+/g;  

function calculateOperation(){
    const numbers = workingScreen.textContent.split(splitPattern);
    console.log(numbers);
    if (isNaN(parseFloat(numbers[1]))){return}
    switch(currentOperation){
        case('+'):
        answerScreen.textContent=parseFloat(numbers[0])+parseFloat(numbers[1]);
        break;
        case('-'):
        answerScreen.textContent=parseFloat(numbers[0])-parseFloat(numbers[1]);
        break;
        case('x'):
        answerScreen.textContent=parseFloat(numbers[0])*parseFloat(numbers[1]);
        break;
        case('/'):
        answerScreen.textContent=parseFloat(numbers[0])/parseFloat(numbers[1]);
        break;
        case('^'):
        answerScreen.textContent=Math.pow(parseFloat(numbers[0]),parseFloat(numbers[1]));
        break;



    }
    operationSelected=false;
    firstNumberDecimal=false;
    secondNumberDecimal=false;
    workingScreen.replaceChildren();
}

clearButton = document.querySelector('.clearButton');
clearButton.addEventListener('click',clearworkingScreen)

function clearworkingScreen(){
    workingScreen.replaceChildren();
    operationSelected=false;
    firstNumberDecimal=false;
    secondNumberDecimal=false;
}


deleteButton= document.querySelector('.deleteButton');
deleteButton.addEventListener('click',()=>{
    if(workingScreen.childNodes.length!=0){ 
        removedCharacter= workingScreen.textContent.slice(-2,-1);
        if(removedCharacter==='+' || removedCharacter==='-' || removedCharacter==='/' || removedCharacter==='x' || removedCharacter==='^'){operationSelected=false;}
        if(removedCharacter==='.' && secondNumberDecimal){
            secondNumberDecimal=false;
        }else{ firstNumberDecimal=false;}
        console.log(removedCharacter);
        workingScreen.textContent=workingScreen.textContent.slice(0,-1);}
})


decimalButton = document.querySelector('.decimalButton');
decimalButton.addEventListener('click', addDecimal);
var firstNumberDecimal=false;
var secondNumberDecimal=false;
function addDecimal(){
    if(!firstNumberDecimal && !operationSelected ){
        workingScreen.textContent+='.'
        firstNumberDecimal=true;
    }
    if(operationSelected && !secondNumberDecimal){
        workingScreen.textContent+='.'
        secondNumberDecimal=true;
    }

}

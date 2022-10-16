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
        workingScreen.textContent+=` ${this.textContent} `;
        operationSelected=true;
        currentOperation=this.textContent;
    }

}


equalButton= document.querySelector('.equalButton');
equalButton.addEventListener('click',calculateOperation);
var matchPattern = /[^\s()*/%+-]+/g;  
var splitPattern = /[\s()x/%+-]+/g;  

function calculateOperation(){
    const numbers = workingScreen.textContent.split(splitPattern);
    console.log(numbers);
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


    }
}



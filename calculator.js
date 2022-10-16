workingScreen= document.querySelector('.workingSpace');

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



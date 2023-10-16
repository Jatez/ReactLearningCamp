function sum(a, b) {
    return parseFloat(a) + parseFloat(b);
  }
  
  function substract(a, b) {
    return a-b
  }
  
  function multiply(a, b) {
    return a*b
  }
  
  function divide(a, b) {
    let div = a/b
    if(!div || div === Infinity){
        return 'Error'
    }
    return div;
  }

  function calculator(a, b, operation) {
    switch(operation){
      case '+': 
        return sum(a,b);
        break;
      case '-':
        return substract(a,b);
        break;
      case '*':
        return multiply(a,b);
        break;
      case '/':
        return divide(a,b);
        break;
    }
    
  }
  
const screen = document.querySelector(".screen");

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", ()=>{
        result(button);
    })
});

const result = (button) => {

    switch(button.innerText){
        case '=':
            let index = 0;
            for (let i = 0; i < screen.innerText.length; i++) {
                if(i > 0 && RegExp(/[0-9]/).test(screen.innerText[i-1]) && RegExp(/[\+\-\*\/]/).test(screen.innerText[i])){
                    index = i;
                    break;
                }
            }
            const a = screen.innerText.slice(0, index);
            const b = screen.innerText.slice(index+1);
            const operator = screen.innerText[index]
            screen.innerText = calculator(a, b, operator);
            break;
        case 'C':
            screen.innerText = '';
            break;
        default : 
            screen.innerText = screen.innerText + button.innerText;
            break;
    }
}

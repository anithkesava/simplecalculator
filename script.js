console.log('js code activated');
document.addEventListener('DOMContentLoaded', () => {
    let numbers = [9,8,7,'*',6, 5, 4, '/', 3, 2, 1, '-', 0, 'Clear', '+', '=' ];
    let parent = document.getElementById('digitsoperator');
    numbers.forEach((c) => {
        let button = document.createElement('button');
        button.id = `${c}id`;
        let buttonId = button.id;
        console.log(button.id);
        button.innerText = c;
        //event listener. 
        let answerinput = document.getElementById('answerinpt');
        button.addEventListener('click', () => {
          
            let input = document.getElementById('userinpt');   
                  if (button.innerText === 'Clear')
                  {
                      input.value = '';
                      document.getElementById('answerinpt').value = '';
            }
            else if (button.innerText == "=")
            {
                console.log('the user entered value ',input.value);
                document.getElementById('answerinpt').value = eval(input.value);
            }
            else {                      
                input.value = input.value + button.innerText;
            }
            })

        button.classList.add('numberdigit-btn');
        parent.appendChild(button) 
    })
   
});

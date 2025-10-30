let runningTotal = '';
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        // 1. NÚMEROS, OPERADORS I PUNT        
        if (button.classList.contains('btn_number') || 
            button.classList.contains('btn_ope') || 
            button.classList.contains('btn_dot')) { // <--- CORRECCIÓ / MILLORA
                 
            if (runningTotal === '' && (value === '+' || value === '*' || value === '/')) {
                return; 
            }
            runningTotal += value;
            display.value = runningTotal;
        
        //BOTÓ IGUAL
        } else if (button.classList.contains('btn_equal')) {
            try {
                let result = eval(runningTotal);
                runningTotal = result.toString(); 
                display.value = runningTotal;
            } catch {
                display.value = 'Error';
                runningTotal = '';
            }
        
        //BOTÓ NETEJAR
        } else if (button.classList.contains('btn_clear')) {
            runningTotal = '';
            display.value = '0';
        
        //BOTÓ ESBORRAR 
        } else if (button.classList.contains('btn_del')) {
            runningTotal = runningTotal.slice(0, -1);
                        
            if (runningTotal === '') {
                display.value = '0';
            } else {
                display.value = runningTotal;
            }
        }
    });
});
// Código original del archivo App.js
const fieldset0 = document.getElementById("fieldset0");
const fieldset1 = document.getElementById("fieldset1");
const fieldset2 = document.getElementById("fieldset2");
const fieldset3 = document.getElementById("fieldset3");
const fieldset4 = document.getElementById("fieldset4");
const fieldset5 = document.getElementById("fieldset5");
const fieldset6 = document.getElementById("fieldset6");
const fieldset7 = document.getElementById("fieldset7");
const fieldset8 = document.getElementById("fieldset8");
const fieldset9 = document.getElementById("fieldset9");

let activados = 0;
let desactivados = 0;

const tarea0 = "Create new project";
const estadoTarea0 = false;

if (estadoTarea0) {
    activados = activados + 1;
    fieldset0.innerHTML = `<label class='activado'>${tarea0}</label><input type='checkbox' class='activado boton' /input>`;
} else{
    desactivados = desactivados + 1;
    fieldset0.innerHTML = `<label class='desactivado'>${tarea0}</label><input type='checkbox' class='desactivado check' /input>`;
};

const tarea1 = "Ir a la tienda";
const estadoTarea1 = false;

if (estadoTarea1){
    activados = activados + 1;
    fieldset1.innerHTML = `<label class='activado' >${tarea1}</label><input type='checkbox' class='activado' />`;
} else{
    desactivados = desactivados + 1;
    fieldset1.innerHTML = `<label class='desactivado'>${tarea1}</label><input type='checkbox' class='desactivado check' />`;
};

const tarea2 = "Hacer la comida";
const estadoTarea2 = false;

if (estadoTarea2){
    activados = activados + 1;
    fieldset2.innerHTML = `<label class='activado' >${tarea2}</label><input type='checkbox' class='activado' />`;
} else{
    desactivados = desactivados + 1;
    fieldset2.innerHTML = `<label class='desactivado'>${tarea2}</label><input type='checkbox' class='desactivado check' />`;
};

const tarea3 = "Ir al gimnasio";
const estadoTarea3 = false;

if (estadoTarea3){
    activados = activados + 1;
    fieldset3.innerHTML = `<label class='activado' >${tarea3}</label><input type='checkbox' class='activado' />`;
} else{
    desactivados = desactivados + 1;
    fieldset3.innerHTML = `<label class='desactivado'>${tarea3}</label><input type='checkbox' class='desactivado check' />`;
};

const tarea4 = "Estudiar JavaScript";
const estadoTarea4 = false;

if (estadoTarea4){
    activados = activados + 1;
    fieldset4.innerHTML = `<label class='activado' >${tarea4}</label><input type='checkbox' class='activado' />`;
} else{
    desactivados = desactivados + 1;
    fieldset4.innerHTML = `<label class='desactivado'>${tarea4}</label><input type='checkbox' class='desactivado check' />`;
};

const tarea5 = "Ver la serie de Loki";
const estadoTarea5 = false;

if (estadoTarea5){
    activados = activados + 1;
    fieldset5.innerHTML = `<label class='activado' >${tarea5}</label><input type='checkbox' class='activado' />`;
} else{
    desactivados = desactivados + 1;
    fieldset5.innerHTML = `<label class='desactivado'>${tarea5}</label><input type='checkbox' class='desactivado check' />`;
};

const tarea6 = "Pasear al perro";
const estadoTarea6 = false;

if (estadoTarea6){
    activados = activados + 1;
    fieldset6.innerHTML = `<label class='activado' >${tarea6}</label><input type='checkbox' class='activado' />`;
} else{
    desactivados = desactivados + 1;
    fieldset6.innerHTML = `<label class='desactivado'>${tarea6}</label><input type='checkbox' class='desactivado check' />`;
};

const tarea7 = "Hacer la cena";
const estadoTarea7 = false;

if (estadoTarea7){
    activados = activados + 1;
    fieldset7.innerHTML = `<label class='activado' >${tarea7}</label><input type='checkbox' class='activado' />`;
} else{
    desactivados = desactivados + 1;
    fieldset7.innerHTML = `<label class='desactivado'>${tarea7}</label><input type='checkbox' class='desactivado check' />`;
};

const tarea8 = "Ver una película";
const estadoTarea8 = false;

if (estadoTarea8){
    activados = activados + 1;
    fieldset8.innerHTML = `<label class='activado' >${tarea8}</label><input type='checkbox' class='activado' />`;
} else{
    desactivados = desactivados + 1;
    fieldset8.innerHTML = `<label class='desactivado'>${tarea8}</label><input type='checkbox' class='desactivado check' />`;
};

const tarea9 = "Ir a la cama";
const estadoTarea9 = false;

if (estadoTarea9){
    activados = activados + 1;
    fieldset9.innerHTML = `<label class='activado' >${tarea9}</label><input type='checkbox' class='activado' />`;
} else{
    desactivados = desactivados + 1;
    fieldset9.innerHTML = `<label class='desactivado'>${tarea9}</label><input type='checkbox' class='desactivado check' />`;
};

const contador = document.getElementById("contador");

const inputs = document.querySelectorAll('fieldset input');

inputs.forEach((input, index) => {
    input.addEventListener('change', () => {
        let activados = 0;
        let desactivados = 0;

        if (index === 0) {
            fieldset0.classList.toggle('activado');
        } else{
            fieldset0.classList.toggle('desactivado');
        };

        if (index === 1) {
            fieldset1.classList.toggle('activado');
        } else{
            fieldset1.classList.toggle('desactivado');
        };

        if (index === 2) {
            fieldset2.classList.toggle('activado');
        } else{
            fieldset2.classList.toggle('desactivado');
        };

        if (index === 3) {
            fieldset3.classList.toggle('activado');
        } else{
            fieldset3.classList.toggle('desactivado');
        };

        if (index === 4) {
            fieldset4.classList.toggle('activado');
        } else{
            fieldset4.classList.toggle('desactivado');
        };

        if (index === 5) {
            fieldset5.classList.toggle('activado');
        } else{
            fieldset5.classList.toggle('desactivado');
        };

        if (index === 6) {
            fieldset6.classList.toggle('activado');
        } else{
            fieldset6.classList.toggle('desactivado');
        };

        if (index === 7) {
            fieldset7.classList.toggle('activado');
        } else{
            fieldset7.classList.toggle('desactivado');
        };

        if (index === 8) {
            fieldset8.classList.toggle('activado');
        } else{
            fieldset8.classList.toggle('desactivado');
        };

        if (index === 9) {
            fieldset9.classList.toggle('activado');
        } else{
            fieldset9.classList.toggle('desactivado');
        };

        inputs.forEach(input => {
            if (input.checked) {
                activados++;
            } else {
                desactivados++;
            }
        });

        contador.innerHTML = "La cantidad de tareas completadas es de " + activados + " y la cantidad de tareas sin completar es de " + desactivados + ".";
    });
});


window.onload = function() {
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.forEach((todo, index) => {
        const fieldset = document.getElementById(`fieldset${index}`);
        const labelClass = todo.completed ? 'activado' : 'desactivado';
        fieldset.innerHTML = `<label class='${labelClass}'>${todo.text}</label><input type='checkbox' class='${labelClass} check' ${todo.completed ? 'checked' : ''} />`;

    
        fieldset.querySelector('input').addEventListener('change', function() {
            todo.completed = !todo.completed;
            localStorage.setItem('todos', JSON.stringify(todos));
            this.parentElement.querySelector('label').className = todo.completed ? 'activado' : 'desactivado';
            this.className = todo.completed ? 'activado check' : 'desactivado check';
            actualizarContador();
        });
    });
    actualizarContador();
};


function actualizarContador() {
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    let activados = todos.filter(todo => todo.completed).length;
    let desactivados = todos.length - activados;
    document.getElementById('contador').innerText = `La cantidad de tareas completadas es de ${activados} y la cantidad de tareas sin completar es de ${desactivados}.`;
}

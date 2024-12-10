var cnt = document.querySelector('.container');

function randomColor(number) {
   return Math.floor(Math.random() * (number+1));
}

function createKvadrat(amount) {
    amount = Math.min(amount,200);
    cnt.innerHTML = '';

    for (let i=0; i<amount; i++) {
        const btn = document.createElement('button');
        cnt.appendChild(btn);
        btn.style.cssText = "border: 1px solid black;padding: 2rem; cursor: pointer;";

        btn.addEventListener('mousemove', function (color) {
            const rnd =   btn.style.backgroundColor = `rgb(${randomColor(255)}, ${randomColor(255)}, ${randomColor(255)})`;
            btn.style.backgroundColor = rnd;
        });

        const del = document.querySelector('.delete');
        del.addEventListener('click', () => {
        btn.style.backgroundColor = "white";
  })


    }
}

const amount = parseInt(prompt("Введите значение от 1 до 200"));

if (!isNaN(amount) && amount>=1 && amount<=200) {
    createKvadrat(amount);
}else {
    alert("Ошибка!Введите верное значение");
}


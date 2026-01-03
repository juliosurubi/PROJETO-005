const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const items = document.querySelectorAll('.item');
const dots = document.querySelectorAll('.dot');
const numberIndicator = document.querySelector(".numbers");
const list = document.querySelector('.list');

let active = 0;
const total = items.length;
let timer;

function update(direction) {
    // Remove a classe 'active' atual
    document.querySelector('.item.active').classList.remove('active');
    document.querySelector('.dot.active').classList.remove('active');

    // Avança ou retrocede
    if (direction > 0) {
        active++;
        if (active === total) {
            active = 0; // volta ao início
        }
    } else if (direction < 0) {
        active--;
        if (active < 0) {
            active = total - 1; // vai para o último item
        }
    }

    // Adiciona 'active' ao novo item
    items[active].classList.add('active');
    dots[active].classList.add('active');

    // Atualiza o número embaixo (ex.: 01 / 03)
    numberIndicator.textContent = String(active + 1).padStart(2, '0');
}

// Inicializa o indicador numérico
numberIndicator.textContent = String(active + 1).padStart(2, '0');

// Intervalo automático (troca a cada 4 segundos)
clearInterval(timer);
timer = setInterval(() => {
    update(1); // avança automaticamente
}, 4000);

// Eventos dos botões
prevButton.addEventListener('click', () => update(-1));
nextButton.addEventListener('click', () => update(1));

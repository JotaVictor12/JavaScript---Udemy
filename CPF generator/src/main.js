import './assets/css/style.css';
import GeraCPF from './modules/GeraCPF';

(function() {
    document.addEventListener('click', (e) => {
        const el = e.target;

        if(el.classList.contains('gera-cpf')){
            adicionaCPF();
        }

    })
})();

function adicionaCPF() {
    const gera = new GeraCPF();
    const cpfGerado = document.querySelector('.cpf-gerado');
    cpfGerado.innerHTML = gera.geraNovoCPF();
};

function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    function recebeEventoForm(evento) {
        evento.preventDefault();
        let inputAltura = form.querySelector('.altura');
        let inputPeso = form.querySelector('.peso');

        let altura = Number(inputAltura.value);
        let peso = Number(inputPeso.value);

        console.log(altura);
        console.log(typeof altura);
        function calculaIMC(peso, altura) {
            let alturaEmM = altura / 100;
            let IMC = peso / (alturaEmM * alturaEmM);
            return IMC;
        }
        let IMC = calculaIMC(peso, altura);

        function setResultado(texto, classe) {
            resultado.innerHTML = texto;
            resultado.classList.remove('baixo', 'normal', 'sobrepeso', 'obesidade');
            resultado.classList.add(classe);
        }

        if (IMC > 0 && IMC <= 18.5) {
            setResultado(`Seu IMC é: ${IMC.toFixed(2)} – Abaixo do peso`, 'baixo');
        } else if (IMC > 18.5 && IMC < 25) {
            setResultado(`Seu IMC é: ${IMC.toFixed(2)} – Peso normal`, 'normal');
        } else if (IMC >= 25 && IMC < 30) {
            setResultado(`Seu IMC é: ${IMC.toFixed(2)} – Sobrepeso`, 'sobrepeso');
        } else if (IMC >= 30 && IMC < 35) {
            setResultado(`Seu IMC é: ${IMC.toFixed(2)} – Obesidade grau 1`, 'obesidade');
        } else if (IMC >= 35 && IMC < 40) {
            setResultado(`Seu IMC é: ${IMC.toFixed(2)} – Obesidade grau 2`, 'obesidade');
        } else if (IMC > 40) {
            setResultado(`Seu IMC é: ${IMC.toFixed(2)} – Obesidade grau 3`, 'obesidade');
        } else {
            resultado.innerHTML = `valor inválido`;
        }
 
    }

    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();


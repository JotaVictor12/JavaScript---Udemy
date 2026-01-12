import geraSenha from "./geradores";

const senhaGerada = document.querySelector('.senha-gerada');
const quantidadeCaracteres = document.querySelector('.qtd-caracteres'); 
const chkMaiusculas = document.querySelector('.chk-maiusculas');
const chkMinusculas = document.querySelector('.chk-minusculas');
const chkNumeros = document.querySelector('.chk-numeros');
const chkSimbolos = document.querySelector('.chk-simbolos');
const gerarSenha = document.querySelector('.gera-senha');

export default () => {
    gerarSenha.addEventListener('click', () => {
        return senhaGerada.innerHTML = geraSenha(quantidadeCaracteres.value, chkMaiusculas.checked, chkMinusculas.checked, chkNumeros.checked, chkSimbolos.checked);
    })
}


 

function meuEscopo(){
     const form = document.querySelector('.form');//selecionando o form pela classe
     const resultado = document.querySelector('.resultado');

     const pessoas = [];

       function recebeEventoForm (evento) {
            evento.preventDefault();

            const nome = form.querySelector('.nome');
            const sobrenome = form.querySelector('.sobrenome');
            const peso = form.querySelector('.peso');
            const altura = form.querySelector('.altura');

              function criaPessoas(nome, sobrenome, peso, altura){
                return{
                    nome: nome,
                    sobrenome: sobrenome,
                    peso: peso,
                    altura: altura
                }
            }
            pessoas.push(criaPessoas(nome.value, sobrenome.value, peso.value, altura.value))
            console.log(pessoas);
            
        resultado.innerHTML += `<p>Nome: ${nome.value} ${sobrenome.value}<br />` + `Peso: ${peso.value} Kg<BR />` + `Altura: ${altura.value} Cm</p>`;
       }
            
       form.addEventListener('submit', recebeEventoForm);
    }


meuEscopo(); 

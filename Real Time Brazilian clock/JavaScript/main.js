function meuEscopo(){

const dataAtual = document.querySelector('.dataAtual');

function zeroAEsquerda(num){
    return num < 10 ? `0${num}` : num;
}

function dataHoje(data){
    data = new Date();
    diaMes = zeroAEsquerda(data.getDate());
    diaSemana = data.getDay();
    Mes = zeroAEsquerda(data.getMonth());
    Ano = zeroAEsquerda(data.getFullYear());
    Hora = zeroAEsquerda(data.getHours());
    Minuto = zeroAEsquerda(data.getMinutes());


    switch(diaSemana){
        case 0:
            diaSemana = "Domingo";
        break;
        case 1:
            diaSemana = "Segunda-Feira";
        break;
        case 2:
            diaSemana = "Terça-Feira";
        break;
        case 3:
            diaSemana = "Quarta-Feira";
        break;
        case 4:
            diaSemana = "Quinta-Feira";
        break;
        case 5:
            diaSemana = "Sexta-Feira";
        break;
        case 6:
            diaSemana = "Sábado";
        break;
        default:
            diaSemana = '';
    }

    switch(Mes){
        case 0:
            Mes = 'Janeiro';
        break;
        case 1:
            Mes = 'Fevereiro';
        break;
        case 2:
            Mes = 'Março';
        break;
        case 3:
            Mes = 'Abril';
        break;
        case 4:
            Mes = 'Maio';
        break;
        case 5:
            Mes = 'Junho';
        break;
        case 6:
            Mes = 'Julho';
        break;
        case 7:
            Mes = 'Agosto';
        break;
        case 8:
            Mes = 'Setembro';
        break;
        case 9:
            Mes = 'Outubro';
        break;
        case 10:
            Mes = 'Novembro';
        break;
        case 11:
            Mes = 'Dezembro';
        break;
        default:
            Mes = ''; 
    }

    
    dataAtual.innerHTML = `${diaSemana}, ${diaMes} de ${Mes} de ${Ano} \n${Hora}:${Minuto}`;
}
dataHoje();
setInterval(dataHoje, 1000);

}

meuEscopo();

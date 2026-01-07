class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            enumerable: true,
            get: () => {
                return cpfEnviado.replace(/\D+/g, '');
            }
        })
    }

    valida() {
        if(typeof this.cpfLimpo === 'undefined') return false;
        if(this.cpfLimpo.length !== 11) return false
        if(this.verificaSequencia()) return false;

        let cpfParcial = this.cpfLimpo.slice(0, -2);
        const digito1 = this.criaDigito(cpfParcial);
        const digito2 = this.criaDigito(cpfParcial + digito1);
        const novoCpf = cpfParcial + digito1 + digito2;
        return novoCpf === this.cpfLimpo;
    }

    criaDigito(cpfParcial) {
        let cpfArray = Array.from(cpfParcial);
        let regressivo = cpfParcial.length + 1;
        const total = cpfArray.reduce((acumulador, valor) => {
            acumulador += (Number(valor) * regressivo);
            regressivo--;
            return acumulador;
        }, 0);
        return 11 - (total % 11);
    }

    verificaSequencia() {
        const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
        return sequencia === this.cpfLimpo;
    }
}

const cpf = new ValidaCPF('476.916.688-56');
if(cpf.valida()){
    console.log('CPF válido!');
} else {
    console.log('CPF inválido!');
}


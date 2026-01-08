class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            enumerable: true,
            configurable: false,
            get: () => {
                return cpfEnviado.replace(/\D+/g, '');
            }
        })
    }

    valida() {
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo === 'undefined') return false;
        if(this.cpfLimpo.length !== 11) return false
        if(this.verificaSequencia()) return false;

        let cpfParcial = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidaCPF.criaDigito(cpfParcial);
        const digito2 = ValidaCPF.criaDigito(cpfParcial + digito1);
        const novoCpf = cpfParcial + digito1 + digito2;
        return novoCpf === this.cpfLimpo;
    }

    static criaDigito(cpfParcial) {
        let cpfArray = Array.from(cpfParcial);
        let regressivo = cpfParcial.length + 1;
        const total = cpfArray.reduce((acumulador, valor) => {
            acumulador += (Number(valor) * regressivo);
            regressivo--;
            return acumulador;
        }, 0);
        const digito = 11 - (total % 11);
        if(digito > 9) return 0;
        return digito;
    }

    verificaSequencia() { 
        const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
        return sequencia === this.cpfLimpo;
    }
}


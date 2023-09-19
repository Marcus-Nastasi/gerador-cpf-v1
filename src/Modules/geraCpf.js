
// Gerador de CPF

import ValidaCPF from "./ValidaCPF";

export default class GeraCpf {
    rand(min = 100000000, max = 999999999) {
        return String(Math.floor(Math.random() * (max - min) + min));
    }

    formatado(cpf) {
        return (
            cpf.slice(0, 3) + '.' + cpf.slice(3, 6) + '.' + cpf.slice(6, 9) + '-' + cpf.slice(9, 11)
        );
    }

    geraNovoCpf() {
        const cpfSemDigito = this.rand();
        const digitoUm = ValidaCPF.geraDigito(cpfSemDigito);
        const digitoDois = ValidaCPF.geraDigito(cpfSemDigito + digitoUm);
        const novoCpf = cpfSemDigito + digitoUm + digitoDois;
        return this.formatado(novoCpf);
    }
}
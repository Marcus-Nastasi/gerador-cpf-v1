

import ValidaCPF from './Modules/ValidaCPF';
import GeraCpf from './Modules/geraCpf'; 

import './assets/css/style.css';

(function() {

    function gerar() {
        const limpaCampo = document.querySelector('.par-resultado').classList.remove('par-resultado');

        document.addEventListener('click', (e) => {
            let event = e.target;
            let gerador = document.getElementById('btn-gerador');

            if(event == gerador) {
                const gera = new GeraCpf();

                const cpfGerado = document.querySelector('p');
                cpfGerado.classList.add('par-resultado');
                cpfGerado.innerText = gera.geraNovoCpf();
            }
        });
    }
    gerar();

    function valida() {
        document.addEventListener('click', (e) => {
            let evento = e.target;
            const btn = document.getElementById('btn-valida');
            const inp = document.getElementById('inp-valida');

            if(evento == btn) {
                let cpfEnviado = inp.value;
                inp.value = '';

                const validando = new ValidaCPF(cpfEnviado);

                const p = document.querySelector('p');
                p.classList.add('par-resultado');
                
                if(!validando.valida()) {
                    return p.innerText = `${String(cpfEnviado)} é Inválido`;
                }

                return p.innerText = `${String(cpfEnviado)} é Válido`;
            }
        });
    }
    valida();

})();
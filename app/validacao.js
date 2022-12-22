function verificaChute(chute){
    const numero = +chute;

    if(chuteInvalido(numero)){
        elementoChute.innerHTML += '<div>Valor inválido</div>';
    }

    if(numeroAcimaDoLimite(numero)){
        elementoChute.innerHTML += `<div>Valor inválido: o numero secreto precisa estar entre ${menorValor} e ${maiorValor}</div>`;
    }

    if(numero === numeroSecreto){
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h2>
        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
    }else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O numero secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>
        `
    }else{
        elementoChute.innerHTML += `
        <div>O numero secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>
        `
    }
}


function chuteInvalido(numero){
    return Number.isNaN(numero);
}

function numeroAcimaDoLimite(numero){
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e => {
    if(e.target.id === 'jogar-novamente'){
        window.location.reload();
    }
})
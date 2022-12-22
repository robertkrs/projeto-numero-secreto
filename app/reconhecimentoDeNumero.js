///Tentativa de fazer o jogo funcionar atraves de input

const form = document.getElementById("form");

form.addEventListener('submit', function evento(e){

    e.preventDefault();

    const numero = e.target.elements['texto'];
    console.log(numero.value)

    verificaChute(numero.value);
})

form.addEventListener('end', () => form.start)
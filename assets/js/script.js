alert('Olá!');
const digite = document.querySelector('#original')
const conta = document.querySelector('#conta')
conta.innerHTML = 0
const digitado = document.querySelector('#modificado')
const efeito = document.querySelector('#efeito')


digite.addEventListener('keyup', function() {
    conta.innerHTML = 0 + digite.value.length
    if (efeito.value == 'uppercase') {
        modificado.innerHTML = original.value.toUpperCase();
    } else {
        modificado.innerHTMLj = original.value.toLowerCase();
    }
})
efeito.addEventListener('change', function() {

    if (efeito.value == 'lowercase') {
        modificado.innerHTML = original.value.toLowerCase();
    } else {
        modificado.innerHTML = original.value.toUpperCase();
    }
})
const enviar = document.getElementById('formulario');

function calcular(){
    const a = document.getElementById('valorA').value;
    const b = document.getElementById('valorB').value;

    if (a > b){
        alert('FALHA!! O valor de B é menor do que A!');
    } else if( a == b){
        alert('FALHA!! os valore são iguais!');
    } else{
        alert('SUCESSO!! O valor de B é maior do que A!');
    }
};

enviar.addEventListener('submit', function(e){
    e.preventDefault();
})
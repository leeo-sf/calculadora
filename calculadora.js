/* Função de inserir número */
function inserir(num) {
    var numero = document.getElementById('resultado').innerHTML  /* Obtendo número digitado */
    document.getElementById('resultado').innerHTML = numero + num  /* A cada número digitado, adicione no display do lado direito */
}


/* Função de limpar display */
function clean() {
    document.getElementById('resultado').innerHTML = "";
}


/* Função de limpar o ultimo elemento digitado */
function back() {
    var resultado = document.getElementById('resultado').innerHTML;  /* Atribuindo elemtentos que foram digitados */
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);  /* Apagando o ultimo elemento digitado (elemento que estiver a direita) */
}


/* Função calcular */
function calcular() {
    var resultado = document.getElementById('resultado').innerHTML;  /* Atribuindo elemento que foi digitado. */

    if (resultado) {  /* Se tiver elementos */
        var sum = document.getElementById('resultado').innerHTML = eval(resultado)  /* Calcule */
    } 
    else {  /* Senão */
        document.getElementById('resultado').innerHTML = 'Operação Inválida'  /* Mostre a mensagem */
    }
}


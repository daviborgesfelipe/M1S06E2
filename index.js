
// let somar = document.getElementById('somar').value
// let subtrair = document.getElementById('subtrair').value
// let dividir = document.getElementById('dividir').value
// let multiplicar = document.getElementById('multiplicar').value



let botaoCalcular = document.getElementById('btnCalcular')




function calcularTotal() {
    let operacao = document.getElementById('inputOperacao').value
    let inputUm = Number(document.getElementById('inputUm').value)
    let inputDois = Number(document.getElementById('inputDois').value)
    let resultado;
    console.log(inputUm, inputDois, operacao, resultado)
    switch(operacao){
        case 'somar':
            resultado = inputUm + inputDois;
            console.log(inputUm, inputDois, operacao, resultado)
        break;
        case 'subtrair':
            resultado = inputUm - inputDois;
            console.log(inputUm, inputDois, operacao, resultado)
        break;
        case 'dividir':
            resultado = inputUm / inputDois;
            console.log(inputUm, inputDois, operacao, resultado)
        break;
        case 'multiplicar':
            resultado = inputUm * inputDois;
            console.log(inputUm, inputDois, operacao, resultado)
        break;
        default:
            resultado = "Digite uma operação valida"
            console.log(inputUm, inputDois, operacao, resultado)
             
    }
    //
    //selecina um <elemento> pelo id
    let corpo_elemento = document.getElementById('divResultado')
    
    //cria o elemento <p>
    // let elemento = document.createElement("p")
    // elemento.innerHTML = /*html*/ `${resultado}`
    
    //substitui o elemento
    let elemento = document.getElementById('elSubstituido')
    elemento.innerText = /*html*/ `${resultado}`

    console.log(inputUm, inputDois, operacao, resultado)
    
    //renderiza o elemento <p> no corpo do elemento <div>
    corpo_elemento.appendChild(elemento);
    

    // botaoCalcular.addEventListener('click', () => {
    //     calcularTotal
    // })
}
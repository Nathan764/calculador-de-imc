function calcular(){
    let saida = document.getElementById('saida')
    let peso = Number(document.getElementById('peso').value)
    let altura = Number(document.getElementById('altura').value)

    let soma = peso / (altura * altura)

    if (soma <= 18.5) {
        saida.innerHTML += `<p>Seu teste deu ${soma}. Abaixo do peso `
    }
    else if(soma >= 18.6 && soma <= 24.9){
        saida.innerHTML += `<p>Seu teste deu ${soma}. Peso ideal (Parabens)`
    }
    else if (soma >= 25 && soma <= 29.9)
}



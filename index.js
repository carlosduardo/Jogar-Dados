function jogarDado(){
    const quantidadeDeDados = Number(document.getElementById("quantidadeDeDados").value);
       
    const resultadoDados = document.getElementById("resultadoDados");

    const imagemDados = document.getElementById("imagemDados");

    const valores = [];

    const imagens = [];

    if(quantidadeDeDados < 1 || quantidadeDeDados > 10){
        resultadoDados.textContent = "";
        imagemDados.textContent = "";
        return resultadoDados.textContent = "Valor fora do padrão, escolha um número entre 1 a 10"
    }
    
    for(let i = 0; i < quantidadeDeDados; i++){        
        valores.push(Math.floor((Math.random() * 6)) + 1);
        imagens.push(`<img src = "imagens-faces-dado/${valores[i]}.png" alt="Dado ${i+1} - face: ${valores[i]}">`);        
    }

    resultadoDados.textContent = `Face(s): ${valores.join(', ')}`;   
    imagemDados.innerHTML = imagens.join(' ');
}

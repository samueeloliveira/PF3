const calcular = document.getElementById('calcular');

function poupador () {
    const nome = document.getElementById('nome').value;
    const dinheiro = document.getElementById('dinheiro').value;
    const meses = document.getElementById('meses').value;
    const juros = document.getElementById('juros').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && dinheiro !== '' && meses !== '') {

        const valorpoupador = (dinheiro / (meses * juros)).toFixed(1);

        resultado.textContent = `${nome} “, se você aplicar ${dinheiro} , à taxa de juros de 1% ao mês, durante ${meses} meses, acumulará uma poupança de R$ ${resultado}".  ${valorpoupador}`;
        
    }else {
        resultado.textContent = 'Preencha todos os campos!!!';
    }

}

calcular.addEventListener('click', poupador);
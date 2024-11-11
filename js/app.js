let cbProdutos = document.getElementById('produto');
let lbValorTotal = document.getElementById('valor-total');
let lbListaProdutos = document.getElementById('lista-produtos');
let edtQuantidade = document.getElementById('quantidade');
let vlTotalCompra = 0;


function adicionar(){
    let AQuantidade = edtQuantidade.value;


    if(AQuantidade == ''){
        alert('Preencha o campo quantidade!');
        return; 
    }

    let { vlTotalItem, ADescricao } = getProduto();
    let AProduto = document.createElement('section');
    vlTotalCompra = vlTotalCompra + vlTotalItem;
    AProduto.className = 'carrinho__produtos__produto';
    AProduto.innerHTML = `<span class="texto-azul">${AQuantidade}x</span> ${ADescricao} <span class="texto-azul">R$${vlTotalItem}</span>`;
    lbListaProdutos.appendChild(AProduto);
    lbValorTotal.innerHTML = `<span class="texto-azul" id="valor-total">R$${vlTotalCompra}</span>`;
    
    function getProduto() {
        let AProduto = cbProdutos.value;
        let parts = AProduto.split(" - ");
        let ADescricao = parts[0];
        let AValor = parts[1].replace("R$", "");
        let vlTotalItem = (parseFloat(AValor) * parseInt(AQuantidade));
        return { vlTotalItem, ADescricao };
    }
}

function limpar(){
    lbValorTotal.innerHTML = '<span class="texto-azul" id="valor-total">R$0,00</span>';
    lbListaProdutos.innerText = '';
    vlTotalCompra = 0;
}



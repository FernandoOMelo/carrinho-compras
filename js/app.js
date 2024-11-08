let cbProdutos = document.getElementById('produto');
let lbValorTotal = document.getElementById('valor-total');
let lbListaProdutos = document.getElementById('lista-produtos');
let edtQuantidade = document.getElementById('quantidade');
let vlTotalCompra = 0;


function adicionar(){
    let AProduto = cbProdutos.value;
    let parts = AProduto.split(" - ");
    let ADescricao = parts[0];
    let AValor = parts[1].replace("R$", "");
    AValor = parseFloat(AValor);
    let AQuantidade = edtQuantidade.value;
    let vlTotalItem = (AValor * parseInt(AQuantidade));
    let texto = ''

    vlTotalCompra = vlTotalCompra + vlTotalItem;
    texto = `<span class="texto-azul">${AQuantidade}x</span> ${ADescricao} <span class="texto-azul">R$${vlTotalItem}</span>`
    lbListaProdutos.innerHTML = texto;
    lbValorTotal.innerHTML = `<span class="texto-azul" id="valor-total">R$${vlTotalCompra}</span>`;
}

function limpar(){
    lbValorTotal.innerHTML = '<span class="texto-azul" id="valor-total">R$0,00</span>';
    lbListaProdutos.innerText = '';
}


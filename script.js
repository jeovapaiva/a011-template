const carrinho = {
    nome: "jeova",
    formaDePagamento: "cartão e pix",
    endereço: "bairro centro",
    itens: ["arroz", "feijão", "macarrão", "carne", "tempero"]
    


}

console.log(carrinho);

carrinho.modulo = "supermercadoDePortalegre"

console.log("objeto carrinho", carrinho)

console.log("nome da pessoa", carrinho)
console.log("deixar itens fora das compras", carrinho.itens[3])
console.log("modulo atual:", carrinho.modulo)

const copiaCarrinho = { ...carrinho}
console.log("copia do objeto carrinho:", copiaCarrinho)

copiaCarrinho.nome = "paiva"
copiaCarrinho.formaDePagamento = "cheque"
copiaCarrinho.endereço = "sitío" 
copiaCarrinho.itens = [... carrinho.itens, "sal"]
copiaCarrinho.modulo = "sitío"

console.log("copia do objeto carrinho com alteração:", carrinho)

const carrinhoTotal = []
carrinhoTotal.push(carrinho)
carrinhoTotal.push(copiaCarrinho)

console.log("array dos objetos:", carrinhoTotal)

// console.log(carrinho.nome);
// console.log(carrinho.formaDePagamento);
// console.log(carrinho.endereço);

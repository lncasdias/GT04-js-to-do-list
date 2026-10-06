let cards = [];



function pesquisarCard(termo){
    if (termo.length != 3) {
        // carregar cards normalmente
        carregarCards(cards);
        return;
    } else{
        let encontrados = cards.filter((card) => {return card.content.includes(termo)}) // procurar pelo content (conteúdo) do card; ver se precisa 
    }
    carregarCards(encontrados);
}
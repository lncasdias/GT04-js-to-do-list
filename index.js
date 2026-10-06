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

function carregarCards(cards){

}

function novaTarefa(){
    let novoCard = document.querySelector("#novoCard");
    let fechar = document.querySelector("#fechar");
    novoCard.classList.remove('hidden');
    console.log(fechar.value);
}

function closePopUp(){
    fechar =  
}
let cards = {};

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

function buscarTarefas(){
    try {

        let usuario = JSON.parse(sessionStorage.getItem("usuario")) || null; // vem como tipo String e é convertido como Object

        if (!usuario){
            window.location.href = "index.html";
        }

        fetch(`https://js-lista-de-tarefas-api.onrender.com/tarefas/${usuario.id}`)
        .then(resposta => resposta.json())
        .then(json => {
            if (json.tipo == "error"){
                throw json.mensagem;
            }

            tarefas = json;
            carregarTarefas(tarefas);
        })
    } catch (error) {
        console.log("Error: ", error.message);
    }
}

buscarTarefas();

function carregarTarefas(listaTarefas){
    let grid = document.querySelector("#tarefas");
    
    if (listaTarefas.length == 0){
        grid.innerHTML = "<p>Crie sua primeira tarefa</p>";
    }
}

function novaTarefa(){
    let novoCard = document.querySelector("#novoCard");
    let fechar = document.querySelector("#fechar").value;
    let overlay = document.querySelector("#overlay")
    novoCard.classList.remove('hidden'); 
    
    let titulo = document.querySelector("#titulo").value;
    let conteudo = document.querySelector("#tarefa").value;
}

function closePopUp(){
    fechar =  novoCard.classList.add('hidden');
    fecharOverlay = overlay.classList.add('hidden')
}

function criarNovaTarefa(dados){

}
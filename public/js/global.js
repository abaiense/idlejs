
$(document).ready(function(){
    clickerTap();
    InfinityLoop();
    comprarUpgradeClique();

    inicializarCampos(guerreiro);
    inicializarCampos(arqueiro);
    inicializarCampos(mago);

    comprarUpgradeWorker(guerreiro);
    comprarUpgradeWorker(arqueiro);
    comprarUpgradeWorker(mago);

});

// $(clique.classe.preco).text(clique.values.preco);
// $(clique.classe.poder).text(clique.values.poder);
// $(guerreiro.classe.preco).text(guerreiro.values.preco);
// $(guerreiro.classe.poder).text(guerreiro.values.poder);

function inicializarCampos(i){
    $(i.classe.preco).text(i.values.preco);
    $(i.classe.poder).text(i.values.poder);
}

function clickerTap(){
    $("#tabButton").click(function(){    
        global.values.banco += global.values.poderClique

        global.values.banco.toFixed(2);

        $(global.classe.banco).text(global.values.banco);
    });    
}

function InfinityLoop(){

    setInterval(() => {

        global.values.banco = global.values.banco + global.values.poderTotalGerado;
        global.values.banco.toFixed(2);

        $(global.classe.banco).text(global.values.banco);
    }, 1000);
}

function comprarUpgradeClique(){
    $(clique.classe.btnComprar).click(() => {
        
        if (global.values.banco >= clique.values.preco){

            global.values.banco -= clique.values.preco;
            global.values.banco.toFixed(2);

            $(global.classe.banco).text(global.values.banco);

            clique.values.quantidade++
            $(clique.classe.quantidade).text(clique.values.quantidade);

            clique.values.preco = clique.values.preco * 1.1;
            $(clique.classe.preco).text(clique.values.preco.toFixed(2));

            $(clique.classe.poderGerado).text(clique.values.poder * clique.values.quantidade);

            global.values.poderClique = clique.values.poder * clique.values.quantidade;
            $(global.classe.poderClique).text(global.values.poderClique);
        } else {
            console.log("saldo insuficiente!");
        }
    });
}

function comprarUpgradeWorker(i){
    $(i.classe.btnComprar).click(() => {

        if (global.values.banco >= i.values.preco){

            global.values.banco -= i.values.preco;
            global.values.banco.toFixed(2);

            $(global.classe.banco).text(global.values.banco);

            i.values.quantidade++
            $(i.classe.quantidade).text(i.values.quantidade);

            i.values.preco = i.values.preco * 1.1;
            $(i.classe.preco).text(i.values.preco.toFixed(2));

            $(i.classe.poderGerado).text(i.values.poder * i.values.quantidade);

            global.values.poderTotalGerado = i.values.poder * i.values.quantidade;
            $(global.classe.poderTotalGerado).text(global.values.poderTotalGerado);
        } else {
            console.log("saldo insuficiente!");
        }
    });
}

console.log("teste");

// ferramenta.upgrade.primeiro
// var teste = $("#poder").data("poder");
// console.log(teste);

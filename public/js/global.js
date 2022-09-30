
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

        upgradesBuy(clique);
        updateCampos();
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

function upgradesBuy(i){

    Object.keys(i.values.upgrades.price).forEach((keys) => {

        if (global.values.banco >= i.values.upgrades.price[keys]){
            
            $(i.classe.upgrades[keys]).removeClass("disable");
            
            i.values.upgrades.values[keys] = true;

            console.log("teste values antes: " + i.values.upgrades.values[keys]);
            console.log("teste comprado antes: " + i.values.upgrades.comprado[keys]);
            if (i.values.upgrades.values[keys] == true & i.values.upgrades.comprado[keys] == false) {
               
                $(i.classe.upgrades[keys]).click(function(){

                    i.values.upgrades.comprado[keys] = true;

                    var power = i.values.poder * clique.values.upgrades.upgradePower[keys];
            
                    i.values.poder = power;
            
                    console.log("teste ->" + i.values.poder);
                    
                    $(i.classe.poder).text(power);

                    console.log("teste values depois: " + i.values.upgrades.values[keys]);
                    console.log("teste comprado depois: " + i.values.upgrades.comprado[keys]);
            
                });

            }
    
        } else {
            clique.values.upgrades.values[keys] = false;
        }

    });

    verificaUpgradeComprado(i);

}

function verificaUpgradeComprado(i){

    Object.keys(i.values.upgrades.values).forEach((key) => {

        if (i.values.upgrades.values[key] == true){
            $(i.classe.upgrades[key]).removeClass("disable");
        } else {
            $(clique.classe.upgrades[key]).addClass("disable");
        }
        
    });

    Object.keys(i.values.upgrades.comprado).forEach((key) => {

        if (i.values.upgrades.comprado[key] == true){
            $(i.classe.upgrades[key]).addClass("upgradeComprado");
        };
        
    });

}

function updateCampos(){
    $(clique.classe.poder).text(clique.values.poder);
    $(clique.classe.preco).text(clique.values.preco.toFixed(2));
    $(clique.classe.quantidade).text(clique.values.quantidade);
    $(clique.classe.poderGerado).text(clique.values.poderGerado);
}

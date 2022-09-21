var ferramenta = {
    button: "#btn-comprarFerramenta",
    campoDado: ".ferramentas",
    valor: ".valor-ferramenta",
    poder: "#poder",
    upgrade: {
        primeiro: false,
        segundo: false,
        terceiro: false,
        quarto: false
    }
}

// ferramenta.upgrade.primeiro
// var teste = $("#poder").data("poder");
// console.log(teste);

var trabalhador = {
    button: "#btn-comprarTrabalhador",
    campoDado: ".trabalhador",
    valor: ".valor-trabalhador",
    poder: "#idle",
    upgrade01: false,
    upgrade02: false,
    upgrade03: false,
    upgrade04: false
}

var poder = parseInt($("#poder").text());
var banco = parseInt($("#banco").text());
var idle = parseInt($("#idle").text());

$(document).ready(function(){
    cliqueTap();
    InfinityLoop();

    testeUpgrade(ferramenta);
    testeUpgrade(trabalhador);
    // comprarUpgrade("#btn-comprarTrabalhador", ".trabalhador", ".valor-trabalhador", "#idle");
});


function cliqueTap(){
    $("#btn-click").click(function(){
        poder = parseInt($("#poder").text());
    
        banco += poder;
        banco.toFixed(2);
    
        $("#banco").text(banco);
    });    
}

function InfinityLoop(){

    setInterval(() => {
        var idle = parseFloat($("#idle").text());
        banco = banco + idle;
        banco.toFixed(2);

        $("#banco").text(banco);
    }, 1);
}

/*
function comprarFerramenta(){
    $("#btn-comprarFerramenta").click(function(){

        var ferramentas = parseInt($(".ferramentas").text());
        var valorFerramenta = parseFloat($(".valor-ferramenta").text());    
        
        if (banco >= valorFerramenta){
            
            var updateFerramenta = parseInt($(".ferramentas").text());
            
            banco -= valorFerramenta;
            $("#banco").text(banco);

            ferramentas++
            $(".ferramentas").text(ferramentas);
    
            valorFerramenta = valorFerramenta * 1.1;
            $(".valor-ferramenta").text(valorFerramenta);
            
            
            $("#poder").text(poder + updateFerramenta);
            
        } else {
            console.log("valor insuficiente");
        }
    
        console.log(banco);
    
    });
}

function comprarTrabalhador(){
    $("#btn-comprarTrabalhador").click(function(){

        var trabalhador = parseInt($(".trabalhador").text());
        var valorTrabalhador = parseFloat($(".valor-trabalhador").text());    
        
        if (banco >= valorTrabalhador){
            
            var updateTrabalhador = parseInt($(".trabalhador").text());
            
            banco -= valorTrabalhador;
            $("#banco").text(banco);

            trabalhador++
            $(".trabalhador").text(trabalhador);
    
            valorTrabalhador = valorTrabalhador * 1.1;
            $(".valor-trabalhador").text(valorTrabalhador);
            
            
            $("#idle").text(idle + updateTrabalhador);
            
        } else {
            console.log("valor insuficiente");
        }
    
        console.log(banco);
    
    });
}
*/

function testeUpgrade(i){

    $(i.button).click(() => {
        var quantidade = parseInt($(i.campoDado).text());
        var valorQuantidade = parseInt($(i.valor).text());

        if (banco >= valorQuantidade){

            banco -= valorQuantidade;
            banco.toFixed(2);

            $("#banco").text(banco);

            quantidade++
            $(i.campoDado).text(quantidade);

            valorQuantidade = valorQuantidade * 1.1;
            $(i.valor).text(valorQuantidade.toFixed(2));

            $(i.poder).text(idle + quantidade + 1);

        }
    });
}

function comprarUpgrade(nomeUpgrade, idQuantidade, preco, campoUpdate){
    $(nomeUpgrade).click(() => {
        var quantidade = parseInt($(idQuantidade).text());
        var valorQuantidade = parseInt($(preco).text());

        if (banco >= valorQuantidade){

            banco -= valorQuantidade;
            banco.toFixed(2);

            $("#banco").text(banco);

            quantidade++
            $(idQuantidade).text(quantidade);

            valorQuantidade = valorQuantidade * 1.1;
            $(preco).text(valorQuantidade.toFixed(2));

            $(campoUpdate).text(idle + quantidade);

        }
    });
}
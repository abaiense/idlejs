var poder = parseInt($("#poder").text());
var banco = parseInt($("#banco").text());


var trabalhador = $(".trabalhador").text();
var valorTrabalhador = $(".valor-trabalhador").text();

$("#btn-click").click(function(){
    var poder = parseInt($("#poder").text());

    banco += poder;

    $("#banco").text(banco);
});

$("#btn-comprarFerramenta").click(function(){

    var ferramentas = parseInt($(".ferramentas").text());
    var valorFerramenta = parseInt($(".valor-ferramenta").text());    
    
    if (banco >= valorFerramenta){

        banco -= valorFerramenta;
        ferramentas++

        $("#banco").text(banco);
        $(".ferramentas").text(ferramentas);
        
        var updateFerramenta = parseInt($(".ferramentas").text());
        $("#poder").text(poder + updateFerramenta);
        console.log("Quantidade ferramentas: " + updateFerramenta);

        valorFerramenta = valorFerramenta + (valorFerramenta * 10/100 * updateFerramenta);

        $(".valor-ferramenta").text(valorFerramenta);

        console.log("Valor Ferramenta: " + valorFerramenta);


        
    } else {
        console.log("valor insuficiente");
    }

    console.log(banco);



});
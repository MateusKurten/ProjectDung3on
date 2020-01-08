let textoTesteSuaSorte ="<p> Teste sua Sorte!</p>" +
                        "<p> Ao clicar no botão abaixo, você rolara dois dados imaginários.</p>" +  
                        "<p> Se o resultado da rolagem for igual ou menor que a sua Sorte atual, você teve sorte." +
                        "Coisas ruins podem acontecer caso você tenha azar.</p>" +
                        "<p> Cada vez que você testar a sua Sorte, ela será reduzida em um ponto, portanto, " +
                        "quanto mais você confiar nela, mais arriscado isso se tornará! </p>"

//this.botao = [NOME DO BOTAO, FUNCAO ONCLICK DO BOTAO]

let pag1 = {
    conteudo: "<p> Ao entrar na caverna do feiticeiro, você se depara com uma bifurcação.</p>" +
                "<p> Você pode ir para a direita ou para a esquerda.</p>"+
                "<p> O que deseja fazer?</p>",
    qtdbotao: 2,
    botao1: ["Ir para a esquerda","irPara(pag9)"],
    botao2: ["Ir para a direita","irPara(pag2)"],
    }

let pag2 ={
    conteudo: "<p> Você está em um corredor longo.</p>" +
                "<p> No final desse corredor tem uma porta.</p>"+
                "<p> O que deseja fazer?</p>",
    qtdbotao: 2,
    botao1: ["Voltar","irPara(pag3)"],
    botao2: ["Investigar porta","irPara(pag5)"],
}

let pag3 ={
    conteudo: "<p> Você está de volta à bifurcação inicial.</p>" +
                "<p> Você pode seguir reto ou virar à esquerda e sair da caverna.</p>"+
                "<p> O que deseja fazer?</p>",
    qtdbotao: 2,
    botao1: ["Sair da caverna","irPara(pag4)"],
    botao2: ["Seguir reto","irPara(pag9)"],
}

let pag4 ={
    conteudo: "<p> Ao sair da caverna você ouve vaias vindas do povoado. Em meio ao barulho, você consegue ouvir os seguintes gritos:</p>"  +
                "<p> -- Covarde!! Covarde!! Nunca mais volte aqui!</p>" +
                "<p> Você será expulso do povoado e terá que conviver com a vergonha de ter desistido de sua missão.</p>"+
                "<p> A tirania do feiticeiro continuará a aterrorizar o vilarejo para sempre.</p>"+
                "<p> Caso deseje tentar novamente, atualize a página.</p>",
}

let pag5 ={
    conteudo: "<p> Você está de frente a uma porta de madeira.</p>" +
                "<p> Você tenta abri-la mas não consegue, também não acha nenhuma fechadura.</p>"+
                "<p> Você pode tentar arrombá-la ou pode voltar para a bifurcação inicial.</p>" +
                "<p> O que deseja fazer?</p>",
    qtdbotao: 2,
    botao1: ["Voltar ","irPara(pag3)"],
    botao2: ["Arrombar a porta","irPara(pag6)"],
}

let pag6 = {
    conteudo: "<p> Você toma impulso e corre para a porta, jogando todo o seu peso contra ela.</p>" + textoTesteSuaSorte,
    qtdbotao: 1,
    botao1: ["Teste sua Sorte","testeSuaSorte(pag7,pag8)"],
}

//Teste sua sorte páginas 6 (7 e 8)
/*function testeSuaSortePag6(){
    let rolagem = getRandomInt(6) + getRandomInt(6);

    if (rolagem <= Jogador.sorte){
        alert(`Você teve sorte! O resultado de sua rolagem foi: ${rolagem}`)
        irPara(pag7);
    } else {
        alert(`Você teve azar! O resultado de sua rolagem foi: ${rolagem}`);
        Jogador.energia -= 2;
        document.getElementById('tabenergia').innerHTML = Jogador.energia; 
        irPara(pag8);
    }
    Jogador.sorte--;
    document.getElementById("tabsorte").innerHTML = Jogador.sorte;
}*/

function testeSuaSorte(pagS,pagA){
    pagSorte = (typeof pagS !== "object") ? {} : pagS; //Passando o Objeto como Parâmetro
    pagAzar = (typeof pagA !== "object") ? {} : pagA;

    let rolagem = getRandomInt(6) + getRandomInt(6);

    if (pagSorte.evento == null){
        pagSorte.evento = function(){};
    }

    if (pagAzar.evento == null){
        pagAzar.evento = function(){};
    }

    if (rolagem <= Jogador.sorte){
        alert(`Você teve sorte! O resultado de sua rolagem foi: ${rolagem}`)
        irPara(pagSorte);
        pagSorte.evento();
    } else {
        alert(`Você teve azar! O resultado de sua rolagem foi: ${rolagem}`);
        irPara(pagAzar);
        pagAzar.evento();
    }
    Jogador.sorte--;
    document.getElementById("tabsorte").innerHTML = Jogador.sorte;
}

let pag7 = {
    conteudo: "<p> Assim que você derruba a porta, você vê um grande fosso à sua frente.</p>" +
              "<p> Por sorte, você consegue se pendurar na beira do fosso, impedindo o que seria uma" +
              " queda dolorosa.</p>" +
              "<p> Ao subir de volta à terra firme e olhar para o fundo do fosso, você não vê nada de interessante.</p>",
    qtdbotao: 1,
    botao1: ["Voltar à bifurcação","irPara(pag3)"],
}

let pag8 = {
    conteudo: "<p> Assim que você derruba a porta, você vê um grande fosso à sua frente.</p>" +
              "<p> Você não consegue se segurar e, por isso, cai no fundo do fosso.</p>" +
              "<p> Você perdeu dois pontos de energia.</p>" +
              "<p> Depois de se recuperar do tombo, você encontra uma escada que te leva de volta ao topo.</p>",
    qtdbotao: 1,
    botao1: ["Voltar à bifurcação","irPara(pag3)"],
    evento() { Jogador.energia -= 2; document.getElementById('tabenergia').innerHTML = Jogador.energia;},
}

let pag9 = {
	conteudo: "<p> Ao caminhar pelo corredor, você chega em uma porta de madeira.</p>" +
              "<p> Você pode tentar abrir a porta ou virar a direita e seguir o corredor.</p>" +
              "<p> O que deseja fazer?</p>",
	qtdbotao: 2,
	botao1: ["Abrir a porta", "irPara(pag10)"],
	botao2: ["Virar a direita", "irPara(pag?)"],
}

let pag10 = {
	conteudo: "<p> Ao abrir a porta, você se depara com uma sala relativamente pequena.<p>" +
			  "<p> Nela, você encontra um monstro humanoide verde descansando em uma cadeira.</p>" +
              "<p> Ao lado dele, você vê um baú semi-aberto.</p>" +
			  "<p> Você pode tentar caminhar furtivamente até o baú, acordar o Orc ou sair da sala e seguir o caminho (a esquerda)</p>",
	qtdbotao: 3,
	botao1: ["Ser furtivo", "testeSuaSorte(pag11, pag12)"],
	botao2: ["Acordar o Orc", "irPara(pag?)"],
	botao3: ["Sair da sala", "irPara(pag?)"]
}
			
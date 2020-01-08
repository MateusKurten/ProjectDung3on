  //Classe Jogador
class Jogador{
	constructor(){
	this.habilidade = getRandomInt(6) + 6;
	this.energia = getRandomInt(6) + getRandomInt(6) + 12;
    this.sorte = getRandomInt(6) + 6;
    this.inventario = [];
    }

    addInventario(item){
        this.invetario.push(item); 
    }
    
    
    removerEnergia(x){
        if (this.energia < x ){
            this.energia = 0;
        } else {
            this.energia -= x;
        }
    }

    morrer(){
        if (this.energia == 0){
            irPara(morte);
        }
    }
}

//Classe Monstro
class Monstro{
	constructor(nome,habilidade,energia){
		this.nome = nome;
		this.habilidade = habilidade;
		this.energia = energia;
	}
}

// Rolar dados (Max = numero de lados)
function getRandomInt(max) {
    max = Math.floor(max);
    resultado = Math.floor(Math.random() * max) + 1;
    return resultado;
}

//Configurar botões
function configurarBotoes(qtd,...botoes){
    let AC = "";
    let lista = botoes //[botao1,botao2,botao3,botao4,botao5]
    for(let i = 0; i < qtd; i++){
            AC += `<input type='button' value="${lista[i][0]}" onclick="${lista[i][1]}">`;
    }
    document.getElementById('botoes').innerHTML = AC;
}

//Ir para página
function irPara(pag){
    /*pag = (typeof pag !== "object") ? {} : pag; //Passando o Objeto como Parâmetro
    pag.conteudo = pag.conteudo || 'Conteúdo inválido';
    pag.qtdbotao = pag.qtdbotao || 0;
    pag.botao1 = pag.botao1 || ["",""];
    pag.botao2 = pag.botao2 || ["",""];
    pag.botao3 = pag.botao3 || ["",""];
    pag.botao4 = pag.botao4 || ["",""];
    pag.botao5 = pag.botao5 || ["",""];*/
    document.getElementById('main').innerHTML = pag.conteudo;
    configurarBotoes(pag.qtdbotao,pag.botao1,pag.botao2,pag.botao3,pag.botao4,pag.botao5);
    }



//para Botão rolar Dados
function iniciarJogador(){
	Jogador = new Jogador();
	alert("Dados rodados!");
	esconder();
	document.getElementById("tabhabilidade").innerHTML = Jogador.habilidade;
	document.getElementById("tabsorte").innerHTML = Jogador.sorte;
	document.getElementById("tabenergia").innerHTML = Jogador.energia;
}

//Para esconder botão Rolar Dados
var hidden = false;
function esconder(){
	 hidden = !hidden;
        if(hidden) {
            document.getElementById('rolardados').style.visibility = 'hidden';
        } else {
            document.getElementById('rolardados').style.visibility = 'visible';
        }
}
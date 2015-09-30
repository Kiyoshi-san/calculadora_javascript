var botao = [], acc1, ms, porc, porc1, porc2;

function equacao(){
	$("#equacao").text(botao.join(""));
	porc1 = eval($("#text").val());
}

function juntar(){

	var dig = botao.slice(botao.length-1);
	console.log(botao[botao.length-2]);
	if ( (!isNaN(dig) || (dig == ".")) && (botao.length > 1 && !isNaN(botao[botao.length-2]) )) {;
		$("#text").val(botao.join(""));

	}else if ( !isNaN(dig) ) {
		$("#text").val(dig);
	}
}

function backspc(){
	botao.pop();
}

function resultado(){
	acc1 = eval(botao.join(""));
	$("#text").val(acc1);
	$("#equacao").text("");
	//botao = [acc1];
	porc2 = eval($("text").val());

}

function verif(element){

	if(eval($("#text").val()) == acc1){
		$("#text").val( $(element).text() );
		botao = [$( element ).text()];
		return true;
	}else{
		return false;		
	}
}

/*function num(valor){
	$("#text").val(valor);
}*/


$("#0").on("click",function(){
	if (verif("#0") == false ){
		botao.push("0");		
	}
	juntar();
})



//----------------Botão---------------------------

$("#1").on("click",function(){
	if (verif("#1") == false ){
		botao.push("1");		
	}
	juntar();
})

$("#2").on("click",function(){
	if (verif("#2") == false ){
		botao.push("2");		
	}
	juntar();
})

$("#3").on("click",function(){
	if (verif("#3") == false ){
		botao.push("3");		
	}
	juntar();juntar();
})

$("#4").on("click",function(){
	if (verif("#4") == false ){
		botao.push("4");		
	}
	juntar();
})

$("#5").on("click",function(){
	if (verif("#5") == false ){
		botao.push("5");		
	}
	juntar();
})

$("#6").on("click",function(){
	if (verif("#6") == false ){
		botao.push("6");		
	}
	juntar();
})

$("#7").on("click",function(){
	if (verif("#7") == false ){
		botao.push("7");		
	}
	juntar();
})

$("#8").on("click",function(){
	if (verif("#8") == false ){
		botao.push("8");		
	}
	juntar();
})

$("#9").on("click",function(){
	if (verif("#9") == false ){
		botao.push("9");		
	}
	juntar();
})

$("#virg").on("click",function(){
	botao.push(".");
	$("#text").val(botao.join(""));//recebe em forma de string sem virgula o array: botao
})

//------------------------OPERADORES------------------------------------------------

$("#raiz").on("click",function(){
	acc1 = eval($("#text").val());
	//acc1 = Math.sqrt(acc1);
	acc1 = Math.pow(acc1,1/2);
	$("#text").val(acc1);
})

/*$("#porc").on("click",function{
	//acc1 = eval($("#text").val());
	porc = ((porc1 * porc2)/100));
	$("#text").val(porc);
})*/

$("#mais").on("click",function(){
	botao.push("+");
	equacao();
})

$("#menos").on("click",function(){
	botao.push("-");
	equacao();
})

$("#vezes").on("click",function(){
	botao.push("*");
	equacao();
})

$("#div").on("click",function(){
	botao.push("/");
	equacao();
})

$("#igual").on("click",function(){
	resultado();
})

$("#back").on("click",function(){
	backspc();
	juntar();
})

$("#ce").on("click",function(){
	$("#text").val(0);
})

$("#c").on("click",function(){
	$("#text").val(0);
	acc1 = 0;	
	$("#equacao").text("");
	botao = [];
})

$("#maismenos").on("click",function(){
	acc1 = acc1 * (-1);
	$("#text").val(acc1);
})



//-----------------MEMORIA--------------------

$("#ms").on("click",function(){ //memory store
	ms = eval($("#text").val());
	if($("#m").text("")){
		$("#m").text("M");	
	}else{
		if($("#m").text("M")){
			$("#m").text("");			
		}
	}
})

$("#mr").on("click",function(){ //memory recall
	botao = [ms];
	$("#text").val(ms);
})

$("#mc").on("click",function(){ //memory clear
	ms = "";
	$("#m").text("");
	ms = "0";
})

$("#mmais").on("click",function(){
	ms += eval($("#text").val());
})

$("#mmenos").on("click",function(){
	ms -= eval($("#text").val());
})

//-------------------TRIGGER------------------------------------


$(document).ready(function(){
	$(window).on("keypress", function (event) {/*window-reconhece o botão a partir da tela, ao invés de setar 
		uma id ou classe: $("#0")*/
		console.log(event.keyCode); //- identifica o que foi apertado
		switch(event.keyCode){
			case 48: /*48 valor em ASCII da tecla "0", descobre-se a partir do 
			comando console.log(event.keyCode);*/
			$("#0").trigger("click");//aciona o evento "click"
			break;

			case 49: 
			$("#1").trigger("click");
			break;

			case 50: 
			$("#2").trigger("click");
			break;

			case 51: 
			$("#3").trigger("click");
			break;

			case 52: 
			$("#4").trigger("click");
			break;
			
			case 53: 
			$("#5").trigger("click");
			break;

			case 54: 
			$("#6").trigger("click");
			break;

			case 55: 
			$("#7").trigger("click");
			break;

			case 56: 
			$("#8").trigger("click");
			break;

			case 57: 
			$("#9").trigger("click");
			break;

			case 44: 
			$("#virg").trigger("click");
			break;
		}
	})
})
 

//--------Operadores--------------

$(document).ready(function(){
	$(window).on("keypress", function (event) {
		switch(event.keyCode){
			case 13: 
			$("#igual").trigger("click");
			break;

			case 42: 
			$("#vezes").trigger("click");
			break;

			case 43: 
			$("#mais").trigger("click");
			break;

			case 45: 
			$("#menos").trigger("click");
			break;

			case 47: 
			$("#div").trigger("click");
			break;

		}
	})
})

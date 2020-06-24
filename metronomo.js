//abrir cerrar selector de compases
function cerrarMenuCompas(){
	document.getElementById('listaCompases').style.width = '0%';
	document.getElementById('listaCompases').style.visibility = 'hidden';
}
function abrirMenuCompas(){
	document.getElementById('listaCompases').style.width = '50%';
	document.getElementById('listaCompases').style.visibility = 'visible';
}
//abrir cerrar configuracion
function cerrarAjustes(){
	document.getElementById('configuracion').style.width = '0%';
	document.getElementById('configuracion').style.visibility = 'hidden';
}
function abrirAjustes(){
	document.getElementById('configuracion').style.width = '50%';
	document.getElementById('configuracion').style.visibility = 'visible';
}
// mostrar play stop
function mostrarplay(){
	document.getElementById('play').style.display = 'block';
	document.getElementById('contentplay').style.display = 'block';
	document.getElementById('contenstop').style.display = 'none';
	document.getElementById('stop').style.display = 'none';	
}
function ocultarplay(){
	document.getElementById('play').style.display = 'none';
	document.getElementById('contentplay').style.display = 'none';
	document.getElementById('contenstop').style.display = 'block';
	document.getElementById('stop').style.display = 'block';
}
//*************************************************

var tempoRango = document.getElementById('rangoTempo').value;
var tempoIn = document.getElementById('valorTempo').value;
var back5 = document.getElementById('back5').value;
var go5 = document.getElementById('go5').value;
var tempoBack;

//datos para tempo personalizado
var usuarioTempo;
function tempoUsuario(){
    usuarioTempo = document.getElementById('usuarioTempo').value;
	document.getElementById('back5').innerHTML = '-' + usuarioTempo;
    document.getElementById('go5').innerHTML =  '+' + usuarioTempo;
	back5 = '-' + usuarioTempo;
	go5 = usuarioTempo;
}
//Fin datos para tempo personalizado
function mostrarRango(){
	tempoIn = document.getElementById('valorTempo').value;
	document.getElementById('rangoTempo').value = tempoIn;
}

function mostrarTempoRango(){
    tempoRango = document.getElementById('rangoTempo').value;
    document.getElementById('valorTempo').value = tempoRango ;
	
}
function back(){
	    if(tempoRango < 21){
		tempoRango = 220;
	    }
		tempoBack = parseInt(tempoRango) + parseInt(back5);
		tempoRango = tempoBack;
		document.getElementById('valorTempo').value = tempoBack ;
		document.getElementById('rangoTempo').value = tempoBack;
}
function go(){
	    if(tempoRango > 220){
		tempoRango = 20;
	    }
		tempoGo = parseInt(tempoRango) + parseInt(go5);
		document.getElementById('valorTempo').value = tempoGo;
		document.getElementById('rangoTempo').value = tempoGo;
		tempoRango = tempoGo;
		console.log(tempoGo);
}
 var beatuseraumentar = document.getElementById('aumentar').value;
 var beatuserDisminuir = document.getElementById('disminuir').value;
 var aumbeat;
 var disbeat;
 usuarioTempo = 5; // se inicia nuevamente en 5 porque antes de esto esta NaN
function disminuirbeat(){
	    if(usuarioTempo < 2){
			usuarioTempo = 11;
		}
	    disbeat = parseInt(usuarioTempo) - parseInt(beatuserDisminuir);
	    usuarioTempo = disbeat;
		document.getElementById('usuarioTempo').value = disbeat;
		console.log(disbeat);
		
}
function aumentarbeat(){
	 if(usuarioTempo > 9){
			usuarioTempo = 0;
		}
	   aumbeat = parseInt(usuarioTempo) + parseInt(beatuseraumentar);
	   usuarioTempo = aumbeat;
	   document.getElementById('usuarioTempo').value = aumbeat;
	  

}

//************Funciones para determinar el compas y los circulos interactivos
	var compas = 4; // es global para que cambie según la funcion 
function compasDosCua(){
	compas = 2;
	document.getElementById('innerCompas').innerHTML = '2 / 4';
	//circulos interactivos
	document.getElementById('circle1').style.display = 'Block';
	document.getElementById('circle2').style.display = 'Block';
	document.getElementById('circle3').style.display = 'none';
	document.getElementById('circle4').style.display = 'none';
	document.getElementById('circle5').style.display = 'none';
	document.getElementById('circle6').style.display = 'none';
	document.getElementById('circle7').style.display = 'none';
	
	//	cerrar el menu
	cerrarMenuCompas();
}
function compasTresCua(){
	compas = 3;
	document.getElementById('innerCompas').innerHTML = '3 / 4';
	//circulos interactivos
	document.getElementById('circle1').style.display = 'Block';
	document.getElementById('circle2').style.display = 'Block';
	document.getElementById('circle3').style.display = 'Block';
	document.getElementById('circle4').style.display = 'none';
	document.getElementById('circle5').style.display = 'none';
	document.getElementById('circle6').style.display = 'none';
	document.getElementById('circle7').style.display = 'none';
	//	cerrar el menu
	cerrarMenuCompas();
}
function compasCuatroCua(){
	compas = 4;
	document.getElementById('innerCompas').innerHTML = '4 / 4';
	//circulos interactivos
	document.getElementById('circle1').style.display = 'Block';
	document.getElementById('circle2').style.display = 'Block';
	document.getElementById('circle3').style.display = 'Block';
	document.getElementById('circle4').style.display = 'Block';
	document.getElementById('circle5').style.display = 'none';
	document.getElementById('circle6').style.display = 'none';
	document.getElementById('circle7').style.display = 'none';
	//	cerrar el menu
	cerrarMenuCompas();
}
function compasCincoCua(){
	compas = 5;
	document.getElementById('innerCompas').innerHTML = '5 / 4';
	//circulos interactivos
	document.getElementById('circle1').style.display = 'Block';
	document.getElementById('circle2').style.display = 'Block';
	document.getElementById('circle3').style.display = 'Block';
	document.getElementById('circle4').style.display = 'Block';
	document.getElementById('circle5').style.display = 'Block';
	document.getElementById('circle6').style.display = 'none';
	document.getElementById('circle7').style.display = 'none';
	//	cerrar el menu
	cerrarMenuCompas();
}
function compasSeisCua(){
	compas = 6;
	document.getElementById('innerCompas').innerHTML = '6 / 4';
	//circulos interactivos
	document.getElementById('circle1').style.display = 'Block';
	document.getElementById('circle2').style.display = 'Block';
	document.getElementById('circle3').style.display = 'Block';
	document.getElementById('circle4').style.display = 'Block';
	document.getElementById('circle5').style.display = 'Block';
	document.getElementById('circle6').style.display = 'Block';
	document.getElementById('circle7').style.display = 'none';
	//	cerrar el menu
	cerrarMenuCompas();
}
function compasSieteCua(){
	compas = 7;
	document.getElementById('innerCompas').innerHTML = '7 / 4';
	//circulos interactivos
	document.getElementById('circle1').style.display = 'Block';
	document.getElementById('circle2').style.display = 'Block';
	document.getElementById('circle3').style.display = 'Block';
	document.getElementById('circle4').style.display = 'Block';
	document.getElementById('circle5').style.display = 'Block';
	document.getElementById('circle6').style.display = 'Block';
	document.getElementById('circle7').style.display = 'Block';
	//	cerrar el menu
	cerrarMenuCompas();
}




//************Funciones para determinar el compas y los circulos interactivos
//set time globales
var MetronomoNegra;
var MetronomoCorchea;
var MetronomoSemiCorchea;
var MetronomoTresilloCorchea;
var MetronomoTresilloNegra;
var MetronomoGalopa;
var MetronomoContraGalopa;
var MetronomoSincopa;
var MetronomoSaltillo;
var negrabo = false;
var corcheabo = false;
var tresillobo = false;
var semicorcheabo = false;
var TresilloNegrabo = false;
var Galopabo = false;
var contraGalopabo = false;
var Sincopabo = false;
var Saltillobo = false;

//audios y e inners
    var subdivision = document.getElementById('subdivision');
	
    
	
	var write3 = document.getElementById('inner3');
	
	var audio1 = document.getElementById('click1');
	var circles; //circulos de tempo
	var i;
	//audios largos
	var beatNegra = new Audio("Audio/negra.wav");
	var beatNegraAcento = new Audio("Audio/negraA.wav");
	//audiosCortos	
	const beat4 = new Audio("Audio/semicorchea2.wav");
	const beat4a = new Audio("Audio/semicorchea2.wav");
	const beat4b = new Audio("Audio/semicorchea2.wav");
	
	
//function para negras simles
//Conversion del tiempo de entrada a bpm
	
	tempoIn = document.getElementById('valorTempo').value;
	
	//Intervalos de tempo
	
	var tempoNegra = 60000/tempoIn;
	var tempoCorchea= tempoNegra / 2;
	var tempoSemiCorchea= tempoNegra / 4;
	var tempoTresilloCorchea= tempoNegra / 3;
	//***************
	//***************TERMINAR
	var tempoTresilloNegra= (tempoNegra * 2) / 3;
	//*******************TERMINAR
	//****************
	
	//Tiempo Delay
	var tempoInicio = parseInt(tempoNegra) + parseInt(tempoCorchea);
	
	//Números de las subdivisiones
	var negra = 4;
	var corchea = -1;
	var semicorchea = -3;
	var tresillocorchea = -2;
	var tresilloNegra = 3;
	var Galopa = -3;
	var contraGalopa = -3;
	var Sincopa = -3;
	var Saltillo = -3;
	
function playNegras(){
	
	circles = document.getElementsByClassName('circle');
	
	StopMetronomo();
	tempoIn = document.getElementById('valorTempo').value; 
	//Intervalos de tempo
	tempoNegra = 60000/tempoIn;
	
	//Negras
	MetronomoNegra = setInterval(FuncionNegra, tempoNegra);
	
	function FuncionNegra(){
	
		if(negra >= compas){
			negra = 1;
			for( i = 0; i < circles.length; i++){
		       circles[i].style.background = '#000';
			   circles[i].style.transform = 'scale(1)';
	        }
			circles[0].style.background = '#b50000';
			circles[0].style.transform = 'scale(1.5)';
			beatNegraAcento.play();
			
			//document.getElementById('circle1').style.background = '#ff0000';
		}
		else if(negra == 1){
			negra++;
			for( var i = 0; i < circles.length; i++){
		       circles[i].style.background = '#000';
			   circles[i].style.transform = 'scale(1)';
	        }
			circles[1].style.background = '#900000';
			circles[1].style.transform = 'scale(1.2)';
			beatNegra.play();
		}
		else if(negra == 2){
			negra++;
			for( var i = 0; i < circles.length; i++){
		       circles[i].style.background = '#000';
			   circles[i].style.transform = 'scale(1)';
	        }
			circles[2].style.background = '#900000';
			circles[2].style.transform = 'scale(1.2)';
			beatNegra.play();
		}
		else if(negra == 4){
			negra++;
			for( var i = 0; i < circles.length; i++){
		       circles[i].style.background = '#000';
			   circles[i].style.transform = 'scale(1)';
	        }
			circles[4].style.background = '#900000';
			circles[4].style.transform = 'scale(1.2)';
			beatNegra.play();
		}
		else if(negra == 5){
			negra++;
			for( var i = 0; i < circles.length; i++){
		       circles[i].style.background = '#000';
			   circles[i].style.transform = 'scale(1)';
	        }
			circles[5].style.background = '#900000';
			circles[5].style.transform = 'scale(1.2)';
			beatNegra.play();
		}
		else if(negra == 6){
			negra++;
			for( var i = 0; i < circles.length; i++){
		       circles[i].style.background = '#000';
			   circles[i].style.transform = 'scale(1)';
	        }
			circles[6].style.background = '#900000';
			circles[6].style.transform = 'scale(1.2)';
			beatNegra.play();
		}
		else{
			negra++;
			for( var i = 0; i < circles.length; i++){
		       circles[i].style.background = '#000';
			   circles[i].style.transform = 'scale(1)';
	        }
			circles[3].style.background = '#900000';
			circles[3].style.transform = 'scale(1.2)';
			beatNegra.play();
			
			//document.getElementById('circle1').style.background = '#b5b5b5';
		}
	}
	 negrabo = true;
     corcheabo = false;
     tresillobo = false;
     semicorcheabo = false;
	 TresilloNegrabo = false;
     Galopabo = false;
     contraGalopabo = false;
	 Sincopabo = false;
	 Saltillobo = false;
}
function playCorcheas(){
	
	subdivision.innerHTML = 'Corcheas';
	StopMetronomo();
	playNegras();
	var tempoIn = document.getElementById('valorTempo').value;
	
	//Intervalos de tempo
	var tempoNegra = 60000/tempoIn;
	var tempoCorchea= tempoNegra / 2;
	//Negras
	
	
	
	//Corcheas
	MetronomoCorchea = setInterval(FuncionCorchea, tempoCorchea);
	function FuncionCorchea(){
		if(corchea >= 2){
			corchea = 1;
		}
		else{
			corchea++;
			beat4a.play();
		}
	}
	 negrabo = false;
     corcheabo = true;
     tresillobo = false;
     semicorcheabo = false;	
	 TresilloNegrabo = false;
     Galopabo = false;
     contraGalopabo = false;
	 Sincopabo = false;
	 Saltillobo = false;
}
function playTresillos(){
		subdivision.innerHTML = 'Tresillos de corcheas';
	StopMetronomo();
	playNegras();
	var tempoIn = document.getElementById('valorTempo').value;
	
	//Intervalos de tempo
	var tempoNegra = 60000/tempoIn;
	var tempoTresilloCorchea= tempoNegra / 3;
	
	//tresillos de corchea
	MetronomoTresilloCorchea = setInterval(FuncionTresillosCorchea, tempoTresilloCorchea);
	function FuncionTresillosCorchea(){
		if(tresillocorchea >= 3){
			tresillocorchea = 1;
			beat4.play();
		}
		else if(tresillocorchea == 1){
			tresillocorchea++;
			beat4a.play();
		}
		else{
			tresillocorchea++;
			beat4b.play();
		}
	}
	negrabo = false;
    corcheabo = false;
    tresillobo = true;
    semicorcheabo = false;
	 TresilloNegrabo = false;
     Galopabo = false;
     contraGalopabo = false;
	 Sincopabo = false;
	 Saltillobo = false;
}
function playsemiCorcheas(){
		subdivision.innerHTML = 'Semicorcheas';
	StopMetronomo();
	playNegras();
	var tempoIn = document.getElementById('valorTempo').value;
	
	//Intervalos de tempo
	var tempoNegra = 60000/tempoIn;
	var tempoSemiCorchea= tempoNegra / 4;
	
	
	//Semicorcheas
	MetronomoSemiCorchea = setInterval(FuncionSemiCorchea, tempoSemiCorchea);
	function FuncionSemiCorchea(){
		if(semicorchea == 4){
			semicorchea = 1;
			beat4a.play();
		}
		else if(semicorchea == 1){
			semicorchea++;
			beat4.play();
			
		}
		else if(semicorchea == 2){
			semicorchea++;
			beat4a.play();
		}
		else {
			semicorchea++;
			beat4b.play();
		}
	}
	negrabo = false;
    corcheabo = false;
    tresillobo = false;
    semicorcheabo = true;
	 TresilloNegrabo = false;
     Galopabo = false;
     contraGalopabo = false;
	 Sincopabo = false;
	 Saltillobo = false;
}
function playtresilloNegra(){
		subdivision.innerHTML = 'Tresillos de Negras';
	StopMetronomo();
	playNegras();
	var tempoIn = document.getElementById('valorTempo').value;
	
	//Intervalos de tempo
	var tempoNegra = 60000/tempoIn;
	var tempoTresilloNegra= (tempoNegra * 2) / 3;
	
	//tresillos de corchea
	MetronomoTresilloNegra = setInterval(FuncionTresilloNegra, tempoTresilloNegra);
	function FuncionTresilloNegra(){
		if(tresilloNegra >= 3){
			tresilloNegra = 1;
			beat4.play();
		}
		else if(tresilloNegra == 1){
			tresilloNegra++;
			beat4a.play();
		}
		else{
			tresilloNegra++;
			beat4b.play();
		}
	}
	negrabo = false;
    corcheabo = false;
    tresillobo = false;
    semicorcheabo = false;
	 TresilloNegrabo = true;
     Galopabo = false;
     contraGalopabo = false;
	 Sincopabo = false;
	 Saltillobo = false;
}
function playGalopa(){ //el tiempo es el mismo que el de las semicorcheas, solo cambian los audios porque el segundo no se ejecuta
	
		subdivision.innerHTML = 'Galopas';
	StopMetronomo();
	playNegras();
	var tempoIn = document.getElementById('valorTempo').value;
	
	//Intervalos de tempo
	var tempoNegra = 60000/tempoIn;
	var tempoSemiCorchea= tempoNegra / 4;
	
	
	//Semicorcheas
	MetronomoGalopa = setInterval(FuncionGalopa, tempoSemiCorchea);
	function FuncionGalopa(){
		if(Galopa == 4){
			Galopa = 1;
			beat4a.play();
		}
		else if(Galopa == 1){
			Galopa++;
			//No lleva audio para crear el efecto galopa
		}
		else if(Galopa == 2){
			Galopa++;
			beat4a.play();
		}
		else {
			Galopa++;
			beat4b.play();
		}
	}
	negrabo = false;
    corcheabo = false;
    tresillobo = false;
    semicorcheabo = false;
	 TresilloNegrabo = false;
     Galopabo = true;
     contraGalopabo = false;
	 Sincopabo = false;
	 Saltillobo = false;
}
function playcontraGalopa(){
		subdivision.innerHTML = 'Contra Galopas';
	StopMetronomo();
	playNegras();
	var tempoIn = document.getElementById('valorTempo').value;
	
	//Intervalos de tempo
	var tempoNegra = 60000/tempoIn;
	var tempoSemiCorchea= tempoNegra / 4;
	
	
	//Semicorcheas
	MetronomoContraGalopa = setInterval(FuncionContraGalopa, tempoSemiCorchea);
	function FuncionContraGalopa(){
		if(contraGalopa == 4){
			contraGalopa = 1;
			beat4a.play();
		}
		else if(contraGalopa == 1){
			contraGalopa++;
			beat4b.play();
		}
		else if(contraGalopa == 2){
			contraGalopa++;
			beat4.play();
			//No lleva audio para crear el efecto galopa
		}
		else {
			contraGalopa++;
			//No lleva audio para crear el efecto galopa
		}
	}
	negrabo = false;
    corcheabo = false;
    tresillobo = false;
    semicorcheabo = false;
	 TresilloNegrabo = false;
     Galopabo = false;
     contraGalopabo = true;
	 Sincopabo = false;
	 Saltillobo = false;
}
function playSincopa(){
		subdivision.innerHTML = 'Sincopas';
	StopMetronomo();
	playNegras();
	var tempoIn = document.getElementById('valorTempo').value;
	
	//Intervalos de tempo
	var tempoNegra = 60000/tempoIn;
	var tempoSemiCorchea= tempoNegra / 4;
	
	
	//Semicorcheas
	MetronomoSincopa = setInterval(FuncionSincopa, tempoSemiCorchea);
	function FuncionSincopa(){
		if(Sincopa == 4){
			Sincopa = 1;
			beat4a.play();
		}
		else if(Sincopa == 1){
			Sincopa++;
			beat4b.play();
		}
		else if(Sincopa == 2){
			Sincopa++;
			//No lleva audio para crear el efecto galopa
		}
		else {
			Sincopa++;
			beat4.play();
		}
	}
	negrabo = false;
    corcheabo = false;
    tresillobo = false;
    semicorcheabo = false;
	 TresilloNegrabo = false;
     Galopabo = false;
     contraGalopabo = false;
	 Sincopabo = true;
	 Saltillobo = false;
}
function playSaltillo(){
		subdivision.innerHTML = 'Saltillos';
	StopMetronomo();
	playNegras();
	var tempoIn = document.getElementById('valorTempo').value;
	
	//Intervalos de tempo
	var tempoNegra = 60000/tempoIn;
	var tempoSemiCorchea= tempoNegra / 4;
	
	
	//Semicorcheas
	MetronomoSaltillo = setInterval(FuncionSaltillo, tempoSemiCorchea);
	function FuncionSaltillo(){
		if(Saltillo == 4){
			Saltillo = 1;
			beat4a.play();
		}
		else if(Saltillo == 1){
			Saltillo++;
			//No lleva audio para crear el efecto galopa
		}
		else if(Saltillo == 2){
			Saltillo++;
			//No lleva audio para crear el efecto galopa
		}
		else {
			Saltillo++;
			beat4.play();
		}
	}
	negrabo = false;
    corcheabo = false;
    tresillobo = false;
    semicorcheabo = false;
	 TresilloNegrabo = false;
     Galopabo = false;
     contraGalopabo = false;
	 Sincopabo = false;
	 Saltillobo = true;
} 
//detener todos los setInterval
function StopMetronomo(){
	clearInterval(MetronomoNegra);
	clearInterval(MetronomoCorchea);
	clearInterval(MetronomoSemiCorchea);
	clearInterval(MetronomoTresilloCorchea);
	clearInterval(MetronomoTresilloNegra);
	clearInterval(MetronomoGalopa);
	clearInterval(MetronomoContraGalopa);
	clearInterval(MetronomoSincopa);
	clearInterval(MetronomoSaltillo);
	//para iniciarlas cada vez que se detenga la ejecución
	negra = 4;
	corchea = -1;
	semicorchea = -3;
	tresillocorchea = -2;
	tresilloNegra = 3;
	Galopa = -3;
	contraGalopa = -3;
	Sincopa = -3;
	Saltillo = -3;
	//para iniciar los circulos de tempo
	circles = document.getElementsByClassName('circle');
	for( i = 0; i < circles.length; i++){
		       circles[i].style.background = '#202020';
			   circles[i].style.transform = 'scale(1)';
	        }
			circles[0].style.background = '#ff0000';
			circles[0].style.transform = 'scale(1.2)';
	
}
function playAll(){
	if(tempoIn > 220){
		var newtempoRango = 20;
		tempoIn = newtempoRango;
        document.getElementById('valorTempo').value = newtempoRango;
		document.getElementById('rangoTempo').value = newtempoRango;// inciamos el slider para que no se sobrepasen los 220 pbm
		
			console.log('es mayor');
			console.log(tempoIn);
	    }
	
	if(corcheabo == true){
		playCorcheas();
	}
	else if(tresillobo == true){
		playTresillos();

	}
	else if(TresilloNegrabo == true){
		playtresilloNegra();

	}
	else if(semicorcheabo == true){
		playsemiCorcheas();

	}
	else if(Galopabo == true){
		playGalopa();

	}
	else if(contraGalopabo == true){
		playcontraGalopa();

	}
	else if(Sincopabo == true){
		playSincopa();

	}
	else if(Saltillobo == true){
		playSaltillo();

	}
	else if (negrabo == true) { 
		playNegras();	
	    subdivision.innerHTML = 'Negra';

	}
	else {
	 document.getElementById('playporDefecto').click(); 	
	}
	//dinamicas
	if(tempoIn < 40){
	    document.getElementById('dinamica').innerHTML = 'Larghissimo ';
	}
	else if(tempoIn < 60){
	    document.getElementById('dinamica').innerHTML = 'Largo';	
	}
	else if(tempoIn < 80){
		document.getElementById('dinamica').innerHTML = 'Adagio  ';
	}
	else if(tempoIn <100){
		document.getElementById('dinamica').innerHTML = 'Andante  ';
	}
	else if(tempoIn <112){
		document.getElementById('dinamica').innerHTML = 'Moderato  ';
	}
	else if(tempoIn < 128  ){
		document.getElementById('dinamica').innerHTML = 'Allegretto  ';
	}
	else if(tempoIn <150  ){
		document.getElementById('dinamica').innerHTML = 'Allegro  ';
	}
	else if(tempoIn < 168 ){
		document.getElementById('dinamica').innerHTML = 'Vivace  ';
	}
	else if(tempoIn >169 ){
		document.getElementById('dinamica').innerHTML = 'Presto  ';
	}
	else if(tempoIn >200){
		document.getElementById('dinamica').innerHTML = 'Prestissimo ';
	}
	else{
		document.getElementById('dinamica').innerHTML = 'Prestissimo  ';
	}
	
	
	    
	
}

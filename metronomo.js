//abrir cerrar selector de compases
var dark = false;
var red = false
function cambiarTemaRed(){
	document.getElementById('Dark').style.display = 'none';
	document.getElementById('Red').style.display = 'block';
	
	document.documentElement.style.setProperty('--main-backgroundbotones', '#300000');
	document.documentElement.style.setProperty('--main-background-color', 'linear-gradient(to bottom, #250000, #350000)');
	document.documentElement.style.setProperty('--main-backgroundprincipal', '#300000');
	document.documentElement.style.setProperty('--main-borderbotones', '1px solid #300000');
	document.documentElement.style.setProperty('--main-color', '909090');
	document.documentElement.style.setProperty('--main-backgroundactive', '200000');
	document.documentElement.style.setProperty('--main-coloractive', '#ff0000');
	document.documentElement.style.setProperty('--main-backgroundslider', '#400000');
	document.documentElement.style.setProperty('--main-backgroundfader', '#800000');
	document.documentElement.style.setProperty('--main-backgroundAjustesCompas', 'rgba(30, 0, 0, 0.9)');
	document.documentElement.style.setProperty('--main-backgroundhs', '#150000');
	dark = false;
    red = true;
}
function cambiarTemaDark(){
	document.getElementById('Dark').style.display = 'block';
	document.getElementById('Red').style.display = 'none';
	
	document.documentElement.style.setProperty('--main-backgroundbotones', '#202020');
	document.documentElement.style.setProperty('--main-background-color', 'linear-gradient(to bottom, #151515, #252525)');
	document.documentElement.style.setProperty('--main-backgroundprincipal', '#202020');
	document.documentElement.style.setProperty('--main-borderbotones', '1px solid #202020');
	document.documentElement.style.setProperty('--main-color', '909090');
	document.documentElement.style.setProperty('--main-backgroundactive', '151515');
	document.documentElement.style.setProperty('--main-coloractive', '#ff0000');
	document.documentElement.style.setProperty('--main-backgroundslider', '#303030');
	document.documentElement.style.setProperty('--main-backgroundfader', '#606060');
	document.documentElement.style.setProperty('--main-backgroundAjustesCompas', 'rgba(10, 10, 10, 0.9)');
	document.documentElement.style.setProperty('--main-backgroundhs', '#151515');
	dark = true;
    red = false;
	
}
function cerrarMenuCompas(){
	document.getElementById('listaCompases').style.width = '0%';
	document.getElementById('listaCompases').style.visibility = 'hidden';
	document.getElementById('ajustesLogo').style.transform = 'rotate(0deg)';
}
function abrirMenuCompas(){
	document.getElementById('listaCompases').style.width = '70%';
	document.getElementById('listaCompases').style.visibility = 'visible';
	document.getElementById('ajustesLogo').style.transform = 'rotate(360deg)';
}
//abrir cerrar configuracion
function cerrarAjustes(){
	document.getElementById('configuracion').style.width = '0%';
	document.getElementById('configuracion').style.visibility = 'hidden';
	document.getElementById('ajustesLogo').style.transform = 'rotate(0deg)';
}
function abrirAjustes(){
	document.getElementById('configuracion').style.width = '70%';
	document.getElementById('configuracion').style.visibility = 'visible';
	document.getElementById('ajustesLogo').style.transform = 'rotate(360deg)';
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
var binarios;
var ternarios;	
function validarBinarioTernario(){
	     binarios = document.getElementsByClassName('binario');
         ternarios = document.getElementsByClassName("ternario");
	var i;
	if(compasseisporOcho == true){
		
       for (i = 0; i < binarios.length; i++) {
            binarios[i].style.display = "none";
        }
    
		for(i = 0; i < ternarios.length; i++){
			ternarios[i].style.display = 'block';
		}
		document.getElementById('Seis').style.display = 'block';
		document.getElementById('Doce').style.display = 'none';
		
		for(i = 0; i < binarios.length; i++){
		binarios[i].classList.add ("ocultar");
	}
	}
	else if(compasDoceporOcho == true){
		for(i = 0; i < binarios.length; i++){
			binarios[i].style.display = 'none';
		}
		for(i = 0; i < ternarios.length; i++){
			ternarios[i].style.display = 'block';
		}
		document.getElementById('Seis').style.display = 'none';
		document.getElementById('Doce').style.display = 'block';
	}
	else{
		for(i = 0; i < binarios.length; i++){
			binarios[i].style.display = 'block';
		}
		for(i = 0; i < ternarios.length; i++){
			ternarios[i].style.display = 'none';
		}
		document.getElementById('Seis').style.display = 'none';
		document.getElementById('Doce').style.display = 'none';
	}
}	
var compas = 4; // es global para que cambie según la funcion 
var compasNegras = false;
var compasseisporOcho = false
var compasDoceporOcho = false
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
	compasNegras = true;
	compasseisporOcho = false;
    compasDoceporOcho = false;
	validarBinarioTernario();
		StopMetronomo();
	 document.getElementById('playporDefecto').click(); 	
	
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
	compasNegras = true;
	compasseisporOcho = false;
    compasDoceporOcho = false;
	validarBinarioTernario();
		StopMetronomo();
	 document.getElementById('playporDefecto').click(); 	
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
	compasNegras = true;
	compasseisporOcho = false;
    compasDoceporOcho = false;
	validarBinarioTernario();
	 document.getElementById('playporDefecto').click(); 	
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
	compasNegras = true;
	compasseisporOcho = false;
    compasDoceporOcho = false;
	validarBinarioTernario();
		StopMetronomo();
	 document.getElementById('playporDefecto').click(); 	
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
	compasNegras = true;
	compasseisporOcho = false;
    compasDoceporOcho = false;
	validarBinarioTernario();
		StopMetronomo();
	 document.getElementById('playporDefecto').click(); 	
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
	compasNegras = true;
	compasseisporOcho = false;
    compasDoceporOcho = false;
	validarBinarioTernario();
		StopMetronomo();
	 document.getElementById('playporDefecto').click(); 	
}
function compasSeisOcho(){
	compas = 2;
	document.getElementById('innerCompas').innerHTML = '6 / 8';
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
	compasNegras = false;
	compasseisporOcho = true;
    compasDoceporOcho = false;
	validarBinarioTernario();
}
function compasDoceOcho(){
	compas = 4;
	document.getElementById('innerCompas').innerHTML = '12 / 8';
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
	compasNegras = false;
	compasseisporOcho = false;
    compasDoceporOcho = true;
	validarBinarioTernario();
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
var MetronomoSeisOctavos;
var MetronomoDoceOctavos;

var negrabo = false;
var corcheabo = false;
var tresillobo = false;
var semicorcheabo = false;
var TresilloNegrabo = false;
var Galopabo = false;
var contraGalopabo = false;
var Sincopabo = false;
var Saltillobo = false;
//
var seisOcho = false;
var doceOcho = false;
//

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
	
	
//Desactivar acento en el primer tiempo
function AcentoPrimerOff(){
	document.getElementById('desactivar').style.display = 'none';
	document.getElementById('activar').style.display = 'block';
	beatNegraAcento = new Audio("Audio/negraA.wav");
	
}
function AcentoPrimerOn(){
	document.getElementById('activar').style.display = 'none';
	document.getElementById('desactivar').style.display = 'block';
	beatNegraAcento = beatNegra;
	
}
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
	var Galopa = 4;
	var contraGalopa = -3;
	var Sincopa = 4;
	var Saltillo = -3;
	var seis0cho = 2;
	var Doce0cho = 4;
	
function playNegras(){
	
	circles = document.getElementsByClassName('circle');
	
	StopMetronomo();
	tempoIn = document.getElementById('valorTempo').value; 
	//Intervalos de tempo
	tempoNegra = 60000/tempoIn;
	negra = compas;
	//Negras
	MetronomoNegra = setInterval(FuncionNegra, tempoNegra);
	
	function FuncionNegra(){
	
		if(negra >= compas && red == false){
			negra = 1;
			beatNegraAcento.play();
		    for( i = 0; i < circles.length; i++){
		    circles[i].style.background = 'linear-gradient(to bottom, #151515, #252525)';
			circles[i].style.transform = 'scale(1)';
			circles[0].style.background = '#b50000';
			circles[0].style.transform = 'scale(2)';
	        }
		}
		//******************
		else if(negra >= compas && red == true){
			negra = 1;
			beatNegraAcento.play();
		    for( i = 0; i < circles.length; i++){
		    circles[i].style.background = 'linear-gradient(to bottom, #250000, #350000)';
			circles[i].style.transform = 'scale(1)';
			circles[0].style.background = '#b50000';
			circles[0].style.transform = 'scale(2)';
	        }
						
			//document.getElementById('circle1').style.background = '#ff0000';
		}
		//*******************************
		else if(negra == 1 && red == false){
			negra++;
			for( var i = 0; i < circles.length; i++){
		       circles[i].style.background = 'linear-gradient(to bottom, #151515, #252525)';
			   circles[i].style.transform = 'scale(1)';
	        }
			circles[1].style.background = '#ff0000';
			circles[1].style.transform = 'scale(1.8)';
			beatNegra.play();
		}
		else if(negra == 1 && red == true){
			negra++;
			for( var i = 0; i < circles.length; i++){
		       circles[i].style.background = 'linear-gradient(to bottom, #250000, #350000)';
			   circles[i].style.transform = 'scale(1)';
	        }
			circles[1].style.background = '#ff0000';
			circles[1].style.transform = 'scale(1.8)';
			beatNegra.play();
		}
		else if(negra == 2 && red == false){
			negra++;
			for( var i = 0; i < circles.length; i++){
		       circles[i].style.background = 'linear-gradient(to bottom, #151515, #252525)';
			   circles[i].style.transform = 'scale(1)';
	        }
			circles[2].style.background = '#dd0000';
			circles[2].style.transform = 'scale(1.6)';
			beatNegra.play();
		}
		else if(negra == 2 && red == true){
			negra++;
			for( var i = 0; i < circles.length; i++){
		       circles[i].style.background = 'linear-gradient(to bottom, #250000, #350000)';
			   circles[i].style.transform = 'scale(1)';
	        }
			circles[2].style.background = '#dd0000';
			circles[2].style.transform = 'scale(1.6)';
			beatNegra.play();
		}
		else if(negra == 3 && red == false){
			negra++;
			for( var i = 0; i < circles.length; i++){
		       circles[i].style.background = 'linear-gradient(to bottom, #151515, #252525)';
			   circles[i].style.transform = 'scale(1)';
	        }
			circles[3].style.background = '#cc0000';
			circles[3].style.transform = 'scale(1.4)';
			beatNegra.play();
		}
		else if(negra == 3 && red == true){
			negra++;
			for( var i = 0; i < circles.length; i++){
		       circles[i].style.background = 'linear-gradient(to bottom, #250000, #350000)';
			   circles[i].style.transform = 'scale(1)';
	        }
			circles[3].style.background = '#cc0000';
			circles[3].style.transform = 'scale(1.4)';
			beatNegra.play();
		}
		else if(negra == 4 && red == false){
			negra++;
			for( var i = 0; i < circles.length; i++){
		       circles[i].style.background = 'linear-gradient(to bottom, #151515, #252525)';
			   circles[i].style.transform = 'scale(1)';
	        }
			circles[4].style.background = '#bb0000';
			circles[4].style.transform = 'scale(1.2)';
			beatNegra.play();
		}
		else if(negra == 4 && red == true){
			negra++;
			for( var i = 0; i < circles.length; i++){
		       circles[i].style.background = 'linear-gradient(to bottom, #250000, #350000)';
			   circles[i].style.transform = 'scale(1)';
	        }
			circles[4].style.background = '#bb0000';
			circles[4].style.transform = 'scale(1.2)';
			beatNegra.play();
		}
		else if(negra == 5 && red == false){
			negra++;
			for( var i = 0; i < circles.length; i++){
		       circles[i].style.background = 'linear-gradient(to bottom, #151515, #252525)';
			   circles[i].style.transform = 'scale(1)';
	        }
			circles[5].style.background = '#aa0000';
			circles[5].style.transform = 'scale(1)';
			beatNegra.play();
		}
		else if(negra == 5 && red == true){
			negra++;
			for( var i = 0; i < circles.length; i++){
		       circles[i].style.background = 'linear-gradient(to bottom, #250000, #350000)';
			   circles[i].style.transform = 'scale(1)';
	        }
			circles[5].style.background = '#aa0000';
			circles[5].style.transform = 'scale(1)';
			beatNegra.play();
		}
		else if(negra == 6 && red == false){
			negra++;
			for( var i = 0; i < circles.length; i++){
		       circles[i].style.background = 'linear-gradient(to bottom, #151515, #252525)';
			   circles[i].style.transform = 'scale(1)';
	        }
			circles[6].style.background = '#800000';
			circles[6].style.transform = 'scale(0.8)';
			beatNegra.play();
		}
		else if(negra == 6 && red == true){
			negra++;
			for( var i = 0; i < circles.length; i++){
		       circles[i].style.background = 'linear-gradient(to bottom, #250000, #350000)';
			   circles[i].style.transform = 'scale(1)';
	        }
			circles[6].style.background = '#800000';
			circles[6].style.transform = 'scale(0.8)';
			beatNegra.play();
		}
		else{
			negra++;
			for( var i = 0; i < circles.length; i++){
		       circles[i].style.background = 'linear-gradient(to bottom, #151515, #252525)';
			   circles[i].style.transform = 'scale(1)';
	        }
			circles[3].style.background = '#600000';
			circles[3].style.transform = 'scale(0.6)';
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
	 seisOcho = false;
	 doceOcho = false;
}
function playCorcheas(){
	subdivision.innerHTML = 'Corcheas';
	StopMetronomo();
	//validar si se esta en binario o ternario
	if (compasseisporOcho == true){
		playseisoctavos();
	}
	else if(compasDoceporOcho == true){
		playDoceoctavos();
	}
	else{		
	    playNegras();
	}
	var tempoIn = document.getElementById('valorTempo').value;
	
	//Intervalos de tempo
	var tempoNegra = 60000/tempoIn;
	var tempoCorchea= tempoNegra / 2;
	//Negras
	
	
	//Corcheas
	setTimeout(function(){
	MetronomoCorchea = setInterval(FuncionCorchea, tempoCorchea);
	function FuncionCorchea(){
		if(corchea >= 2){
			corchea = 1;
			beat4a.play();
		}
		else{
			corchea++;
			beat4a.play();
		}
	}	
	}, tempoNegra)
	
	
	
	 negrabo = false;
     corcheabo = true;
     tresillobo = false;
     semicorcheabo = false;	
	 TresilloNegrabo = false;
     Galopabo = false;
     contraGalopabo = false;
	 Sincopabo = false;
	 Saltillobo = false;
	 seisOcho = false;
	 doceOcho = false;
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
	setTimeout(function(){
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
	}, tempoNegra);
	negrabo = false;
    corcheabo = false;
    tresillobo = true;
    semicorcheabo = false;
	 TresilloNegrabo = false;
     Galopabo = false;
     contraGalopabo = false;
	 Sincopabo = false;
	 Saltillobo = false;
	 seisOcho = false;
	 doceOcho = false;
}
function playsemiCorcheas(){
		subdivision.innerHTML = 'Semicorcheas';
	StopMetronomo();
	
	//validar si se esta en binario o ternario
	if (compasseisporOcho == true){
		playseisoctavos()
	}
	else if(compasDoceporOcho == true){
		playDoceoctavos();
	}
	else{		
	    playNegras();
	}
	var tempoIn = document.getElementById('valorTempo').value;
	
	//Intervalos de tempo
	var tempoNegra = 60000/tempoIn;
	var tempoSemiCorchea= tempoNegra / 4;
	
	setTimeout(function(){
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
	}, tempoNegra);
	negrabo = false;
    corcheabo = false;
    tresillobo = false;
    semicorcheabo = true;
	 TresilloNegrabo = false;
     Galopabo = false;
     contraGalopabo = false;
	 Sincopabo = false;
	 Saltillobo = false;
	 seisOcho = false;
}
function playtresilloNegra(){
		subdivision.innerHTML = 'Tresillos de Negras';
	StopMetronomo();
	playNegras();
	var tempoIn = document.getElementById('valorTempo').value;
	
	//Intervalos de tempo
	var tempoNegra = 60000/tempoIn;
	var tempoTresilloNegra= (tempoNegra * 2) / 3;
	console.log('negra: ' + tempoNegra);
	console.log('tresiilo: ' + tempoTresilloNegra);
	
	var tresilloNegra = 3;
	setTimeout(function(){
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
	}, tempoNegra)
	
	negrabo = false;
    corcheabo = false;
    tresillobo = false;
    semicorcheabo = false;
	 TresilloNegrabo = true;
     Galopabo = false;
     contraGalopabo = false;
	 Sincopabo = false;
	 Saltillobo = false;
	 seisOcho = false;
}
function playGalopa(){ //el tiempo es el mismo que el de las semicorcheas, solo cambian los audios porque el segundo no se ejecuta
	
		subdivision.innerHTML = 'Galopas';
	StopMetronomo();
	
	//validar si se esta en binario o ternario
	if (compasseisporOcho == true){
		playseisoctavos()
	}
	else if(compasDoceporOcho == true){
		playDoceoctavos();
	}
	else{		
	    playNegras();
	}
	var tempoIn = document.getElementById('valorTempo').value;
	
	//Intervalos de tempo
	var tempoNegra = 60000/tempoIn;
	var tempoSemiCorchea= tempoNegra / 4;
	
			Galopa = 1;
	
	setTimeout(function(){
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
	}, tempoNegra);
	negrabo = false;
    corcheabo = false;
    tresillobo = false;
    semicorcheabo = false;
	 TresilloNegrabo = false;
     Galopabo = true;
     contraGalopabo = false;
	 Sincopabo = false;
	 Saltillobo = false;
	 seisOcho = false;
	 doceOcho = false;
}
function playcontraGalopa(){
		subdivision.innerHTML = 'Contra Galopas';
	StopMetronomo();
	
	//validar si se esta en binario o ternario
	if (compasseisporOcho == true){
		playseisoctavos()
	}
	else if(compasDoceporOcho == true){
		playDoceoctavos();
	}
	else{		
	    playNegras();
	}
	var tempoIn = document.getElementById('valorTempo').value;
	
	//Intervalos de tempo
	var tempoNegra = 60000/tempoIn;
	var tempoSemiCorchea= tempoNegra / 4;
	
	setTimeout(function(){
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
	}, StopMetronomo);
	negrabo = false;
    corcheabo = false;
    tresillobo = false;
    semicorcheabo = false;
	 TresilloNegrabo = false;
     Galopabo = false;
     contraGalopabo = true;
	 Sincopabo = false;
	 Saltillobo = false;
	 seisOcho = false;
}
function playSincopa(){
		subdivision.innerHTML = 'Sincopas';
	StopMetronomo();
	
	//validar si se esta en binario o ternario
	if (compasseisporOcho == true){
		playseisoctavos()
	}
	else if(compasDoceporOcho == true){
		playDoceoctavos();
	}
	else{		
	    playNegras();
	}
	var tempoIn = document.getElementById('valorTempo').value;
	
	//Intervalos de tempo
	var tempoNegra = 60000/tempoIn;
	var tempoSemiCorchea= tempoNegra / 4;
	Sincopa = 1;
	setTimeout(function(){
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
	}, tempoNegra);
	negrabo = false;
    corcheabo = false;
    tresillobo = false;
    semicorcheabo = false;
	 TresilloNegrabo = false;
     Galopabo = false;
     contraGalopabo = false;
	 Sincopabo = true;
	 Saltillobo = false;
	 seisOcho = false;
	 doceOcho = false;
}
function playSaltillo(){
		subdivision.innerHTML = 'Saltillos';
	StopMetronomo();
	
	//validar si se esta en binario o ternario
	if (compasseisporOcho == true){
		playseisoctavos()
	}
	else if(compasDoceporOcho == true){
		playDoceoctavos();
	}
	else{		
	    playNegras();
	}
	var tempoIn = document.getElementById('valorTempo').value;
	
	//Intervalos de tempo
	var tempoNegra = 60000/tempoIn;
	var tempoSemiCorchea= tempoNegra / 4;
			Saltillo = 1;
	
	setTimeout(function(){
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
	}, tempoNegra);
	negrabo = false;
    corcheabo = false;
    tresillobo = false;
    semicorcheabo = false;
	 TresilloNegrabo = false;
     Galopabo = false;
     contraGalopabo = false;
	 Sincopabo = false;
	 Saltillobo = true;
	 seisOcho = false;
	 doceOcho = false;
} 
//******** 6/ 8 ******
function playseisoctavos(){
	StopMetronomo();
	var tempoIn = document.getElementById('valorTempo').value;
	
	//Intervalos de tempo
	var tempoNegra = 60000/tempoIn;
	var temposeisOctavos= (tempoNegra / 2) * 3;
	console.log('negra: ' + tempoNegra);
	console.log('tresiilo: ' + temposeisOctavos);
	seis0cho = compas;
	
	
		//tresillos de corchea
	MetronomoSeisOctavos = setInterval(FuncionSeisOctavos, temposeisOctavos);
	function FuncionSeisOctavos(){
		if(seis0cho >= compas && red == false){
			seis0cho = 1;
			beatNegraAcento.play();
		    for( i = 0; i < circles.length; i++){
		    circles[i].style.background = 'linear-gradient(to bottom, #151515, #252525)';
			circles[i].style.transform = 'scale(1)';
			circles[0].style.background = '#b50000';
			circles[0].style.transform = 'scale(2)';
	        }
		}
		//******************
		else if(seis0cho >= compas && red == true){
			seis0cho = 1;
			beatNegraAcento.play();
		    for( i = 0; i < circles.length; i++){
		    circles[i].style.background = 'linear-gradient(to bottom, #250000, #350000)';
			circles[i].style.transform = 'scale(1)';
			circles[0].style.background = '#b50000';
			circles[0].style.transform = 'scale(2)';
	        }
						
			//document.getElementById('circle1').style.background = '#ff0000';
		}
		//*******************************
		else if(seis0cho == 1 && red == false){
			seis0cho++;
			for( var i = 0; i < circles.length; i++){
		       circles[i].style.background = 'linear-gradient(to bottom, #151515, #252525)';
			   circles[i].style.transform = 'scale(1)';
	        }
			circles[1].style.background = '#ff0000';
			circles[1].style.transform = 'scale(1.8)';
			beatNegra.play();
		}
		else if(seis0cho == 1 && red == true){
			seis0cho++;
			for( var i = 0; i < circles.length; i++){
		       circles[i].style.background = 'linear-gradient(to bottom, #250000, #350000)';
			   circles[i].style.transform = 'scale(1)';
	        }
			circles[1].style.background = '#ff0000';
			circles[1].style.transform = 'scale(1.8)';
			beatNegra.play();
		}
		else{
			negra++;
			for( var i = 0; i < circles.length; i++){
		       circles[i].style.background = 'linear-gradient(to bottom, #250000, #350000)';
			   circles[i].style.transform = 'scale(1)';
	        }
			circles[1].style.background = '#ff0000';
			circles[1].style.transform = 'scale(1.8)';
			beatNegra.play();
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
	 Saltillobo = false;
	 seisOcho = true;
	 doceOcho = false;
}


function playDoceoctavos(){
	StopMetronomo();
	var tempoIn = document.getElementById('valorTempo').value;
	
	//Intervalos de tempo
	var tempoNegra = 60000/tempoIn;
	var tempoDoceOctavos= (tempoNegra / 2) * 3;
	console.log('negra: ' + tempoNegra);
	console.log('tresiilo: ' + tempoDoceOctavos);
	Doce0cho = compas;
	
	
		//tresillos de corchea
	MetronomoDoceOctavos = setInterval(FuncionDoceOctavos, tempoDoceOctavos);
	function FuncionDoceOctavos(){
		if(Doce0cho >= compas && red == false){
			Doce0cho = 1;
			beatNegraAcento.play();
		    for( i = 0; i < circles.length; i++){
		    circles[i].style.background = 'linear-gradient(to bottom, #151515, #252525)';
			circles[i].style.transform = 'scale(1)';
	        }
			circles[0].style.background = '#b50000';
			circles[0].style.transform = 'scale(2)';
		}
		//******************
		else if(Doce0cho >= compas && red == true){
			Doce0cho = 1;
			beatNegraAcento.play();
		    for( i = 0; i < circles.length; i++){
		    circles[i].style.background = 'linear-gradient(to bottom, #250000, #350000)';
			circles[i].style.transform = 'scale(1)';
	        }
			circles[0].style.background = '#b50000';
			circles[0].style.transform = 'scale(2)';
						
			//document.getElementById('circle1').style.background = '#ff0000';
		}
		//*******************************
		else if(Doce0cho == 1 && red == false){
			Doce0cho++;
			for( i = 0; i < circles.length; i++){
		       circles[i].style.background = 'linear-gradient(to bottom, #151515, #252525)';
			   circles[i].style.transform = 'scale(1)';
	        }
			circles[1].style.background = '#ff0000';
			circles[1].style.transform = 'scale(1.8)';
			beatNegra.play();
		}
		
		//
		//******************
		else if(Doce0cho >= 1 && red == true){
			Doce0cho++;
			beatNegra.play();
		    for( i = 0; i < circles.length; i++){
		    circles[i].style.background = 'linear-gradient(to bottom, #250000, #350000)';
			circles[i].style.transform = 'scale(1)';
			
	        }
			circles[1].style.background = '#b50000';
			circles[1].style.transform = 'scale(1.8)';			
			//document.getElementById('circle1').style.background = '#ff0000';
		}
		//*******************************
		else if(Doce0cho == 2 && red == false){
			Doce0cho++;
			for( i = 0; i < circles.length; i++){
		       circles[i].style.background = 'linear-gradient(to bottom, #151515, #252525)';
			   circles[i].style.transform = 'scale(1)';
	        }
			circles[2].style.background = '#ff0000';
			circles[2].style.transform = 'scale(1.6)';
			beatNegra.play();
		}
		else if(Doce0cho == 2 && red == true){
			Doce0cho++;
			for( i = 0; i < circles.length; i++){
		       circles[i].style.background = 'linear-gradient(to bottom, #250000, #350000)';
			   circles[i].style.transform = 'scale(1)';
	        }
			circles[2].style.background = '#ff0000';
			circles[2].style.transform = 'scale(1.6)';
			beatNegra.play();
		}
		//*******************************
		else if(Doce0cho == 3 && red == false){
			Doce0cho++;
			for( i = 0; i < circles.length; i++){
		       circles[i].style.background = 'linear-gradient(to bottom, #151515, #252525)';
			   circles[i].style.transform = 'scale(1)';
	        }
			circles[3].style.background = '#ff0000';
			circles[3].style.transform = 'scale(1.4)';
			beatNegra.play();
		}
		else if(Doce0cho == 3 && red == true){
			Doce0cho++;
			for( i = 0; i < circles.length; i++){
		       circles[i].style.background = 'linear-gradient(to bottom, #250000, #350000)';
			   circles[i].style.transform = 'scale(1)';
	        }
			circles[3].style.background = '#ff0000';
			circles[3].style.transform = 'scale(1.4)';
			beatNegra.play();
		}
		else{
			Doce0cho++;
			for( i = 0; i < circles.length; i++){
		       circles[i].style.background = 'linear-gradient(to bottom, #250000, #350000)';
			   circles[i].style.transform = 'scale(1)';
	        }
			circles[0].style.background = '#ff0000';
			circles[0].style.transform = 'scale(1.2)';
			beatNegra.play();
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
	 Saltillobo = false;
	 seisOcho = false;
	 doceOcho = true;
}
/******** 12 / 8 ******/
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
	clearInterval(MetronomoSeisOctavos);
	clearInterval(MetronomoDoceOctavos);
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
			circles[0].style.background = '#ff0000';
			circles[0].style.transform = 'scale(1.2)';
	
}
function playAll(){
	validarBinarioTernario();
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
	else if (seisOcho == true) { 
		playseisoctavos();	
	    subdivision.innerHTML = 'Negra con puntillo';
	}
	else if (doceOcho == true) { 
		playDoceoctavos();	
	    subdivision.innerHTML = 'Negra con puntillo';
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

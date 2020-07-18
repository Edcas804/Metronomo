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
var MetronomoTernario;

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
var ternariobo = false;
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
	var beat4 = new Audio("Audio/semicorchea2.wav");
	var beat4a = new Audio("Audio/semicorchea2.wav");
	var beat4b = new Audio("Audio/semicorchea2.wav");
//FUNCTION PARA DETERMINAR LOS OSCILADORES DE LOS CLICKS	
//FUNCTION PARA DETERMINAR LOS OSCILADORES DE LOS CLICKS	
	var context = new AudioContext();
	var beat1 = 880.0;
	var beat2 = 440.0;
	var beat3 = 784.0;
	var acentoYes = false;
var freq1;
var freq2;
var freq3;
function mostrarValorFrecuencia1(){
	freq1 = document.getElementById('rangoFrecuencia1').value;
	    document.getElementById('valorFrecuencia').innerHTML = freq1;
}
function mostrarValorFrecuencia2(){
	freq2 = document.getElementById('rangoFrecuencia2').value;
	    document.getElementById('valorFrecuencia2').innerHTML = freq2;
}
function mostrarValorFrecuencia3(){
	freq3 = document.getElementById('rangoFrecuencia3').value;
	    document.getElementById('valorFrecuencia3').innerHTML = freq3;
}
function AcentoPrimerOff(){
	document.getElementById('desactivar').style.display = 'none';
	document.getElementById('activar').style.display = 'block';
	acentoYes = false;
	
}
function AcentoPrimerOn(){
	document.getElementById('activar').style.display = 'none';
	document.getElementById('desactivar').style.display = 'block';
	acentoYes = true;
}

//tipos de onda

var sinebo1 = false;
var squarebo1 = false;
var sawtooth1 = false;
var triangle1 = false;
var sinebo2 = false;
var squarebo2 = false;
var sawtooth2 = false;
var triangle2 = false;
var sinebo3 = false;
var squarebo3 = false;
var sawtooth3 = false;
var triangle3 = false;
function waveTypeuser(wave){
		sinebo3 = false;
        squarebo3 = false;
        sawtooth3 = false;
        triangle3 = false;
		if(wave === 'sineboun'){
			sinebo3 = true;
			console.log(sinebo3)
		}else if(wave === 'squareun'){
            squarebo3 = true;			
		}else if(wave === 'sawtoothun'){
            sawtooth3 = true;			
		}else if(wave === 'triangleun'){
            triangle3 = true;			
		}
		else{
            squarebo3 = true;					
		}
	}

function waveTypeuser2(wave){
        sinebo2 = false;
        squarebo2 = false;
        sawtooth2 = false;
        triangle2 = false;
		//dos
		if(wave === 'sineboDos'){
            sinebo2 = true;			
		}else if(wave === 'squareDos'){
            squarebo2 = true;			
		}else if(wave === 'sawtoothDos'){
            sawtooth2 = true;			
		}else if(wave === 'triangleDos'){
            triangle2 = true;			
		}
		else{
            squarebo2 = true;					
		}
	}
function waveTypeuser3(wave){
        sinebo1 = false;
        squarebo1 = false;
        sawtooth1 = false;
        triangle1 = false;
		//dos
		if(wave === 'sineboTres'){
            sinebo1 = true;			
		}else if(wave === 'squareTres'){
            squarebo1 = true;			
		}else if(wave === 'sawtoothTres'){
            sawtooth1 = true;			
		}else if(wave === 'triangleTres'){
            triangle1 = true;			
		}
		else{
            squarebo1 = true;					
		}
	}
//faders y niveles
var gain1;
var gain2;
var gain3;
function mostrarValor1(){
	gain1 = document.getElementById('rangobeat1').value;
	    document.getElementById('valorbeat1').innerHTML = gain1;
}
function mostrarValor2(){
	gain2 = document.getElementById('rangobeat2').value;
	    document.getElementById('valorbeat2').innerHTML = gain2;
}
function mostrarValor3(){
	gain3 = document.getElementById('rangobeat3').value;
	    document.getElementById('valorbeat3').innerHTML = gain3;
}


function jsnotas(){
	var waveType;
	if(sinebo1 == true){
		waveType = "sine";
	}
	else if(squarebo1==true){
		waveType = "square";
	}
	else if(sawtooth1==true){
		waveType = "sawtooth";
	}
	else if(triangle1==true){
		waveType = "triangle";
	}
	else{
	waveType = "square";
	}
	//*************************
	//*******************************
	gain1Origin1 = document.getElementById('rangobeat1').value;
	gain1 = document.getElementById('rangobeat1').value/100;
	
	var indicador1 = document.getElementById('indicador1');
	
	freq1 = document.getElementById('rangoFrecuencia1').value;
	frecuencia1 = freq1;
	//oscilador
	var o = context.createOscillator();
	g = context.createGain();
	o.connect(g);
	o.type = waveType; //sine, square, sawtooth, triangle
	g.connect(context.destination);
	o.start(0);
	if (acentoYes == true || compasTresporOcho == true || compasUnCuatro == true){
	    o.frequency.value= beat2;
		g.gain.exponentialRampToValueAtTime(0.00001,context.currentTime +0.04);
	    g.gain.value= 0.8;
	}
	else {
	o.frequency.value= frecuencia1;
	g.gain.exponentialRampToValueAtTime(0.00001,context.currentTime +0.09);
	g.gain.value= gain1;
	}
	
	//para subdividir los colores del indicador1
	    if(gain1Origin1 < 45){
			indicador1.style.background = '#00ff00';
			indicador1.style.height = gain1Origin1+'%';
		}
		else if(gain1Origin1 < 90){
			indicador1.style.background = 'linear-gradient(to top, #00ff00, #ffff00)';
			indicador1.style.height = gain1Origin1+'%';
			
		}
		else{
	    indicador1.style.background = 'linear-gradient(to top, #00ff00, #00ff00, #ffff00, #ffff00, #ff0000)';
	    indicador1.style.height = gain1Origin1+'%';
	    }
	var num = gain1Origin1;
	var Interval1 = setInterval(nivel1, 3);
	    function nivel1(){
			if(num <= 1){
				clearInterval(Interval1);
			}
			else{
				num--;
	            indicador1.style.height = num+'%';
				
			}
		}
	
}
function jsnotas2(){
	var waveType;
	if(sinebo2 == true){
		waveType = "sine";
	}
	else if(squarebo2==true){
		waveType = "square";
	}
	else if(sawtooth2==true){
		waveType = "sawtooth";
	}
	else if(triangle2==true){
		waveType = "triangle";
	}
	else{
	waveType = "square";
	}
	//*************************
	gain1Origin2 = document.getElementById('rangobeat2').value;
	gain2 = document.getElementById('rangobeat2').value/100;
	var indicador2 = document.getElementById('indicador2');
	
	
	freq2 = document.getElementById('rangoFrecuencia2').value;
	frecuencia2 = freq2;
	//oscilador
	var o = context.createOscillator();
	g2 = context.createGain();
	o.connect(g2);
	o.type = waveType; //sine, square, sawtooth, triangle
	o.frequency.value= frecuencia2;
	g2.connect(context.destination);
	o.start(0);
	g2.gain.exponentialRampToValueAtTime(0.00001,context.currentTime +0.04);
	g2.gain.value = gain2;
	//para subdividir los colores del indicador1
	    if(gain1Origin2 < 45){
			indicador2.style.background = '#00ff00';
			indicador2.style.height = gain1Origin2+'%';
		}
		else if(gain1Origin2 < 90){
			indicador2.style.background = 'linear-gradient(to top, #00ff00, #ffff00)';
			indicador2.style.height = gain1Origin2+'%';
			
		}
		else{
	    indicador2.style.background = 'linear-gradient(to top, #00ff00, #00ff00, #ffff00, #ffff00, #ff0000)';
	    indicador2.style.height = gain1Origin2+'%';
	    }
	
	var num = gain1Origin2;
	var Interval2 = setInterval(nivel2, 2);
	    function nivel2(){
			if(num <= 1){
				clearInterval(Interval2);
			}
			else{
				num--;
	            indicador2.style.height = num+'%';
				
			}
		}
	
}
function jsnotas3(){
	var waveType;
	if(sinebo3 == true){
		waveType = "sine";
	}
	else if(squarebo3==true){
		waveType = "square";
	}
	else if(sawtooth3==true){
		waveType = "sawtooth";
	}
	else if(triangle3==true){
		waveType = "triangle";
	}
	else{
	waveType = "square";
	}
	//*************************
	gain1Origin3 = document.getElementById('rangobeat3').value;
	gain3 = document.getElementById('rangobeat3').value/100;
	
	var indicador3 = document.getElementById('indicador3');
	//para subdividir los colores del indicador1
	 
	
	freq3 = document.getElementById('rangoFrecuencia3').value;
	frecuencia3 = freq3;
	//oscilador
	var o = context.createOscillator();
	g3 = context.createGain();
	o.connect(g3);
	o.type = waveType; //sine, square, sawtooth, triangle
	o.frequency.value= frecuencia3;
	g3.connect(context.destination);
	o.start(0);
	g3.gain.exponentialRampToValueAtTime(0.00001,context.currentTime +0.02);
	g3.gain.value= gain3;
	   if(gain1Origin3 < 45){
			indicador3.style.background = '#00ff00';
			indicador3.style.height = gain1Origin3+'%';
		}
		else if(gain1Origin3 < 90){
			indicador3.style.background = 'linear-gradient(to top, #00ff00, #ffff00)';
			indicador3.style.height = gain1Origin3+'%';
			
		}
		else{
	    indicador3.style.background = 'linear-gradient(to top, #00ff00, #00ff00, #ffff00, #ffff00, #ff0000)';
	    indicador3.style.height = gain1Origin3+'%';
	    }
	
	var num = gain1Origin3;
	var Interval3 = setInterval(nivel3, 1);
	    function nivel3(){
			if(num <= gain1Origin3/2){
				clearInterval(Interval3);
	            indicador3.style.height = '0%';
			}
			else{
				num--;
	            indicador3.style.height = num+'%';
				
			}
		}
	
}
//FUNCTION PARA DETERMINAR LOS OSCILADORES DE LOS CLICKS	
//FUNCTION PARA DETERMINAR LOS OSCILADORES DE LOS CLICKS	
//Desactivar acento en el primer tiempo


	
//Conversion del tiempo de entrada a bpm
	tempoIn = document.getElementById('valorTempo').value;
	
	//Intervalos de tempo
	var tempoNegra  = 60000/tempoIn;
	var tempoCorchea= tempoNegra / 2;
	var tempoSemiCorchea= tempoNegra / 4;
	var tempoTresilloCorchea= tempoNegra / 3;
	//***************
	//***************TERMINAR
	var tempoTresilloNegra= (tempoNegra * 2) / 3;
	//*******************TERMINAR
	//****************
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
	var Doce0cho;
	
function playNegras(){
	
	circles = document.getElementsByClassName('circle');
	
	StopMetronomo();
	
	tempoIn = document.getElementById('valorTempo').value;
	tempoNegra = 60000/tempoIn;
	negra = compas;
	//Negras
	MetronomoNegra = setInterval(FuncionNegra, tempoNegra);
	
	function FuncionNegra(){
	
		if(negra >= compas && red == false){
			negra = 1;
			jsnotas();
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
			jsnotas();
		    for( i = 0; i < circles.length; i++){
		    circles[i].style.background = 'linear-gradient(to bottom, #250000, #350000)';
			circles[i].style.transform = 'scale(1)';
			circles[0].style.background = '#b50000';
			circles[0].style.transform = 'scale(2)';
	        }
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
			jsnotas2();
		}
		else if(negra == 1 && red == true){
			negra++;
			for( var i = 0; i < circles.length; i++){
		       circles[i].style.background = 'linear-gradient(to bottom, #250000, #350000)';
			   circles[i].style.transform = 'scale(1)';
	        }
			circles[1].style.background = '#ff0000';
			circles[1].style.transform = 'scale(1.8)';
			jsnotas2();
		}
		else if(negra == 2 && red == false){
			negra++;
			for( var i = 0; i < circles.length; i++){
		       circles[i].style.background = 'linear-gradient(to bottom, #151515, #252525)';
			   circles[i].style.transform = 'scale(1)';
	        }
			circles[2].style.background = '#dd0000';
			circles[2].style.transform = 'scale(1.6)';
			jsnotas2();
		}
		else if(negra == 2 && red == true){
			negra++;
			for( var i = 0; i < circles.length; i++){
		       circles[i].style.background = 'linear-gradient(to bottom, #250000, #350000)';
			   circles[i].style.transform = 'scale(1)';
	        }
			circles[2].style.background = '#dd0000';
			circles[2].style.transform = 'scale(1.6)';
			jsnotas2();
		}
		else if(negra == 3 && red == false){
			negra++;
			for( var i = 0; i < circles.length; i++){
		       circles[i].style.background = 'linear-gradient(to bottom, #151515, #252525)';
			   circles[i].style.transform = 'scale(1)';
	        }
			circles[3].style.background = '#cc0000';
			circles[3].style.transform = 'scale(1.4)';
			jsnotas2();
		}
		else if(negra == 3 && red == true){
			negra++;
			for( var i = 0; i < circles.length; i++){
		       circles[i].style.background = 'linear-gradient(to bottom, #250000, #350000)';
			   circles[i].style.transform = 'scale(1)';
	        }
			circles[3].style.background = '#cc0000';
			circles[3].style.transform = 'scale(1.4)';
			jsnotas2();
		}
		else if(negra == 4 && red == false){
			negra++;
			for( var i = 0; i < circles.length; i++){
		       circles[i].style.background = 'linear-gradient(to bottom, #151515, #252525)';
			   circles[i].style.transform = 'scale(1)';
	        }
			circles[4].style.background = '#bb0000';
			circles[4].style.transform = 'scale(1.2)';
			jsnotas2();
		}
		else if(negra == 4 && red == true){
			negra++;
			for( var i = 0; i < circles.length; i++){
		       circles[i].style.background = 'linear-gradient(to bottom, #250000, #350000)';
			   circles[i].style.transform = 'scale(1)';
	        }
			circles[4].style.background = '#bb0000';
			circles[4].style.transform = 'scale(1.2)';
			jsnotas2();
		}
		else if(negra == 5 && red == false){
			negra++;
			for( var i = 0; i < circles.length; i++){
		       circles[i].style.background = 'linear-gradient(to bottom, #151515, #252525)';
			   circles[i].style.transform = 'scale(1)';
	        }
			circles[5].style.background = '#aa0000';
			circles[5].style.transform = 'scale(1)';
			jsnotas2();
		}
		else if(negra == 5 && red == true){
			negra++;
			for( var i = 0; i < circles.length; i++){
		       circles[i].style.background = 'linear-gradient(to bottom, #250000, #350000)';
			   circles[i].style.transform = 'scale(1)';
	        }
			circles[5].style.background = '#aa0000';
			circles[5].style.transform = 'scale(1)';
			jsnotas2();
		}
		else if(negra == 6 && red == false){
			negra++;
			for( var i = 0; i < circles.length; i++){
		       circles[i].style.background = 'linear-gradient(to bottom, #151515, #252525)';
			   circles[i].style.transform = 'scale(1)';
	        }
			circles[6].style.background = '#800000';
			circles[6].style.transform = 'scale(0.8)';
			jsnotas2();
		}
		else if(negra == 6 && red == true){
			negra++;
			for( var i = 0; i < circles.length; i++){
		       circles[i].style.background = 'linear-gradient(to bottom, #250000, #350000)';
			   circles[i].style.transform = 'scale(1)';
	        }
			circles[6].style.background = '#800000';
			circles[6].style.transform = 'scale(0.8)';
			jsnotas2();
		}
		else{
			negra++;
			for( var i = 0; i < circles.length; i++){
		       circles[i].style.background = 'linear-gradient(to bottom, #151515, #252525)';
			   circles[i].style.transform = 'scale(1)';
	        }
			circles[3].style.background = '#600000';
			circles[3].style.transform = 'scale(0.6)';
			jsnotas2();
			
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
    ternariobo = false;
}
function playCorcheas(){
	subdivision.innerHTML = 'Corcheas';
	StopMetronomo();
	//validar si se esta en binario o ternario
	if (compasseisporOcho == true || compasTresporOcho == true || compasNueveOcho == true || compasDoceporOcho == true){
		playTernarios();
	}
	else{		
	    playNegras();
	}	tempoNegra = 60000/tempoIn;
		tempoCorchea= tempoNegra / 2;
	//Negras
	
	
	//Corcheas
	setTimeout(function(){
	MetronomoCorchea = setInterval(FuncionCorchea, tempoCorchea);
	function FuncionCorchea(){
		if(corchea >= 2){
			corchea = 1;
			jsnotas3();
		}
		else{
			corchea++;
			jsnotas3();
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
    ternariobo = false;
}

function playTresillos(){
		subdivision.innerHTML = 'Tresillos de corcheas';
	StopMetronomo();
	playNegras();
	
    tempoNegra = 60000/tempoIn;

	tempoTresilloCorchea= tempoNegra / 3;
	
	//tresillos de corchea
	setTimeout(function(){
	MetronomoTresilloCorchea = setInterval(FuncionTresillosCorchea, tempoTresilloCorchea);
	function FuncionTresillosCorchea(){
		if(tresillocorchea >= 3){
			tresillocorchea = 1;
			jsnotas3();
		}
		else if(tresillocorchea == 1){
			tresillocorchea++;
			jsnotas3();
		}
		else{
			tresillocorchea++;
			jsnotas3();
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
    ternariobo = false;
}
function playsemiCorcheas(){
		subdivision.innerHTML = 'Semicorcheas';
	StopMetronomo();
	//validar si se esta en binario o ternario
	if (compasseisporOcho == true || compasTresporOcho == true || compasNueveOcho == true || compasDoceporOcho == true){
		playTernarios();
	}
	else{		
	    playNegras();
	}
	tempoSemiCorchea= tempoNegra / 4;
	
	setTimeout(function(){
	//Semicorcheas
	MetronomoSemiCorchea = setInterval(FuncionSemiCorchea, tempoSemiCorchea);
	function FuncionSemiCorchea(){
		if(semicorchea == 4){
			semicorchea = 1;
			jsnotas3();
		}
		else if(semicorchea == 1){
			semicorchea++;
			jsnotas3();
			
		}
		else if(semicorchea == 2){
			semicorchea++;
			jsnotas3();
		}
		else {
			semicorchea++;
			jsnotas3();
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
    ternariobo = false;
}
function playtresilloNegra(){
		subdivision.innerHTML = 'Tresillos de Negras';
	StopMetronomo();
	playNegras();
	
	tempoTresilloNegra= (tempoNegra * 2) / 3;
	
	setTimeout(function(){
		//tresillos de corchea
	MetronomoTresilloNegra = setInterval(FuncionTresilloNegra, tempoTresilloNegra);
	function FuncionTresilloNegra(){
		if(tresilloNegra >= 3){
			tresilloNegra = 1;
			jsnotas3();
		}
		else if(tresilloNegra == 1){
			tresilloNegra++;
			jsnotas3();
		}
		else{
			tresilloNegra++;
			jsnotas3();
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
    ternariobo = false;
}
function playGalopa(){ //el tiempo es el mismo que el de las semicorcheas, solo cambian los audios porque el segundo no se ejecuta
	
		subdivision.innerHTML = 'Galopas';
	StopMetronomo();
		
	playNegras();
	
	tempoSemiCorchea= tempoNegra / 4;
	
			Galopa = 1;
	
	setTimeout(function(){
	//Semicorcheas
	MetronomoGalopa = setInterval(FuncionGalopa, tempoSemiCorchea);
	function FuncionGalopa(){
		if(Galopa == 4){
			Galopa = 1;
			jsnotas3();
		}
		else if(Galopa == 1){
			Galopa++;
			//No lleva audio para crear el efecto galopa
		}
		else if(Galopa == 2){
			Galopa++;
			jsnotas3();
		}
		else {
			Galopa++;
			jsnotas3();
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
    ternariobo = false;
}
function playcontraGalopa(){
		subdivision.innerHTML = 'Contra Galopas';
	StopMetronomo();

	    playNegras();tempoSemiCorchea= tempoNegra / 4;
	
	setTimeout(function(){
	//Semicorcheas
	MetronomoContraGalopa = setInterval(FuncionContraGalopa, tempoSemiCorchea);
	function FuncionContraGalopa(){
		if(contraGalopa == 4){
			contraGalopa = 1;
			jsnotas3();
		}
		else if(contraGalopa == 1){
			contraGalopa++;
			jsnotas3();
		}
		else if(contraGalopa == 2){
			contraGalopa++;
			jsnotas3();
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
    ternariobo = false;
}
function playSincopa(){
		subdivision.innerHTML = 'Sincopas';
	StopMetronomo();
	    playNegras();tempoSemiCorchea= tempoNegra / 4;
	Sincopa = 1;
	setTimeout(function(){
	//Semicorcheas
	MetronomoSincopa = setInterval(FuncionSincopa, tempoSemiCorchea);
	function FuncionSincopa(){
		
		if(Sincopa == 4){
			Sincopa = 1;
			jsnotas3();
		}
		else if(Sincopa == 1){
			Sincopa++;
			jsnotas3();
		}
		else if(Sincopa == 2){
			Sincopa++;
			//No lleva audio para crear el efecto galopa
		}
		else {
			Sincopa++;
			jsnotas3();
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
    ternariobo = false;
}
function playSaltillo(){
		subdivision.innerHTML = 'Saltillos';
	StopMetronomo();		
	    playNegras();
		tempoSemiCorchea= tempoNegra / 4;
			Saltillo = 1;
	
	setTimeout(function(){
	//Semicorcheas
	MetronomoSaltillo = setInterval(FuncionSaltillo, tempoSemiCorchea);
	function FuncionSaltillo(){
		if(Saltillo == 4){
			Saltillo = 1;
			jsnotas3();
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
			jsnotas3();
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
    ternariobo = false;
} 

function playTernarios(){
	StopMetronomo();
	tempoIn = document.getElementById('valorTempo').value;
	tempoNegra = 60000/tempoIn;
	tempoTernario= (tempoNegra / 2) * 3;
	Doce0cho = compas;
	
	
		//tresillos de corchea
	MetronomoTernario = setInterval(FuncionDoceOctavos, tempoTernario);
	function FuncionDoceOctavos(){
		if(Doce0cho >= compas && red == false){
			Doce0cho = 1;
			jsnotas();
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
			jsnotas();
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
			jsnotas2();
		}
		
		//
		//******************
		else if(Doce0cho >= 1 && red == true){
			Doce0cho++;
			jsnotas2();
		    for( i = 0; i < circles.length; i++){
		    circles[i].style.background = 'linear-gradient(to bottom, #250000, #350000)';
			circles[i].style.transform = 'scale(1)';
			
	        }
			circles[1].style.background = '#b50000';
			circles[1].style.transform = 'scale(1.8)';		
		}
		else if(Doce0cho == 2 && red == false){
			Doce0cho++;
			for( i = 0; i < circles.length; i++){
		       circles[i].style.background = 'linear-gradient(to bottom, #151515, #252525)';
			   circles[i].style.transform = 'scale(1)';
	        }
			circles[2].style.background = '#ff0000';
			circles[2].style.transform = 'scale(1.6)';
			jsnotas2();
		}
		else if(Doce0cho == 2 && red == true){
			Doce0cho++;
			for( i = 0; i < circles.length; i++){
		       circles[i].style.background = 'linear-gradient(to bottom, #250000, #350000)';
			   circles[i].style.transform = 'scale(1)';
	        }
			circles[2].style.background = '#ff0000';
			circles[2].style.transform = 'scale(1.6)';
			jsnotas2();
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
			jsnotas2();
		}
		else if(Doce0cho == 3 && red == true){
			Doce0cho++;
			for( i = 0; i < circles.length; i++){
		       circles[i].style.background = 'linear-gradient(to bottom, #250000, #350000)';
			   circles[i].style.transform = 'scale(1)';
	        }
			circles[3].style.background = '#ff0000';
			circles[3].style.transform = 'scale(1.4)';
			jsnotas2();
		}
		else{
			Doce0cho++;
			for( i = 0; i < circles.length; i++){
		       circles[i].style.background = 'linear-gradient(to bottom, #250000, #350000)';
			   circles[i].style.transform = 'scale(1)';
	        }
			circles[0].style.background = '#ff0000';
			circles[0].style.transform = 'scale(1.2)';
			jsnotas2();
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
     ternariobo = true;
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
	clearInterval(MetronomoTernario);
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
	else if (ternariobo == true) { 
		playTernarios();	
	    subdivision.innerHTML = 'Corcheas';
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
//abrir cerrar selector de compases

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
	if(compasseisporOcho == true || compasNueveOcho == true || compasDoceporOcho == true || compasTresporOcho == true){
		
       for (i = 0; i < binarios.length; i++) {
            binarios[i].style.display = "none";
        }
    
		for(i = 0; i < ternarios.length; i++){
			ternarios[i].style.display = 'block';
		}
		document.getElementById('ternarioNegra').style.display = 'block';
		
	}
	
	else{
		for(i = 0; i < binarios.length; i++){
			binarios[i].style.display = 'block';
		}
		for(i = 0; i < ternarios.length; i++){
			ternarios[i].style.display = 'none';
		}
		document.getElementById('ternarioNegra').style.display = 'none';
	}
}	
var compas = 4; // es global para que cambie según la funcion 
var compasNegras = false;
var	compasTresporOcho = false;
var compasseisporOcho = false
var	compasNueveOcho = false;
var compasDoceporOcho = false
var compasUnCuatro = false; // en caso de elegir el compas 1/4 con este boleano se evaluara la funcion jsnotas()

function compasUnCua(){
	compas = 1;
	document.getElementById('innerCompas').innerHTML = '1 / 4';
	//circulos interactivos
	document.getElementById('circle1').style.display = 'Block';
	document.getElementById('circle2').style.display = 'none';
	document.getElementById('circle3').style.display = 'none';
	document.getElementById('circle4').style.display = 'none';
	document.getElementById('circle5').style.display = 'none';
	document.getElementById('circle6').style.display = 'none';
	document.getElementById('circle7').style.display = 'none';
	
	//	cerrar el menu
	cerrarMenuCompas('listaCompases');
	compasNegras = true;
	compasTresporOcho = false
	compasseisporOcho = false;
	compasNueveOcho = false;
    compasDoceporOcho = false;
	compasUnCuatro = true;

	validarBinarioTernario();
		StopMetronomo();
	 document.getElementById('playporDefecto').click(); 	
	
}
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
	cerrarMenuCompas('listaCompases');
	compasNegras = true;
	compasTresporOcho = false
	compasseisporOcho = false;
	compasNueveOcho = false;
    compasDoceporOcho = false;
	compasUnCuatro = false;
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
	cerrarMenuCompas('listaCompases');
	compasNegras = true;
	compasTresporOcho = false;
	compasseisporOcho = false;
	compasNueveOcho = false;
    compasDoceporOcho = false;
	compasUnCuatro = false;
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
	cerrarMenuCompas('listaCompases');
	compasNegras = true;
	compasTresporOcho = false;
	compasseisporOcho = false;
	compasNueveOcho = false;
    compasDoceporOcho = false;
	compasUnCuatro = false;
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
	cerrarMenuCompas('listaCompases');
	compasNegras = true;
	compasTresporOcho = false;
	compasseisporOcho = false;
	compasNueveOcho = false;
    compasDoceporOcho = false;
	compasUnCuatro = false;
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
	cerrarMenuCompas('listaCompases');
	compasNegras = true;
	compasseisporOcho = false;
	compasTresporOcho = false;
	compasNueveOcho = false;
    compasDoceporOcho = false;
	compasUnCuatro = false;
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
	cerrarMenuCompas('listaCompases');
	compasNegras = true;
	compasTresporOcho = false;
	compasseisporOcho = false;
	compasNueveOcho = false;
    compasDoceporOcho = false;
	compasUnCuatro = false;
	validarBinarioTernario();
		StopMetronomo();
	 document.getElementById('playporDefecto').click(); 	
}
function compasTresOcho(){
	compas = 1;
	document.getElementById('innerCompas').innerHTML = '3 / 8';
	//circulos interactivos
	document.getElementById('circle1').style.display = 'Block';
	document.getElementById('circle2').style.display = 'none';
	document.getElementById('circle3').style.display = 'none';
	document.getElementById('circle4').style.display = 'none';
	document.getElementById('circle5').style.display = 'none';
	document.getElementById('circle6').style.display = 'none';
	document.getElementById('circle7').style.display = 'none';
	//	cerrar el menu
	cerrarMenuCompas('listaCompases');
	compasNegras = false;
	compasTresporOcho = true;
	compasseisporOcho = false;
	compasNueveOcho = false;
    compasDoceporOcho = false;
	compasUnCuatro = false;
	validarBinarioTernario();
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
	cerrarMenuCompas('listaCompases');
	compasNegras = false;
	compasTresporOcho = false;
	compasseisporOcho = true;
	compasNueveOcho = false;
    compasDoceporOcho = false;
	compasUnCuatro = false;
	validarBinarioTernario();
}
function compasNueveporOcho(){
	compas = 3;
	document.getElementById('innerCompas').innerHTML = '9 / 8';
	//circulos interactivos
	document.getElementById('circle1').style.display = 'Block';
	document.getElementById('circle2').style.display = 'Block';
	document.getElementById('circle3').style.display = 'Block';
	document.getElementById('circle4').style.display = 'none';
	document.getElementById('circle5').style.display = 'none';
	document.getElementById('circle6').style.display = 'none';
	document.getElementById('circle7').style.display = 'none';
	//	cerrar el menu
	cerrarMenuCompas('listaCompases');
	compasNegras = false;
	compasTresporOcho = false;
	compasseisporOcho = false;
	compasNueveOcho = true;
    compasDoceporOcho = false;
	compasUnCuatro = false;
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
	cerrarMenuCompas('listaCompases');
	compasNegras = false;
	compasTresporOcho = false;
	compasseisporOcho = false;
	compasNueveOcho = false;
    compasDoceporOcho = true;
	compasUnCuatro = false;
	validarBinarioTernario();
}
var dark = false;
var red = false
function cambiarTemaRed(){
	document.getElementById('Dark').style.display = 'none';
	document.getElementById('Red').style.display = 'block';
	var imgRed = document.getElementsByClassName('tabsImg2');
	 for (i = 0; i < imgRed.length; i++) {
            imgRed[i].style.display = "block";
        }
	var imgRed2 = document.getElementsByClassName('tabsImg');
	 for (i = 0; i < imgRed2.length; i++) {
            imgRed2[i].style.display = "none";
        }
	var brightness = document.getElementsByClassName('tabs');
	 for (i = 0; i < brightness.length; i++) {
            brightness[i].style.filter = "grayscale(0)";
        }	
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
	
	var imgRed = document.getElementsByClassName('tabsImg2');
	 for (i = 0; i < imgRed.length; i++) {
            imgRed[i].style.display = "none";
        }
	var imgRed2 = document.getElementsByClassName('tabsImg');
	 for (i = 0; i < imgRed2.length; i++) {
            imgRed2[i].style.display = "block";
        }
	var brightness = document.getElementsByClassName('tabs');
	 for (i = 0; i < brightness.length; i++) {
            brightness[i].style.filter = "grayscale(100%)";
        }
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
function cerrarMenuCompas(ventana){
	document.getElementById(ventana).style.width = '0%';
	document.getElementById(ventana).style.visibility = 'hidden';
	document.getElementById('ajustesLogo').style.transform = 'rotate(0deg)';
}
function abrirMenuCompas(ventana){
	document.getElementById(ventana).style.width = '70%';
	document.getElementById(ventana).style.visibility = 'visible';
	document.getElementById('ajustesLogo').style.transform = 'rotate(360deg)';
}
function abrirMenuMix(ventana){
	document.getElementById(ventana).style.visibility = 'visible';
	document.getElementById(ventana).style.opacity = '1';
	document.getElementById('ajustesLogo').style.transform = 'rotate(360deg)';
}
function CerrarMenuMix(ventana){
	//document.getElementById(ventana).style.width = '70%';
	document.getElementById(ventana).style.visibility = 'hidden';
	document.getElementById(ventana).style.opacity = '0';
	document.getElementById('ajustesLogo').style.transform = 'rotate(0deg)';
}

//botones tipo de onda active
function activebutton(evt){
	var i;
	var botonactive = document.getElementsByClassName('imgwave');
	for(i = 0; i < botonactive.length; i++){
		botonactive[i].className = botonactive[i].className.replace ( 'activeimgwave', '');
	}
	
		evt.currentTarget.className += ' activeimgwave';	
}

function activebutton2(evt){
	var i;
	var botonactive = document.getElementsByClassName('imgwave2');
	for(i = 0; i < botonactive.length; i++){
		botonactive[i].className = botonactive[i].className.replace ( 'activeimgwave2', '');
	}
	
		evt.currentTarget.className += ' activeimgwave2';	
}
function activebutton3(evt){
	var i;
	var botonactive = document.getElementsByClassName('imgwave3');
	for(i = 0; i < botonactive.length; i++){
		botonactive[i].className = botonactive[i].className.replace ( 'activeimgwave3', '');
	}
	
		evt.currentTarget.className += ' activeimgwave3';	
}
		document.getElementById('clickdefaul1').click();
		document.getElementById('clickdefaul2').click();
		document.getElementById('clickdefaul3').click();
		

$( document ).ready(function() {
    var config = {
		    apiKey: "AIzaSyAKdweiacwRtC4-IfvON-RASEc22UJ5D_g",
		    authDomain: "pedi-tu-almuerzo-c34ef.firebaseapp.com",
		    databaseURL: "https://pedi-tu-almuerzo-c34ef.firebaseio.com",
		    storageBucket: "pedi-tu-almuerzo-c34ef.appspot.com",
		    messagingSenderId: "848893801760"
		  };
		  firebase.initializeApp(config);
		  var secondaryApp = {
			apiKey: "AIzaSyAKdweiacwRtC4-IfvON-RASEc22UJ5D_g",
		  	authDomain: "pedi-tu-almuerzo-c34ef.firebaseapp.com",
		    databaseURL: "https://pedi-tu-almuerzo-c34ef.firebaseio.com",
		    storageBucket: "pedi-tu-almuerzo-c34ef.appspot.com",
		    messagingSenderId: "848893801760"
			};
			firebase.initializeApp(secondaryApp, "Secondary");	  
	var conexion =firebase.database().ref('/Pedidos');  
		conexion.on('child_added',function(snapshot){
			console.log("data: "+snapshot.val().fechaPedido);
		});
		var tertiaryApp = {
			apiKey: "AIzaSyAKdweiacwRtC4-IfvON-RASEc22UJ5D_g",
		  	authDomain: "pedi-tu-almuerzo-c34ef.firebaseapp.com",
		    databaseURL: "https://pedi-tu-almuerzo-c34ef.firebaseio.com",
		    storageBucket: "pedi-tu-almuerzo-c34ef.appspot.com",
		    messagingSenderId: "848893801760"
			};
			firebase.initializeApp(tertiaryApp, "Tertiary");
});
var numSema ='1';

	    $( "#btnSemana" ).click(function() {
	    	if (numSema == '3') {
	    		numSema = '1';
	    	}else if(numSema == '2'){
	    		numSema = '3';
	    	}else{
	    		numSema = '2';
	    	}
 			 document.getElementById('labelSemana').innerHTML = 'Semana '+ numSema;
		});

var tiempoComida="d";
$( "#btnDesayunoId" ).addClass( "botonColor" );
$('#btnDesayunoId').click(function(){
	tiempoComida = 'd';
	$( "#btnDesayunoId" ).addClass( "botonColor" );
	$( "#btnAlmuerzoId" ).removeClass( "botonColor" );
});
$('#btnAlmuerzoId').click(function(){
	tiempoComida = 'a';
	$( "#btnAlmuerzoId" ).addClass( "botonColor" );
	$( "#btnDesayunoId" ).removeClass( "botonColor" );
});


var cadenaDP="";
var cadenaDO="";
var cadenaAP="";
var cadenaAO="";

var itemComponente = new Object();
var componente = new Object();
var item = new Object();


function guardarPlatilloBD(numSemana, diaSemana, tiempoComida, ingredientes, precio, tipoPlato){
	
		  var rootref = firebase.database().ref("/platillos").push();
		  rootref.set({
		  		categoria:{
		  			nombreTiempoComida: tiempoComida,
		  		},
		  		dia:{
		  			nombreDia: diaSemana,
		  		},
		  		semana:{
		  			numeroSemana: numSemana,
		  		},
		  		items: ingredientes,
		  		opcional: tipoPlato,
		  		precioPlatillo:precio, 
				//numsemana: numSemana,
				//dia_semana: diaSemana,
				//tiempo_comida: tiempoComida,
				//ingredientes: ingredientes,
				//precio_pla: precio,
				//tipo_plato: tipoPlato
		});
}
var cadenaDPa="";
var cadenaDOa="";
var cadenaAPa="";
var cadenaAOa="";
var ingredientesAL= [];
var ingredientesDL= [];
var ingredientesALo= [];
var ingredientesDLo= [];
var contador = 0;
var contadora = 0; 
/*lunes*/
$('#btnl').click(function(){/*LLena el text area con la info ingresada*/
	if(tiempoComida == 'd'){
		cadenaDP += "- "+$('#ppl').val() +"\n ";
		cadenaDPa += $('#ppl').val()+". ";

		item =(ingredientesDL[parseInt(contador)] = (itemComponente = (componente.nombreComponentePlato = $('#ppl').val())));
		$('#ild').text( cadenaDP);
		contador ++;
	}else{
		cadenaAP += "- "+$('#ppl').val() +"\n ";
		cadenaAPa += $('#ppl').val()+". ";
		ingredientesAL[parseInt(contadora)] = (itemComponente =(componente.nombreComponentePlato = $('#ppl').val()));
		$('#ila').text( cadenaAP);
		contadora ++;
	}
	$('#ppl').val("");
});
$('#btnpl').click(function(){
	if(tiempoComida == 'd'){
		cadenaDP += " \t Precio: "+$('#pppl').val() +"\n ";
		$('#ild').text( cadenaDP);
		var preciovar = ''+$('#pppl').val();
		guardarPlatilloBD(numSema,'lunes', tiempoComida, item, preciovar, 'false');
		contador=0;
		ingredientesDL.length=0;
	}else{
		cadenaAP += "\t Precio:"+$('#pppl').val() +"\n ";
		$('#ila').text( cadenaAP);
		var preciovar = ''+$('#pppl').val();
		guardarPlatilloBD(numSema,'lunes', tiempoComida, ingredientesAL, preciovar, 'false');
		contadora=0;
		ingredientesAL.length=0;
	}
	$('#pppl').val("");
	cadenaDPa="";
	cadenaAPa="";
});
$('#btnpol').click(function(){
	if(tiempoComida == 'd'){
		cadenaDO += "- "+$('#pol').val() +"\n \tPrecio: "+ $('#ppol').val()+"\n";
		cadenaDOa = $('#pol').val()+" ";
		$('#iold').text( cadenaDO);
		var preciovar = ''+ $('#ppol').val();
		guardarPlatilloBD(numSema,'lunes', tiempoComida, cadenaDOa, preciovar, 'true');
	}else{	
		cadenaAO += "- "+$('#pol').val() +"\n \tPrecio: "+ $('#ppol').val()+"\n";
		cadenaAOa = $('#pol').val()+" ";
		$('#iola').text( cadenaAO);
		var preciovar = ''+ $('#ppol').val();
		guardarPlatilloBD(numSema,'lunes', tiempoComida, cadenaAOa, preciovar, 'true');

	}
	$('#pol').val("");
	$('#ppol').val("");
});

/*martes*/
var tiempoComidam="d";
$( "#btnDesayunoIdm" ).addClass( "botonColor" );
$('#btnDesayunoIdm').click(function(){
	tiempoComidam = 'd';
	$( "#btnDesayunoIdm" ).addClass( "botonColor" );
	$( "#btnAlmuerzoIdm" ).removeClass( "botonColor" );
});
$('#btnAlmuerzoIdm').click(function(){
	tiempoComidam = 'a';
	$( "#btnAlmuerzoIdm" ).addClass( "botonColor" );
	$( "#btnDesayunoIdm" ).removeClass( "botonColor" );
});
var cadenaDPm="";
var cadenaDOm="";
var cadenaAPm="";
var cadenaAOm="";
var cadenaDPam="";
var cadenaDOam="";
var cadenaAPam="";
var cadenaAOam="";
$('#btnm').click(function(){
	alert("entre");
	if(tiempoComidam == 'd'){
		cadenaDPm += "- "+$('#ppm').val() +"\n ";
		cadenaDPam += $('#ppm').val()+". ";
		$('#imd').text( cadenaDPm);
	}else{
		cadenaAPm += "- "+$('#ppm').val() +"\n ";
		cadenaAPam += $('#ppm').val()+". ";
		$('#ima').text( cadenaAPm);
	}
	$('#ppm').val("");
});
$('#btnpm').click(function(){
	if(tiempoComidam == 'd'){
		cadenaDPm += " \t Precio: "+$('#pppm').val() +"\n ";
		$('#imd').text( cadenaDPm);
		var preciovar = ''+$('#pppm').val();
		guardarPlatilloBD(numSema,'martes', tiempoComidam, cadenaDPam, preciovar, 'principal');
	}else{
		cadenaAPm += "\t Precio:"+$('#pppm').val() +"\n ";
		$('#ima').text( cadenaAPm);
		var preciovar = ''+$('#pppm').val();
		guardarPlatilloBD(numSema,'martes', tiempoComidam, cadenaAPam, preciovar, 'principal');
	}
	$('#pppm').val("");
	cadenaDPam="";
	cadenaAPam="";
});
$('#btnpom').click(function(){
	if(tiempoComidam == 'd'){
		cadenaDOm += "- "+$('#pom').val() +"\n \tPrecio: "+ $('#ppom').val()+"\n";
		cadenaDOam = $('#pom').val()+" ";
		$('#iomd').text( cadenaDOm);
		var preciovar = ''+ $('#ppom').val();
		guardarPlatilloBD(numSema,'martes', tiempoComidam, cadenaDOam, preciovar, 'opcional');
	}else{	
		cadenaAOm += "- "+$('#pom').val() +"\n \tPrecio: "+ $('#ppom').val()+"\n";
		cadenaAOam = $('#pom').val()+" ";
		$('#ioma').text( cadenaAOm);
		var preciovar = ''+ $('#ppom').val();
		guardarPlatilloBD(numSema,'martes', tiempoComidam, cadenaAOam, preciovar, 'opcional');
	}
	$('#pom').val("");
	$('#ppom').val("");
});

/*miercoles*/
var tiempoComidami="d";
	$( "#btnDesayunoIdmi" ).addClass( "botonColor" );
$('#btnDesayunoIdmi').click(function(){
	tiempoComidami = 'd';
	$( "#btnDesayunoIdmi" ).addClass( "botonColor" );
	$( "#btnAlmuerzoIdmi" ).removeClass( "botonColor" );
});
$('#btnAlmuerzoIdmi').click(function(){
	tiempoComidami = 'a';
	$( "#btnAlmuerzoIdmi" ).addClass( "botonColor" );
	$( "#btnDesayunoIdmi" ).removeClass( "botonColor" );
});
var cadenaDPmi="";
var cadenaDOmi="";
var cadenaAPmi="";
var cadenaAOmi="";
var cadenaDPami="";
var cadenaDOami="";
var cadenaAPami="";
var cadenaAOami="";
$('#btnmi').click(function(){
	alert("entre");
	if(tiempoComidami == 'd'){
		cadenaDPmi += "- "+$('#ppmi').val() +"\n ";
		cadenaDPami += $('#ppmi').val()+". ";
		$('#imid').text( cadenaDPmi);
	}else{
		cadenaAPmi += "- "+$('#ppmi').val() +"\n ";
		cadenaAPami += $('#ppmi').val()+". ";
		$('#imia').text( cadenaAPmi);
	}
	$('#ppmi').val("");
});
$('#btnpmi').click(function(){
	if(tiempoComidami == 'd'){
		cadenaDPmi += " \t Precio: "+$('#pppmi').val() +"\n ";
		$('#imid').text( cadenaDPmi);
		var preciovar = ''+$('#pppmi').val();
		guardarPlatilloBD(numSema,'miercoles', tiempoComidami, cadenaDPami, preciovar, 'principal');
	}else{
		cadenaAPmi += "\t Precio:"+$('#pppmi').val() +"\n ";
		$('#imia').text( cadenaAPmi);
		var preciovar = ''+$('#pppmi').val();
		guardarPlatilloBD(numSema,'miercoles', tiempoComidami, cadenaAPami, preciovar, 'principal');
	}
	$('#pppmi').val("");
	cadenaDPami="";
	cadenaAPami="";
});
$('#btnpomi').click(function(){
	if(tiempoComidami == 'd'){
		cadenaDOmi += "- "+$('#pomi').val() +"\n \tPrecio: "+ $('#ppomi').val()+"\n";
		cadenaDOami = $('#pomi').val()+". ";
		$('#iomid').text( cadenaDOmi);
		var preciovar = ''+ $('#ppomi').val();
		guardarPlatilloBD(numSema,'miercoles', tiempoComidami, cadenaDOami, preciovar, 'opcional');
	}else{	
		cadenaAOmi += "- "+$('#pomi').val() +"\n \tPrecio: "+ $('#ppomi').val()+"\n";
		cadenaAOami = $('#pomi').val()+". ";
		$('#iomia').text( cadenaAOmi);
		var preciovar = ''+ $('#ppomi').val();
		guardarPlatilloBD(numSema,'miercoles', tiempoComidami, cadenaAOami, preciovar, 'opcional');
	}
	$('#pomi').val("");
	$('#ppomi').val("");
});

/*jueves*/
var tiempoComidaj="d";
$( "#btnDesayunoIdj" ).addClass( "botonColor" );
$('#btnDesayunoIdj').click(function(){
	tiempoComidaj = 'd';
	$( "#btnDesayunoIdj" ).addClass( "botonColor" );
	$( "#btnAlmuerzoIdj" ).removeClass( "botonColor" );
});
$('#btnAlmuerzoIdj').click(function(){
	tiempoComidaj = 'a';
	$( "#btnAlmuerzoIdj" ).addClass( "botonColor" );
	$( "#btnDesayunoIdj" ).removeClass( "botonColor" );
});
var cadenaDPj="";
var cadenaDOj="";
var cadenaAPj="";
var cadenaAOj="";
var cadenaDPaj="";
var cadenaDOaj="";
var cadenaAPaj="";
var cadenaAOaj="";
$('#btnj').click(function(){
	alert("entre");
	if(tiempoComidaj == 'd'){
		cadenaDPj += "- "+$('#ppj').val() +"\n ";
		cadenaDPaj += $('#ppj').val()+". ";
		$('#ijd').text( cadenaDPj);
	}else{
		cadenaAPj += "- "+$('#ppj').val() +"\n ";
		cadenaAPaj += $('#ppj').val()+". ";
		$('#ija').text( cadenaAPj);
	}
	$('#ppj').val("");
});
$('#btnpj').click(function(){
	if(tiempoComidaj == 'd'){
		cadenaDPj += " \t Precio: "+$('#pppj').val() +"\n ";
		$('#ijd').text( cadenaDPj);
		var preciovar = ''+$('#pppj').val();
		guardarPlatilloBD(numSema,'jueves', tiempoComidaj, cadenaDPaj, preciovar, 'principal');
	}else{
		cadenaAPj += "\t Precio:"+$('#pppj').val() +"\n ";
		$('#ija').text( cadenaAPj);
		var preciovar = ''+$('#pppj').val();
		guardarPlatilloBD(numSema,'jueves', tiempoComidaj, cadenaAPaj, preciovar, 'principal');
	}
	$('#pppj').val("");
	cadenaDPaj="";
	cadenaAPaj="";
});
$('#btnpoj').click(function(){
	if(tiempoComidaj == 'd'){
		cadenaDOj += "- "+$('#poj').val() +"\n \tPrecio: "+ $('#ppoj').val()+"\n";
		cadenaDOaj = $('#poj').val()+" ";
		$('#iojd').text( cadenaDOj);
		var preciovar = ''+ $('#ppoj').val();
		guardarPlatilloBD(numSema,'jueves', tiempoComidaj, cadenaDOaj, preciovar, 'opcional');
	}else{	
		cadenaAOj += "- "+$('#poj').val() +"\n \tPrecio: "+ $('#ppoj').val()+"\n";
		cadenaAOaj = $('#poj').val()+" ";
		$('#ioja').text( cadenaAOj);
		var preciovar = ''+ $('#ppoj').val();
		guardarPlatilloBD(numSema,'jueves', tiempoComidaj, cadenaAOaj, preciovar, 'opcional');
	}
	$('#poj').val("");
	$('#ppoj').val("");

});

/*viernes*/
var tiempoComidav="d";
	$( "#btnDesayunoIdv" ).addClass( "botonColor" );
$('#btnDesayunoIdv').click(function(){
	tiempoComidav = 'd';
	$( "#btnDesayunoIdv" ).addClass( "botonColor" );
	$( "#btnAlmuerzoIdv" ).removeClass( "botonColor" );
});
$('#btnAlmuerzoIdv').click(function(){
	tiempoComidav = 'a';
	$( "#btnAlmuerzoIdv" ).addClass( "botonColor" );
	$( "#btnDesayunoIdv" ).removeClass( "botonColor" );
});
var cadenaDPv="";
var cadenaDOv="";
var cadenaAPv="";
var cadenaAOv="";
var cadenaDPav="";
var cadenaDOav="";
var cadenaAPav="";
var cadenaAOav="";
$('#btnv').click(function(){
	alert("entre");
	if(tiempoComidav == 'd'){
		cadenaDPv += "- "+$('#ppv').val() +"\n ";
		cadenaDPav += $('#ppv').val()+". ";
		$('#ivd').text( cadenaDPv);
	}else{
		cadenaAPv += "- "+$('#ppv').val() +"\n ";
		cadenaAPav += $('#ppv').val()+". ";
		$('#iva').text( cadenaAPv);
	}
	$('#ppv').val("");
});
$('#btnpv').click(function(){
	if(tiempoComidav == 'd'){
		cadenaDPv += " \t Precio: "+$('#pppv').val() +"\n ";
		$('#ivd').text( cadenaDPv);
		var preciovar = ''+$('#pppv').val();
		guardarPlatilloBD(numSema,'viernes', tiempoComidav, cadenaDPav, preciovar, 'principal');
	}else{
		cadenaAPv += "\t Precio:"+$('#pppv').val() +"\n ";
		$('#iva').text( cadenaAPv);
		var preciovar = ''+$('#pppv').val();
		guardarPlatilloBD(numSema,'viernes', tiempoComidav, cadenaAPav, preciovar, 'principal');
	}
	$('#pppv').val("");
	cadenaDPav="";
	cadenaAPav="";
});
$('#btnpov').click(function(){
	if(tiempoComidav == 'd'){
		cadenaDOv += "- "+$('#pov').val() +"\n \tPrecio: "+ $('#ppov').val()+"\n";
		cadenaDOav = $('#pov').val()+". ";
		$('#iovd').text( cadenaDOv);
		var preciovar = ''+ $('#ppov').val();
		guardarPlatilloBD(numSema,'viernes', tiempoComidav, cadenaDOav, preciovar, 'opcional');
	}else{	
		cadenaAOv += "- "+$('#pov').val() +"\n \tPrecio: "+ $('#ppov').val()+"\n";
		cadenaAOav = $('#pov').val()+". ";
		$('#iova').text( cadenaAOv);
		var preciovar = ''+ $('#ppov').val();
		guardarPlatilloBD(numSema,'viernes', tiempoComidav, cadenaAOav, preciovar, 'opcional');
	}
	$('#pov').val("");
	$('#ppov').val("");
});



/*sabado*/
var tiempoComidas="d";
$( "#btnDesayunoIds" ).addClass( "botonColor" );
$('#btnDesayunoIds').click(function(){
	tiempoComidas = 'd';
	$( "#btnDesayunoIds" ).addClass( "botonColor" );
	$( "#btnAlmuerzoIds" ).removeClass( "botonColor" );
});
$('#btnAlmuerzoIds').click(function(){
	tiempoComidas = 'a';
	$( "#btnAlmuerzoIds" ).addClass( "botonColor" );
	$( "#btnDesayunoIds" ).removeClass( "botonColor" );
});
var cadenaDPs="";
var cadenaDOs="";
var cadenaAPs="";
var cadenaAOs="";
var cadenaDPas="";
var cadenaDOas="";
var cadenaAPas="";
var cadenaAOas="";
$('#btns').click(function(){
	if(tiempoComidas == 'd'){
		cadenaDPs += "- "+$('#pps').val() +"\n ";
		cadenaDPas += $('#pps').val()+". ";
		$('#isd').text( cadenaDPs);
	}else{
		cadenaAPs += "- "+$('#pps').val() +"\n ";
		cadenaAPas += $('#pps').val()+". ";
		$('#isa').text( cadenaAPs);
	}
	$('#pps').val("");
});
$('#btnps').click(function(){
	if(tiempoComidas == 'd'){
		cadenaDPs += " \t Precio: "+$('#ppps').val() +"\n ";
		$('#isd').text( cadenaDPs);
		var preciovar = ''+$('#ppps').val();
		guardarPlatilloBD(numSema,'sabado', tiempoComidas, cadenaDPas, preciovar, 'principal');
	}else{
		cadenaAPs += "\t Precio:"+$('#ppps').val() +"\n ";
		$('#isa').text( cadenaAPs);
		var preciovar = ''+$('#ppps').val();
		guardarPlatilloBD(numSema,'sabado', tiempoComidas, cadenaAPas, preciovar, 'principal');
	}
	$('#ppps').val("");
	cadenaDPas="";
	cadenaAPas="";
});
$('#btnpos').click(function(){
	if(tiempoComidas == 'd'){
		cadenaDOs += "- "+$('#pos').val() +"\n \tPrecio: "+ $('#ppos').val()+"\n";
		cadenaDOas = $('#pos').val()+". ";
		$('#iosd').text( cadenaDOs);
		var preciovar = ''+ $('#ppos').val();
		guardarPlatilloBD(numSema,'sabado', tiempoComidas, cadenaDOas, preciovar, 'opcional');
	}else{	
		cadenaAOs += "- "+$('#pos').val() +"\n \tPrecio: "+ $('#ppos').val()+"\n";
		cadenaAOas = $('#pos').val()+". ";
		$('#iosa').text( cadenaAOs);
		var preciovar = ''+ $('#ppos').val();
		guardarPlatilloBD(numSema,'sabado', tiempoComidas, cadenaAOas, preciovar, 'opcional');
	}
	$('#pos').val("");
	$('#ppos').val("");
});

/*------------------------------------------- manejo de  pedidos -------------------------------*/
$('#lunespantalla').click(function(){
	localStorage.setItem("day", "lunes");
	
});
$('#martespantalla').click(function(){
	localStorage.setItem("day", "martes");
	
});
$('#miercolespantalla').click(function(){
	localStorage.setItem("day", "miercoles");
	
});
$('#juevespantalla').click(function(){
	localStorage.setItem("day", "jueves");
	
});
$('#viernespantalla').click(function(){
	localStorage.setItem("day", "viernes");
	
});
$('#sabadopantalla').click(function(){
	localStorage.setItem("day", "sabado");
	
});
/*------------------------------ manejo contador de  pedidos ---------------------------------------*/
setInterval(function calculapedidos(){
	$('#pedidosla').text("0");
	$('#pedidosld').text("0");
	$('#pedidosmd').text("0");
	$('#pedidosma').text("0");
	$('#pedidosmid').text("0");
	$('#pedidosmia').text("0");
	$('#pedidosjd').text("0");
	$('#pedidosja').text("0");
	$('#pedidosva').text("0");
	$('#pedidosvd').text("0");
	$('#pedidossa').text("0");
	$('#pedidossd').text("0");
	var contadorAlmuerzo=0;
	var contadorDesayuno=0;

	var conexion =firebase.database().ref('/Pedidos');  
		conexion.on('child_added',function(snapshot){

		var keyplate = "";
		var cuenta;
		//var cuenta2;
		snapshot.val().items.forEach(function(item){
			keyplate = item.plato.idPlato;
			cuenta =item.cantidad;

		var rootref = firebase.database().ref("/Platos");
		 	rootref.on('child_added',function(snapshotData){
		 			
		 		if(snapshotData.key == keyplate){

		 			if(snapshotData.val().tiempoDeComida.nombreTiempoDeComida == "Almuerzo" && snapshotData.val().dia.nombreDia == "lunes"){
		 				contadorAlmuerzo += parseInt(cuenta);
		 				$('#pedidosla').text(contadorAlmuerzo+"");
		 			}else if(snapshotData.val().tiempoDeComida.nombreTiempoDeComida == "Desayuno" && snapshotData.val().dia.nombreDia == "lunes"){
		 				contadorDesayuno += parseInt(cuenta);
		 				$('#pedidosld').text(contadorDesayuno+"");
		 			}else if(snapshotData.val().tiempoDeComida.nombreTiempoDeComida == "Desayuno" && snapshotData.val().dia.nombreDia == "martes"){
		 				contadorDesayuno += parseInt(cuenta);
		 				$('#pedidosmd').text(contadorDesayuno+"");
		 			}else if(snapshotData.val().tiempoDeComida.nombreTiempoDeComida == "Almuerzo" && snapshotData.val().dia.nombreDia == "martes"){
		 				contadorAlmuerzo += parseInt(cuenta);
		 				$('#pedidosma').text(contadorAlmuerzo+"");
		 			}else if(snapshotData.val().tiempoDeComida.nombreTiempoDeComida == "Desayuno" && snapshotData.val().dia.nombreDia == "miercoles"){
		 				contadorDesayuno += parseInt(cuenta);
		 				$('#pedidosmid').text(contadorDesayuno+"");
		 			}else if(snapshotData.val().tiempoDeComida.nombreTiempoDeComida == "Almuerzo" && snapshotData.val().dia.nombreDia == "miercoles"){
		 				contadorAlmuerzo += parseInt(cuenta);
		 				$('#pedidosmia').text(contadorAlmuerzo+"");
		 			}else if(snapshotData.val().tiempoDeComida.nombreTiempoDeComida == "Desayuno" && snapshotData.val().dia.nombreDia == "jueves"){
		 				contadorDesayuno += parseInt(cuenta);
		 				$('#pedidosjd').text(contadorDesayuno+"");
		 			}else if(snapshotData.val().tiempoDeComida.nombreTiempoDeComida == "Almuerzo" && snapshotData.val().dia.nombreDia == "jueves"){
		 				contadorAlmuerzo += parseInt(cuenta);
		 				$('#pedidosja').text(contadorAlmuerzo+"");
		 			}else if(snapshotData.val().tiempoDeComida.nombreTiempoDeComida == "Desayuno" && snapshotData.val().dia.nombreDia == "viernes"){
		 				contadorDesayuno += parseInt(cuenta);
		 				$('#pedidosvd').text(contadorDesayuno+"");
		 			}else if(snapshotData.val().tiempoDeComida.nombreTiempoDeComida == "Almuerzo" && snapshotData.val().dia.nombreDia == "viernes"){
		 				contadorAlmuerzo += parseInt(cuenta);
		 				$('#pedidosva').text(contadorAlmuerzo+"");
		 			}else if(snapshotData.val().tiempoDeComida.nombreTiempoDeComida == "Desayuno" && snapshotData.val().dia.nombreDia == "sabado"){
		 				contadorDesayuno += parseInt(cuenta);
		 				$('#pedidossd').text(contadorDesayuno+"");
		 			}else{
		 				contadorAlmuerzo += parseInt(cuenta);
		 				$('#pedidossa').text(contadorAlmuerzo+"");
		 			}
		 		}
		 	});
			
		});
	});
},3000);
/*----------------------------------------manejo tabla de pedidos--------------------------------------------------------*/
setInterval(function manejoAlmuerzo(){
	$("#tablepedidos td").remove();
	var n;
	var conexion =firebase.database().ref('/Pedidos');  
		conexion.on('child_added',function(snapshot){
		var keyplate = "";
		var cantidadPla;
		var comenta = "";

			snapshot.val().items.forEach(function(item){
					keyplate = item.plato.idPlato;
					cantidadPla = item.cantidad;
					comenta = item.comentarios;
				var terConexion = firebase.database().ref("/UsuarioServicio");
			 	terConexion.on('child_added',function(snapshotDataT){
			 		if(snapshot.val().usuario.idUsuario == snapshotDataT.key){
			 			n= snapshotDataT.val().nombreUsuario +" "+snapshotDataT.val().primerApellido+" "+snapshotDataT.val().segundoApellido;
			 		}
			 	});
			
				var rootref = firebase.database().ref("/Platos");
			 	rootref.on('child_added',function(snapshotData){
			 		var tipoCo = "";
			 		

			 		if(snapshotData.key == keyplate && snapshotData.val().dia.nombreDia == localStorage.getItem("day") && snapshotData.val().tiempoDeComida.nombreTiempoDeComida == "Almuerzo"){

							var table = document.getElementById("tablepedidos"),
				            row = table.insertRow(-1),//-1 es para ponerlo al final
				            cell1 = row.insertCell(0),
				            cell2 = row.insertCell(1),
				            cell3 = row.insertCell(2),
				            cell4 = row.insertCell(3),
				            cell5 = row.insertCell(4),
				            cell6 = row.insertCell(5);

				           user = n, 
				           almuerzo= cantidadPla,
				           total=  parseInt(snapshotData.val().precioPlato)*  parseInt(cantidadPla),
				           tipoPlatillo = snapshotData.val().opcional,
				           comentarios = comenta,
				           estado= snapshot.val().estado;
				           cell1.innerHTML =user;
				           cell2.innerHTML = tipoPlatillo;
				           cell3.innerHTML = almuerzo;
				           cell4.innerHTML = total;
				           cell5.innerHTML = comentarios;
				           cell6.innerHTML = estado;

			 		}
			 	});
			
		});
	});

		
},3000);  	
$('#pedidosla').click(function(){
	var n="";
	$('#mymodal').modal('show');
});
$('#closemodal').click(function(){
	$("#tablepedidos td").remove();
});
$('#closemodal1').click(function(){
	$("#tablepedidos td").remove();
});

setInterval(function manejoDesayuno(){
	$("#tablepedidos2 td").remove();
	var n;
	almuerzoAbieto=0;
	var conexion =firebase.database().ref('/Pedidos');  
		conexion.on('child_added',function(snapshot){
		var keyplate = "";
		var cantidadPla;
		var comenta = "";
		var percioPla;
			snapshot.val().items.forEach(function(item){
					keyplate = item.plato.idPlato;
					cantidadPla = item.cantidad;
					comenta = item.comentarios;

			var terConexion = firebase.database().ref("/UsuarioServicio");
		 	terConexion.on('child_added',function(snapshotDataT){
		 		if(snapshot.val().usuario.idUsuario == snapshotDataT.key){
		 			n= snapshotDataT.val().nombreUsuario +" "+snapshotDataT.val().primerApellido+" "+snapshotDataT.val().segundoApellido;
		 		}
		 	});
		
		var rootref = firebase.database().ref("/Platos");
		 	rootref.on('child_added',function(snapshotData){

		 		if(snapshotData.key == keyplate && snapshotData.val().dia.nombreDia == localStorage.getItem("day") && snapshotData.val().tiempoDeComida.nombreTiempoDeComida == "Desayuno"){
						var table = document.getElementById("tablepedidos2"),
			            row = table.insertRow(-1),//-1 es para ponerlo al final
			            cell1 = row.insertCell(0),
			            cell2 = row.insertCell(1),
			            cell3 = row.insertCell(2),
			            cell4 = row.insertCell(3),
				        cell5 = row.insertCell(4),
				        cell6 = row.insertCell(5);

			           user = n, 
			           almuerzo= cantidadPla,
			           total=  parseInt(snapshotData.val().precio_pla)*  parseInt(cantidadPla),
			           tipoPlatillo = snapshotData.val().opcional,
				       comentarios = comenta,
			           estado= snapshot.val().estado;
			           cell1.innerHTML =user;
			           cell2.innerHTML = tipoPlatillo;
			           cell3.innerHTML = almuerzo;
			           cell4.innerHTML = total;
			           cell5.innerHTML = comentarios;
			           cell6.innerHTML = estado;
		 		}
		 	});
		 	});
			
		});
},3000); 
$('#pedidosld').click(function(){
	$('#mymodal2').modal('show');
});

$('#closemodal').click(function(){
	$("#tablepedidos td").remove();
});
$('#closemodal1').click(function(){
	$("#tablepedidos td").remove();
});

$('#pedidosma').click(function(){
	$('#mymodal').modal('show');
});
$('#pedidosmd').click(function(){
	$('#mymodal2').modal('show');
});
$('#pedidosmia').click(function(){
	$('#mymodal').modal('show');
});
$('#pedidosmid').click(function(){
	$('#mymodal2').modal('show');
});
$('#pedidosja').click(function(){
	$('#mymodal').modal('show');
});
$('#pedidosjd').click(function(){
	$('#mymodal2').modal('show');
});
$('#pedidosva').click(function(){
	$('#mymodal').modal('show');
});
$('#pedidosvd').click(function(){
	$('#mymodal2').modal('show');
});
$('#pedidossa').click(function(){
	$('#mymodal').modal('show');
});
$('#pedidossd').click(function(){
	$('#mymodal2').modal('show');
});


$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});
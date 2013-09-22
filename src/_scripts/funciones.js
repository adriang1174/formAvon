function enviarForm() {
	//$('#formInscripcion').submit();
	
		$.post("form.php", {
				nombres:		$("#nombres").val(),
				apellido:		$("#apellido").val(),
				dia:			$("#dia").val(),
				mes:			$("#mes").val(),
				ano:			$("#ano").val(),
				tipoDoc:		$("#tipoDoc").val(),				
				numeroDoc:		$("#numeroDoc").val(),
				calle:			$("#calle").val(),
				ciudad:			$("#ciudad").val(),
				partido:		$("#partido").val(),
				localidad:		$("#localidad").val(),	
				tel:			$("#tel").val(),
				email:			$("#email").val(),	
				revendedora:	$('input:radio:checked').val(),
				numeroCuenta:	$("#numeroCuenta").val()
	}, function(data) {
		if (data!="ERR") {
			jAlert('<strong>La inscripción se realizó exitosamente.</strong>', 'Atención');			
			limpiar();
		} else {
			jAlert('Ha ocurrido un error al enviar el Formulario. \nIntente en otro momento. Disculpe las molestias', 'Error');			
		}
	})
}

function limpiar()
{
			$("#nombres").val('');
			$("#apellido").val('');
			$("#dia").val('');
			$("#mes").val('');
			$("#ano").val('');
			$("#numeroDoc").val('');
			$("#calle").val('');
			$("#ciudad").val('');
			$("#partido").val('');
			$("#localidad").val('');	
			$("#tel").val('');
			$("#email").val('');	
			$(':radio').prop('checked', false);
			$("#numeroCuenta").val('');		
			$("#aceptaTerminos").prop('checked', false);																								
}
function isDate(dtDay,dtMonth,dtYear)
{
  if (dtMonth < 1 || dtMonth > 12)
      return false;
  else if (dtDay < 1 || dtDay> 31)
      return false;
  else if ((dtMonth==4 || dtMonth==6 || dtMonth==9 || dtMonth==11) && dtDay ==31)
      return false;
  else if (dtMonth == 2)
  {
     var isleap = (dtYear % 4 == 0 && (dtYear % 100 != 0 || dtYear % 400 == 0));
     if (dtDay> 29 || (dtDay ==29 && !isleap))
          return false;
  }
  return true;
}

$(document).ready(function () {
	$('a.legales').colorbox();
	//acciones formulario Inscripcion;
	$("#botonEnviar").click(function(){
					var errtxt = "";
					
					if(!isDate($("#dia").val(),$("#mes").val(),$("#ano").val()))
					{
						errtxt += 'La fecha de nacimiento es inválida.\n';
					}

					if(	$("#nombres").val() == '')
					{
						errtxt += 'Debe ingresar Nombres.\n';
					}
					if ($("#apellido").val() == '')
					{
						errtxt += 'Debe ingresar Apellido.\n';
					}
					if($("#tel").val() == '')
					{
						errtxt += 'Debe ingresar Telefono.\n';
					}
					if($("#numeroDoc").val() == '')
					{
						errtxt += 'Debe ingresar número de documento.\n';
					}
					if($("#email").val() == '')
					{
						errtxt += 'Debe ingresar Email.\n';
					}
					if($("#calle").val() == '')
					{
						errtxt += 'Debe ingresar Calle y Nro.\n';
					}
					if($("#ciudad").val() == '')
					{
						errtxt += 'Debe ingresar Ciudad.\n';
					}

					if($("#localidad").val() == '')
					{
						errtxt += 'Debe ingresar Localidad.\n';
					}
					if($("#partido").val() == '')
					{
						errtxt += 'Debe ingresar Partido.\n';
					}
					//jAlert($('input:radio:checked').length, "Atención");
					//jAlert($('input:radio:checked').val(), "Atención");
					if($('input:radio:checked').length == 0)
					{
						errtxt += 'Debe indicar si es revendedora.\n';
					}					
					if($('input:radio:checked').val() == 'Si')
					{   
						if($("#numeroCuenta").val() == '')
							errtxt += 'Si es revendedora, debe ingresar número de cuenta corriente.\n';
					}
					if(!$("#aceptaTerminos").is(':checked'))
					{
						errtxt += 'Debe aceptar términos y condiciones.\n';
					}					
					if (errtxt != '')
					{
						jAlert("<strong>"+errtxt+"</strong>", "Atención");
					}
					else{
							enviarForm();
					}
	});
	//Limpiar todos los campos
	$("#botonLimpiar").click(function(){
		limpiar();
		});
});
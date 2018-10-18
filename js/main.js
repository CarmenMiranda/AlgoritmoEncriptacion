/*PRUEBA
    Carmen Liliana Miranda Gonzalez
    D4P♥F2-7H7H424-♥HP42C4-602Y47FY
 */

var mensajeEncriptar="";
var mensajeDesencriptar= "";

var abcComun=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z', ' '];
var abcEncrip=['4','8','D', 'C', 'F', 'E', '6', 'I', 'H', 'K', 'J', '7', '♥', '2', '~', '0', '9', 'Ø', 'P', '5', '1', '^', 'B', '3', 'O', 'Z', 'Y', '-'];

function encriptar(){
    mensajeEncriptar= document.getElementById("mensaje-encriptar").value.toUpperCase();
    if(mensajeEncriptar!=""){
        if(validarMensajeEncriptar()==false){
            var encriptacion="";
            var mensArray= mensajeEncriptar.split("");
    
            for(i=0; i< mensArray.length;i++){
                var encontrada=false;
                for(x=0; x<abcComun.length && encontrada==false ; x++){
                    if(mensArray[i].charCodeAt(0)==10){
                        encriptacion+="\n";
                        encontrada=true;
                    }else{
                        if(mensArray[i]==abcComun[x]){
                            encontrada=true;
                            encriptacion+=abcEncrip[x];
                        }
                    }
                }
            }
            document.getElementById("trad-encriptada").innerHTML=encriptacion;
        }else{
            alert("Solamente se aceptan letras de la A a la Z, espacios y saltos de línea.");
            document.getElementById("mensaje-encriptar").focus();
        }

    }else{
        alert("No se ha escrito un mensaje para encriptar");
        document.getElementById("mensaje-encriptar").focus();
    }
}


function validarMensajeEncriptar(){
    reemplazarVocalesAcentuadas();
    var mensSinEspacios = quitarEspacios(mensajeEncriptar);
    var mensArray= mensSinEspacios.split("");

    var encontrada=false;
    for(i=0; i< mensArray.length && encontrada==false;i++){
        re= new RegExp("[A-Z\n]");
        var match=mensArray[i].match(re);
        if(match==null)
            encontrada=true;
    }  
    return encontrada;
}

function reemplazarVocalesAcentuadas(){
    mensajeEncriptar= mensajeEncriptar.replace('Á','A');
    mensajeEncriptar= mensajeEncriptar.replace('É','E');
    mensajeEncriptar= mensajeEncriptar.replace('Í','I');
    mensajeEncriptar= mensajeEncriptar.replace('Ó','O');
    mensajeEncriptar= mensajeEncriptar.replace('Ú','U');
}

function quitarEspacios(mensaje){
    var mensajeSinEspacios=mensaje;
    for(i=0;i<mensaje.length;i++)
        mensajeSinEspacios= mensajeSinEspacios.replace(" ","");
    return mensajeSinEspacios;
}


function desencriptar(){
    mensajeDesencriptar= document.getElementById("mensaje-desencriptar").value.toUpperCase();
    if(mensajeDesencriptar!=""){
        if(validarMensajeDesencriptar()==false){
            var desencriptacion="";
            var mensArray= mensajeDesencriptar.split("");
    
            for(i=0; i< mensArray.length;i++){
                var encontrada=false;
                for(x=0; x<abcEncrip.length && encontrada==false ; x++){
                    if(mensArray[i].charCodeAt(0)==10){
                        desencriptacion+="\n";
                        encontrada=true;
                    }else{
                        if(mensArray[i]==abcEncrip[x]){
                            encontrada=true;
                            desencriptacion+=abcComun[x];
                        }
                    }
                }
            }
            document.getElementById("trad-desencriptada").innerHTML=desencriptacion;
        }else{
            alert("No se permiten espacios. Solamente los siguientes caractéres: \n '4','8','D', 'C', 'F', 'E', '6', 'I', 'H', 'K', 'J', '7', '♥', '2', '~', '0', '9', 'Ø', 'P', '5', '1', '^', 'B', '3', 'O', 'Z', 'Y', '-' y saltos de línea.");
            document.getElementById("mensaje-desencriptar").focus();
        }
    }else{
        alert("No se ha escrito un mensaje para desencriptar");
        document.getElementById("mensaje-desencriptar").focus();
    }
}

function validarMensajeDesencriptar(){
    var mensArray= mensajeDesencriptar.split("");

    var encontrada=false;
    for(i=0; i< mensArray.length && encontrada==false;i++){
        re= new RegExp("[0-9B-FH-KO-PYZ\n\♥\~\Ø\^\-]");
        var match=mensArray[i].match(re);
        if(match==null)
            encontrada=true;
    }  
    return encontrada;
}
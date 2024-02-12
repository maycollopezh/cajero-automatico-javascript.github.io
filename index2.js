//INICIO DE SESION

function inicioDeSesion(){
    let usuario = document.getElementById("usuario").value;
    let correo_electronico = document.getElementById("correo_electronico").value;
    let contraseña = document.getElementById("contraseña").value;

    if (usuario === "Maycol Lopez" || usuario === "Juan" && correo_electronico === "maycolnlh@gmail.com" || correo_electronico === "juan@gmail.com" && contraseña === "123456"){
        
        document.getElementById("inicio_de_sesion").style.display = "none";

        document.getElementById("cuenta").style.display = "block";

        document.getElementById("nombre_usuario").innerText = `Bienvenido/a ${usuario}`

    } else {
        alert("credenciales incorrectas");
    }

}


//SALDO ACTUAL

let saldoActual = 1000

//DEPOSITAR

function depositar(){
    let monto_depositar = parseFloat (document.getElementById("cantidad_depositar").value);

    if (monto_depositar <= 0 || isNaN (monto_depositar)){
        alert ("Ingrese una cantidad valida.");
        return;
    }
    

saldoActual += monto_depositar   
consultarSaldo()
document.getElementById("cantidad_depositar").value = "";
}

//RETIRAR

function retirar() {
    let monto_retirar = parseFloat (document.getElementById("cantidad_retirar").value);

    if (monto_retirar > saldoActual) {
        alert ("No dispone de esta cantidad para poder realizar el retiro correspondiente.")
    }

    if (isNaN(monto_retirar) || monto_retirar <= 0) {
        alert ("Ingrese una cantidad valida.")
        return;
    }

alertarSaldoBajo();    
saldoActual -= monto_retirar    
consultarSaldo()
document.getElementById("cantidad_retirar").value = "";
}

function consultarSaldo () {
    document.getElementById("saldo_disponible").innerHTML = `<strong>Tu saldo actual es de: </strong> Bs ${saldoActual}`
}

//SALIR

function salir () {
    document.getElementById("inicio_de_sesion").style.display = "block";

    document.getElementById("cuenta").style.display = "none";

    document.getElementById("usuario").value = "";

    document.getElementById("correo_electronico").value = "";
    
    document.getElementById("contraseña").value = "";

    document.getElementById("saldo_disponible").innerText = "";
}


function alertarSaldoBajo() {
    if (saldoActual < 50) {
        alert("Tu saldo es bajo. Asegúrate de depositar para evitar quedarte sin dinero.");
    }
}
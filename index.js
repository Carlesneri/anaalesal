function displayVideo(){
    const pista1Element = document.getElementById("pista1")
    const anchorElement = document.getElementById("anchor")
    anchorElement.style.display = 'none'
    pista1Element.classList.add("show")
}

function validatePista1(){
    let inputPista1Element = document.getElementById("inputPista1").value
    if(inputPista1Element !== 'contraseña1'){
        const errorMessageElement = document.getElementById("errorMessage")
        errorMessageElement.classList.add("show")
        inputPista1Element = ''
    }
}
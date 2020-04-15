function displayVideo(){
    const pista1Element = document.getElementById("pista1")
    const anchorElement = document.getElementById("anchor")
    anchorElement.classList.remove('show')
    anchorElement.classList.add('hide')
    pista1Element.classList.remove("hide")
    pista1Element.classList.add("show")
}

function validatePista1(){
    let pista1Element = document.getElementById("pista1")
    let inputPista1Element = document.getElementById("inputPista1")
    if(inputPista1Element.value.toLowerCase() !== 'te'){
        const errorMessageElement = document.getElementById("errorMessage1")
        errorMessageElement.classList.add("show")
        inputPista1Element.value = ''
    }else{
        let pistasElements = document.querySelectorAll('.pista')
        pistasElements.forEach(el => {
            el.classList.remove('show')
            if(!el.classList.contains('hide')) el.classList.add('hide')
        })
        pista1Element.style.display = 'none'
        const pista2Element = document.getElementById("pista2")
        pista2Element.classList.remove('hide')
        pista2Element.classList.add('show')
    }
}
function validatePista2(){
    let pista2Element = document.getElementById("pista1")

    let inputPista2Element = document.getElementById("inputPista2")
    if(inputPista2Element.value.toLowerCase() !== 'queremos'){
        const errorMessageElement = document.getElementById("errorMessage2")
        errorMessageElement.classList.add("show")
        inputPista2Element.value = ''
    }else{
        let pistasElements = document.querySelectorAll('.pista')
        pistasElements.forEach(el => {
            el.classList.remove('show')
            if(!el.classList.contains('hide')) el.classList.add('hide')
        })

        pista2Element.style.display = 'none'

        const pista3Element = document.getElementById("pista3")
        pista3Element.classList.remove('hide')
        pista3Element.classList.add('show')
    }
}

function validatePista3(){
    let pista3Element = document.getElementById("pista1")
    let inputPista3Element = document.getElementById("inputPista3")
    if(inputPista3Element.value.toLowerCase() !== 'muchisimo'){
        const errorMessageElement = document.getElementById("errorMessage3")
        errorMessageElement.classList.add("show")
        inputPista3Element.value = ''
    }else{
        const resolvedElement = document.getElementById("resolved")
        resolvedElement.innerHTML += "<h2>Lo Lograste</h2>"
        let pistasElements = document.querySelectorAll('.pista')
        pistasElements.forEach(el => {
            el.classList.remove('show')
            if(!el.classList.contains('hide')) el.classList.add('hide')
        })

        pista3Element.style.display = 'none'

        const finalVideoElement = document.getElementById("finalVideo")
        finalVideoElement.classList.remove('hide')
        finalVideoElement.classList.add('show')
    }
}
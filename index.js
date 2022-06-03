let url = "https://significado.herokuapp.com/v2/"

let inputText = window.document.querySelector("#container_input_text")
let btnText = window.document.querySelector("#container_btn")
let result = window.document.querySelector("#container_result")

btnText.addEventListener("click", () => {
    let palavra = inputText.value 

    if (palavra === "") {
       result.innerHTML = '<p id="container_significado">Preencha o campo para <span>Pesquisa</span> desejada!</p>'
    } else {
        fetch(`${url}${palavra}`)

        .then((resposta) => resposta.json())

        .then((data) => { // quando a promise deu certo
            console.log(data)
            result.innerHTML = ` <h3 id="container_palavra">${palavra.toUpperCase()}</h3>

                                <p id="container_significado">
                                    <span>Primeiro:</span> ${data[0].meanings[0]}</p>

                                <p id="container_significado">
                                    <span>Segundo:</span> ${data[0].meanings[1]}</p>`

            }).catch(() => { // e quando a promise deu errado
                result.innerHTML = '<p id="container_significado">Pesquisa <span>Näo</span> sucedida!</p>'
            })
    }
})
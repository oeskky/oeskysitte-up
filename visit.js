opcoes.style.display = "none"

const cmen = document.getElementById("cmsg");
const dive = document.getElementById("opcoes");

cmen.addEventListener("change", function() {
    if (cmen.checked) {
        dive.style.display = "block"
    } else {
        dive.style.display = "none"
    }
});

const btn = document.getElementById("botao");
const seme = document.getElementById("smsg")

seme.addEventListener("change", function() {
    if (seme.checked) {
        btn.removeAttribute("disabled");
    } else {
        btn.setAttribute("disabled", "true");
    }
});

const bot = document.getElementById("botao");
const come = document.getElementById("cmsg")

come.addEventListener("change", function() {
    if (come.checked) {
        bot.removeAttribute("disabled");
    } else {
        bot.setAttribute("disabled", "true");
    }
});

function copiartexto() {
    var texto = document.getElementById("email");

    texto.select();
    texto.setSelectionRange(0, 99999);

    document.execCommand("copy");

    texto.blur();

    var botao = document.querySelector("button");
    botao.textContent = "Copiado!";

    botao.disabled = true;
}

function copytext() {
    var texto = document.getElementById("email");

    texto.select();
    texto.setSelectionRange(0, 99999);

    document.execCommand("copy");

    texto.blur();

    var botao = document.querySelector("button");
    botao.textContent = "Copied!";

    botao.disabled = true;
}
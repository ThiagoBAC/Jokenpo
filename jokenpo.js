
function exibirResultado() {
    document.getElementById('resultado').innerHTML = "";

    const jogador1 = document.getElementById("jogada1").value;
    const jogador2 = document.getElementById("jogada2").value;

    document.getElementById('resultado').innerHTML = `${jogador1} x ${jogador2}: ` + jokenpo(jogador1, jogador2);

}

function jokenpo(jogador1, jogador2) {
    if ((jogador1 === "pedra" && jogador2 === "tesoura") ||
        (jogador1 === "tesoura" && jogador2 === "papel") ||
        (jogador1 === "papel" && jogador2 === "pedra")) {
        return `Jogador1 Venceu!`;
    } else if ((jogador1 === "pedra" && jogador2 === "papel") ||
        (jogador1 === "tesoura" && jogador2 === "pedra") ||
        (jogador1 === "papel" && jogador2 === "tesoura")) {
        return `Jogador2 Venceu!`;
    }
    else if (jogador1 === jogador2 &&
        (jogador1 === "papel" || jogador1 === "tesoura" || jogador1 === "pedra") && (jogador2 === "papel" || jogador2 === "tesoura" || jogador2 === "pedra")) {
        return "Empate!";
    }
    return "Jogada inválida!"
}





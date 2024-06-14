// Variável do herói:
let heroi = {
    nome: "Brock",
    xp: 0
};

// Operadores e estrutura de decisão para determinar o nível do herói baseado no XP:
function determinarNivel(xp) {
    if (xp < 1000) {
        return "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
        return "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        return "Prata";
    } else if (xp >= 5001 && xp <= 7000) {
        return "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
        return "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
        return "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
        return "Imortal";
    } else if (xp >= 10001) {
        return "Radiante";
    }
}

// Exibição da mensagem final:
console.log("O Herói de nome " + heroi.nome + " está no nível de " + determinarNivel(heroi.xp) + ".");

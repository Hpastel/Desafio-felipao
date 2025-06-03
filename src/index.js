let heroi = ["Superman", "Batman", "Mulher Maravilha", "Flash", "Aquaman", "Lanterna Verde", "Ciborgue", "Arqueiro Verde"];
const experiencia = [1000, 1001, 2001, 5001, 7001, 8001, 9001, 10001];
let nivel = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"];

for (let i = 0; i < heroi.length; i++) {
    console.log("O herói " + heroi[i] + " está com  " + experiencia [i] + " de experiência e no nível " + nivel[i]);
}

// Caso sejas o vilão
heroi = "Batman";
switch (heroi) {
    case "Superman":
        console.log("Use kryptonita para derrotar o " + heroi + "!");
        break;    
    case "Batman":
        console.log("Use o medo para derrotar o " + heroi + "!");
        break;
    case "Mulher Maravilha":
        console.log("Use uma Amazona para derrotar a " + heroi + "!");
        break;
    case "Flash":
        console.log("Use uma tartaruga para derrotar o " + heroi + "!");
        break;
    case "Aquaman":
        console.log("Use um peixe frito para derrotar o " + heroi + "!");
        break;
    case "Lanterna Verde":
        console.log("Use uma bijuteria para derrotar o " + heroi + "!");
        break;
    case "Ciborgue":
        console.log("Use uma bateria viciada para derrotar o " + heroi + "!");
        break;
    case "Arqueiro Verde":
        console.log("Use um terremoto para derrotar o " + heroi + "!");
        break;
    default:
        console.log("Herói desconhecido!");
        break;
}







// if (heroi[indiceEscolhido]) {
//     console.log("O Heroi de nome " + heroi[indiceEscolhido] + " está no nível " + nivel[indiceEscolhido]);
// } else  {
//     console.log("Nenhum herói escolhido.");
// }



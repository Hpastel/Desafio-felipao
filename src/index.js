let heroi = ["Superman", "Batman", "Mulher Maravilha", "Flash", "Aquaman", "Lanterna Verde", "Ciborgue", "Arqueiro Verde"];
const experiencia = [1000, 1001, 2001, 5001, 7001, 8001, 9001, 10001];
let nivel = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"];

for (let i = 0; i < heroi.length; i++) {
    console.log("O herói " + heroi[i] + " está com  " + experiencia [i] + " de experiência e no nível " + nivel[i]);
}

heroi = "Batman";
switch (heroi) {
    case "Superman":
    console.log("Use kryptonita para derrotar " + heroi + "!");
    break;
    
    case "Batman":
    console.log("Use o medo para derrotar " + heroi + "!");
    break;

}







// if (heroi[indiceEscolhido]) {
//     console.log("O Heroi de nome " + heroi[indiceEscolhido] + " está no nível " + nivel[indiceEscolhido]);
// } else  {
//     console.log("Nenhum herói escolhido.");
// }



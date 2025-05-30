let pokemon = [
	["Dragonite", 2, "Sombrio", 7],
    ["Hurmple", 3, "Fogo", 13],
    ["Poochyena", 5, "Inseto", 15],
    ["Zigzagoon", 7, "Normal", 24]
]

console.log(
	pokemon[0][0] + " Cadastrado com sucesso. " + 
    " Seu HP após a ultima luta é: " + pokemon [3][3] + 
    ". Está no nivél " + pokemon[2][1] + 
    ". E é do tipo " + pokemon[1][2] 
)
console.log(
	pokemon[3][0] + " Cadastrado com sucesso. " + 
    " Seu HP após a ultima luta é: " + pokemon [1][3] + 
    ". Está no nivél " + pokemon[0][1] + 
    ". E é do tipo " + pokemon[1][2] 
)

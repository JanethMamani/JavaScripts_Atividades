// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

let lines = gets().split("\n");

//TODO: Complete os espaços em branco com uma possível solução para o desafio
var frase = "";
let N = parseInt(lines.shift());
for (let i=1; i<=N ; i++) {
    if (i<N) frase += "Ho ";
    else frase += "Ho!";
}
print(frase);

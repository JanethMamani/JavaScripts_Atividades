let num = parseInt(gets());
var tempo = 0.0;
var comprimento = 0;
let word;
for (let i = 0; i < num; i++) {
    word = gets();
    comprimento = word.length;
    tempo = 0.01 * comprimento;
    print(tempo.toFixed(2));
}

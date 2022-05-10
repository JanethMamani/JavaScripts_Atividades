let num = parseInt(gets());
var inicio;
var fim;
let word = 'a';
for (let i = 0; i < num; i++) {
    inicio = new Date();          
    word = gets();
    fim = new Date();
    iniciod = inicio.getTime();
    fimd = fim.getTime();
    print(fimd - iniciod);
}

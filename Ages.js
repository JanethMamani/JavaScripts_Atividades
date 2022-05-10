
let cont = 0;
let n = 0;
var soma = 0;

do {
  n = parseInt(gets());
  soma += n;
  cont ++;

}while (n > 0);
cont --;
soma -= n;
var media = soma/cont;

print(media.toFixed(2));

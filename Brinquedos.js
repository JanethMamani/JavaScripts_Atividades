//TODO: Complete os espaços em branco com uma possível solução para o problema.
var participantes = gets();
var criancas;
var array = [];
for(i=0;i<participantes;i++){
  criancas = gets().split(' ');
  array.push(criancas[1]);
}

const meninos = array.filter(letra => letra=='M').length;
const meninas = array.filter(letra => letra=='F').length;
print(`${meninos} carrinhos\n${meninas} bonecas`);

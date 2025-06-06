# atividade02

//01

function concatenarArrays(array1, array2) {
    return array1.concat(array2);
  }
  
  const array1 = ['azul', 'amarelo', 'vermelho'];
  const array2 = ['roxo', 'laranja', 'verde'];
  
  const arrayConcatenado = concatenarArrays(array1, array2);
  
  console.log(arrayConcatenado);

//02

const numeros=["1","2","3","4","5","6","7","8","9","10"]
console.log(numeros)

const parteNumeros= numeros.slice(2,7)
console.log(parteNumeros)

//03

const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi'];
console.log(frutas)
frutas.splice(1, 2, 'Kiwi', 'Pêssego');
console.log(frutas); 

//04

const menuPrincipal= ['macarrão', 'parmediana', 'filé de tilápia frito']
const menuDeSobremesa= ['pudim', 'bolo de coco', 'espetinho de morango com chocolate']

const menuCompleto= menuPrincipal.concat(menuDeSobremesa)
console.log(menuCompleto)


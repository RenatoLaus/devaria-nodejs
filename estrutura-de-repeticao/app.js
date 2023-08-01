//console.log(process.argv.slice(2));
const listaArgumentos = process.argv.slice(2);

console.log('----------executando um for-----------');
for(let controladorFor = 0; controladorFor < listaArgumentos.length; controladorFor++){
    console.log(`Posição: ${controladorFor} valor lido: ${listaArgumentos[controladorFor]}`);
}

console.log('----------executando um while-----------');
let controladorWhile = 0;
while(controladorWhile <listaArgumentos.length){
    console.log(`Posição: ${controladorWhile} valor lido: ${listaArgumentos[controladorWhile]}`);
    controladorWhile++;
}

console.log('----------executando um do while-----------');
let controladorDoWhile = 0;
do{
    console.log(`Posição: ${controladorDoWhile} valor lido: ${listaArgumentos[controladorDoWhile]}`);
    controladorDoWhile++

}while (controladorDoWhile < listaArgumentos.length);

console.log('---------executando um FOR OF----------')
for( const argumento of listaArgumentos){
    console.log(`valor lido: ${argumento}`);
}

console.log('---------executando um FOR OF com POSICAO----------')
let controladorForOF = 0;
for( const argumento of listaArgumentos){
    console.log(`Posição: ${controladorForOF} valor lido: ${argumento}`);
    controladorForOF++;
}
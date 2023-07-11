const readLine = require('readline').createInterface({
    input : process.stdin,
    output : process.stdout
})

console.log('esse programa vai checar se fosse é  maior de 18 anos e tem a habilitação para saber se voce pode entrar no kart');
console.log('alem da sua verificação, precisamos verificar se fosse esta na lista de presença do horario');

readLine.question('qual o ano do seu nascimento?', ano =>{
    if (ano > 2004){
        console.log('você não tem 18 anos');
    }
    else{ 
        readLine.question("Você tem habilitação (Sim/Não)?", temHabilitacao => {
            if (!(temHabilitacao.toUpperCase()=== "SIM")){
                console.log('Você não tem habilitação para entrar no kart');
            }else{
                readLine.question('qual é o seu nome?', nome =>{
                    switch(nome){
                        case 'Douglas' :
                            console.log('BEM VINDO AO KART DOUGLAS');
                            break;
                        case 'Rafael' :
                            console.log('BEM VINDO AO KART RAFAEL');
                            break;
                        case 'Renato' :
                            console.log('BEM VINDO AO KART RENATO');
                            break;
                        default :
                            console.log('VOCÊ NÃO ESTA NA LISTA DE PRESENÇA');
                            break;
                    }
                        
                })
            }
        })
    }

})
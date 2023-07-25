const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const validarNumeroInformado = (numero) => {
    
        const resultado = Number.parseFloat(numero);
            if(!resultado){
                console.log(`numero informado não é  valido.`);
            }
            return resultado
    }


const validarOperador =(operador) =>{
    switch (operador){
        case '+':
        case '-'   :
        case '*':
        case '/':
        case '%':
            return operador;
        default:
            console.log('operador informado não é valido');
            return null;
    }

}

readLine.question('Favor  informar um numero:', (numero1) =>{
    const numeroValidado1 = validarNumeroInformado(numero1);

    if(numeroValidado1){
        readLine.question('Favor informar um numero:',(numero2) =>{
        const numeroValidado2 = validarNumeroInformado(numero2);

            if(numeroValidado2){
                readLine.question(`Favor informar o operador:`, (operador) =>{
                    const operadorValido = validarOperador(operador);

                    if(operadorValido){
                        switch(operadorValido){
                            case '+' : console.log(`Primeiro numero valido: ${numeroValidado1} + segundo numero valido: ${numeroValidado2} = ${numeroValidado1+numeroValidado2}`)
                            break;
                            case '-' : console.log(`Primeiro numero valido: ${numeroValidado1} - segundo numero valido: ${numeroValidado2} = ${numeroValidado1-numeroValidado2}`)
                            break;
                            case '*' : console.log(`Primeiro numero valido: ${numeroValidado1} * segundo numero valido: ${numeroValidado2} = ${numeroValidado1*numeroValidado2}`)
                            break;
                            case '/' : console.log(`Primeiro numero valido: ${numeroValidado1} / segundo numero valido: ${numeroValidado2} = ${numeroValidado1/numeroValidado2}`)
                            break;
                            case '%' : console.log(`Primeiro numero valido: ${numeroValidado1} % segundo numero valido: ${numeroValidado2} = ${numeroValidado1%numeroValidado2}`)
                            break;
                            default : break;
                        }
                    }


                })
            }
        });

    }
})


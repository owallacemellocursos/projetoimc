
//var-> variavel: permite redeclaração (o que pode causar problemas no código)
//** let -> variável que não permite redeclaração**
//const -> constante: não permite alteração do seu valor

const info = document.querySelector('.info');
const btnInfo = document.querySelector('.info button');

if(localStorage.getItem('fechouInfo')== 'sim'){

    info.style.display='none'
}
function fecharInfo(){

   info.style.display='none'

   //Armazenando dados no STORAGE
   //sessionStorage -> Guarda enquanto navega
   //localStorage -> Guarda até limpar o cache

   localStorage.setItem('fechouInfo', 'sim');
}

btnInfo.addEventListener('click', fecharInfo);


/////////////

const peso = document.querySelector('#peso');
const altura = document.querySelector('#altura');
const btnImc = document.querySelector('#btn-imc');

function calcularImc (){

   if(peso.value != '' && altura.value != ''){

    let imc = peso.value / (altura.value*altura.value);
    peso.value = '';
    altura.value = '';
    
    let classificacao;
    let cor;

    if(imc < 18.5){

        classificacao = 'Desnutrido';
        cor = 'gray';

    }else if(imc >= 18.5 && imc <= 24.9){
        
        classificacao = 'Magro';
        cor = '#2E943F'

    }else if(imc >= 25 && imc <= 29.9){
        
        classificacao = 'Gordinho';
        cor = '#AFB200'

    }else if(imc >= 30 && imc <= 34.9){
        
        classificacao = 'Gordão';
        cor = '#CB7714';

    }else{
        
        classificacao = 'Bariátrica'
        cor = '#ff0000';
    }



    result.style.display='block';
    result.style.backgroundColor = cor;
    result.innerHTML = 'Seu IMC é: ' +imc.toFixed(2) + '<br> Classificação: ' +classificacao;


}else{

    alert('Preencha todos os campos!');

   }

}
btnImc.addEventListener('click', calcularImc);
var m = document.getElementById('masc')
var f = document.getElementById('fem')
var checkm = false
var checkf = false
var tabela = document.getElementById("imc")
var lmagro = document.getElementById('magreza')
var lnormal = document.getElementById('normal')
var lsobrepeso = document.getElementById('sobrepeso')
var lobeso = document.getElementById('obeso')
var pesoIdeal = '46.8 e 69 Kg'
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
const imc = peso.value / (altura.value / 100) ** 2
var res = document.getElementById('res')
res.innerHTML = ""
var resc = document.getElementById('resc')
function mulher(){
    f.style.backgroundColor = 'plum'
    f.style.border = '1px solid rgba(248, 180, 248, 0.096)'
    m.style.backgroundColor = 'rgba(100, 148, 237, 0.041)'
    m.style.border = '1px solid cornflowerblue'
    checkf = true
    checkm = false
}
function homem(){
    m.style.backgroundColor = 'cornflowerblue';
    m.style.border = '1px solid rgba(100, 148, 237, 0.041)';
    f.style.backgroundColor = 'rgba(248, 180, 248, 0.096)';
    f.style.border = '1px solid plum';
    checkf = false;
    checkm = true ; 
}
var idade = document.getElementById('idade');
var altura = document.getElementById('altura');
var peso = document.getElementById('peso');
var alertaIdade = document.getElementById('alertaIdade');
var alertaAltura = document.getElementById('alertaAltura');
var alertaPeso = document.getElementById('alertaPeso');
function calculaimc(){
    var camposVazios = false;
    if (idade.value === ""){
        alertaIdade.innerHTML = 'Preenchimento obrigatório!';
        alertaIdade.style.color = 'red';
        idade.style.border = '1px solid red';
        camposVazios = true;
    }else if(idade.value > 119){
        alertaIdade.innerHTML = 'Idade máxima: 119 anos';
        alertaIdade.style.color = 'red';
        idade.style.border = '1px solid red';     
    }else{
        alertaIdade.innerHTML = "";
        idade.style.border = '1px solid #bababa';
        camposVazios = false
    }
    if (altura.value === ""){
        alertaAltura.innerHTML = 'Preenchimento obrigatório!';
        alertaAltura.style.color = 'red';
        altura.style.border = '1px solid red';
        camposVazios = true;
    }else if(altura.value > 225){
        alertaAltura.innerHTML = 'Altura máxima: 225cm';
        alertaAltura.style.color = 'red';
        altura.style.border = '1px solid red';    
    }else{
        alertaAltura.innerHTML = "";
        altura.style.border = '1px solid #bababa';
        camposVazios = false
    }
    if(peso.value === ""){
        alertaPeso.innerHTML = 'Preenchimento obrigatório!';
        alertaPeso.style.color = 'red';
        peso.style.border = '1px solid red';
        camposVazios = true;
    }else if(peso.value > 300){
        alertaPeso.innerHTML = 'Peso máximo: 300Kg';
        alertaPeso.style.color = 'red';
        peso.style.border = '1px solid red';            
    }else{
        alertaPeso.innerHTML = "";
        peso.style.border = '1px solid #bababa';
        camposVazios = false
    }
    if(camposVazios == true){
        tabela.style.display = 'none';
    }
}

/*var condicao = ""
res.innerHTML = `Seu Índice de Massa Corporal (IMC) é de ${imc.toFixed(2)} kg/m²`
if (checkf == true || checkm == true){
    tabela.style.display = 'block';
    if(imc < 16){
        condicao = 'magreza'
        resc.innerText = `De acordo com a Organização Mundial da Saúde, seu IMC é considerado como ${condicao} para a sua altura. Para manter o valor de IMC normal, seu peso pode variar entre ${pesoIdeal}.`
        lmagro.style.backgroundColor = 'bisque'
    }else if(imc >= 16 && imc > 23.6){
        condicao = 'normal'
        resc.innerText = `De acordo com a Organização Mundial da Saúde, seu IMC é considerado como ${condicao} para a sua altura. Para manter o valor de IMC normal, seu peso pode variar entre ${pesoIdeal}.`
            lnormal.style.backgroundColor = 'lightgreen'
    }else if(imc >= 23.6 && imc < 27.8){
        condicao = 'sobrepeso'
        resc.innerText = `De acordo com a Organização Mundial da Saúde, seu IMC é considerado como ${condicao} para a sua altura. Para manter o valor de IMC normal, seu peso pode variar entre ${pesoIdeal}.`
        lsobrepeso.style.backgroundColor = 'lightsalmon'
    }else if(imc > 27.8){
        condicao = 'obesidade'
        resc.innerText = `De acordo com a Organização Mundial da Saúde, seu IMC é considerado como ${condicao} para a sua altura. Para manter o valor de IMC normal, seu peso pode variar entre ${pesoIdeal}.`
        lobeso.style.backgroundColor = 'lightcoral'
    }
}*/
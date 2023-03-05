function Solicitar(){
    
    if(document.getElementById('Kilowatt').value == ''){
        alert('Por favor preencha o campo: GASTO DE ENERGIA.');
        return;
    }
    else if(document.getElementById('email').value == '')
    {
        alert('Por favor preencha o campo Email valido.');
        return;
    }
    else if(document.getElementById('nome').value == '')
    {
        alert('Por favor Insira seu nome.');
        return;
    }
    else{
    var Kilowatt = document.getElementById('Kilowatt').value;
    var kiloWattPico = parseFloat(Kilowatt).toFixed(2)/130;
    var preco = kiloWattPico * 4300;
    var range = preco+(preco * 0.1);
    var minimo = parseFloat(preco).toFixed(2);
    var maximo = parseFloat(range).toFixed(2);
    
    kiloWattPico = parseFloat(kiloWattPico).toFixed(1);
    var placas = (kiloWattPico * 1000)/550;
    var placasArredondado = Math.round(placas);
    var espaco = placasArredondado * 2.8;
    var espacoArredondado = parseFloat(espaco).toFixed(1)
    
    //window.location.href = ('file:///C:/Users/amari/calculadoraFusionsun/result.html');
    debugger
    document.getElementById('precoMinimo').textContent = 'teste';
    //document.getElementById('precoMaximo').value(maximo)
    

    }
    
 //MODAL   

}
function AbrirModal(){
    let modal = document.getElementById('dv-modal');

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'Block';
    document.body.style.overflow = 'hidden';
    
}
function FecharModal(){
    
    let modal = document.getElementById('dv-modal');

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}
function ponteiro(){
    
    document.querySelector('#clique').style.cursor = 'pointer';
    
}
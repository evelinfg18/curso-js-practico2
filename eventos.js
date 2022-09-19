const h1= document.querySelector('h1');
const input1=document.querySelector('#calculo1');
const input2=document.querySelector('#calculo2');
const btn=document.querySelector('#btnCalcular');
const pResult=document.querySelector('#resultado');
btn.addEventListener('click',btnOnClick)
//escuchar los eventos desde javascript
function btnOnClick(){
    const sumaInputs= Number(input1.value) + Number(input2.value);
    pResult.innerText="Resultado: " + sumaInputs;
    //console.log('Escuchando el evento btnOcnClick al pulsar el botón');
};

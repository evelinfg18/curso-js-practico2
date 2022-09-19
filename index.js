
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafo1 = document.getElementsByClassName('parrafo1');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log(input.value);
console.log({
    h1,
    p,
    parrafo1,
    pid,
    input,
});

//Convierten codigo a html  
h1.innerHTML='Cambiando el texto del titulo 1 <br> Usando codigo js en el html';
h1.innerText='Guardando en formato texto';

//obtiene el atributo de la clase
console.log(h1.getAttribute('class'));
//modifica el atributo de la clase en html
h1.setAttribute('class','Evelin');

//funcion para añadir o eliminar clases
h1.classList.add('John','Juan');
h1.classList.remove('binaria');

input.value="123";
const img = document.createElement('img');
img.setAttribute('src','https://www.kw.intelligenceray.com/wp-content/uploads/2021/01/fb6.png');
console.log(img);
pid.append(img);

//crear un elemento html desde cero
//console.log(document.createElement('img'));
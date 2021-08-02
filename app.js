/*$("#modalContainer").prepend("<button id=open>Click Aquí</button>")

$("#open").click((e)=>{
    $(".modal__container").classList.add(`show`)
    alert(prueba)
});

$(".modal").append("<button id=close></button>")

$("#close").click((e)=>{
    $(".modal__container").classList.remove(`show`)
});*/

const open = document.getElementById(`open`);
const modalContainer = document.getElementById(`modalContainer`);
const close = document.getElementById(`close`);

open.addEventListener(`click`, () =>{
    modalContainer.classList.add(`show`)
});

close.addEventListener(`click`, ()=>{
    modalContainer.classList.remove(`show`)
})




//Animaciones
$(".header__img").animate({ 
    opacity:'0.5',
    height:'250px',
    width:'250px',
   }, 
    "5000",            
    );

    $(".title").slideUp(2000)
                .delay(1000)
                .slideDown(2000);
     



//Objeto: Cerveza

class Cerveza {

    constructor (tipo, marca, envase, precio){
        this.tipo = tipo;
        this.marca = marca;
        this.envase = envase;
        this.precio = precio;
    }



    precioPubli (){
        let precioDescuento = this.precio = this.precio / 1.10;
        console.log(precioDescuento);
    }
}

const CervezaIpa = new Cerveza ("Dorada", "Andes", "Botella", 145)
const CervezaApa = new Cerveza ("Roja", "Andes", "Lata", 100)
const CervezaLager = new Cerveza ("Dorada", "Quilmes", "Botella", 115)
const CervezaNegra = new Cerveza ("Negra", "Stella Artois", "Botella", 175)

console.log(CervezaNegra)

CervezaIpa.publicidad();
CervezaIpa.precioPubli();



//Objeto: Vino

class Vino {

    constructor (varietal, bodega, precio){
        this.varietal = varietal;
        this.bodega = bodega;
        this.precio = precio;
    }

    descuento (){
        if (this.precio >= 1500){
            let descVino = this.precio = this.precio / 1.2
            console.log(descVino) 
         }
    }

}

const VinoTinto = new Vino ("Malbec","Estancia Mendoza", 1530)
const VinoBlanco = new Vino ("Chardonnay","Estancia Mendoza", 1300)
const VinoRosado = new Vino ("Malbec","Las Perdices", 1750)
const VinoEspumante = new Vino ("Brut","Novecento", 1480)

console.log(VinoTinto)
VinoTinto.descuento()


//promo mes próximo

class prodPromo{
    constructor (name, marca){
        this.name = name
        this.marca = marca
    }
}

const Lista = []

function nextPromo (){
    const name = document.getElementById("name").value
    const marca = document.getElementById("marca").value

    let init = JSON.parse(localStorage.getItem("Lista"))
    
    if(localStorage.getItem(Lista) != null){
        const rtadoPromo = new prodPromo (name,marca)
        init.push(rtadoPromo)
        localStorage.setItem("Lista",JSON.stringify(init))
    } else{
        localStorage.clear()
        const rtadoPromo = new prodPromo (name,marca)
        Lista.push(rtadoPromo)
        localStorage.setItem("Lista",JSON.stringify(Lista))
    }

    console.log(Lista)
    
}

const btnGuardar = document.getElementById("guardar")
btnGuardar.addEventListener("click", nextPromo)



function mostrarPromo() {

    let imprimir = JSON.parse(localStorage.getItem("Lista"))

    const mostrar = document.getElementById("mostrar")
    let contenedor = document.createElement("div")
    mostrar.appendChild(contenedor)

    Lista.forEach(element =>{
    
    contenedor.innerHTML=
   `<div>
        <p>${element.name}</p>
        <p>${element.marca}</p>
    </div>`;
    
})
    
}

mostrarPromo()

const btnMostrar = document.getElementById("mostrar2")
btnMostrar.addEventListener("click", mostrarPromo)





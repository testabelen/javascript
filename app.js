//Variables globales

const marca = "Cardeno Vinos"

//Saludo e ingreso

let nombre = prompt("Cuál es tu nombre?")

let saludo = nombre + "," + " " + "bienvenid@ a" + " " + marca 

let edad = prompt(nombre +" "+"Cuántos años tenés?")

if (edad >= 18){
    alert(saludo + " "+ "seguí navegando por nuestra web y llevate las mejores ofertas!");
}else {
    alert(nombre + "," + "volvé con un mayor o cuando tengas 18, estaremos esperándote" )
}

//Objeto: Cerveza

class Cerveza {

    constructor (tipo, marca, envase, precio){
        this.tipo = tipo;
        this.marca = marca;
        this.envase = envase;
        this.precio = precio;
    }

    publicidad (){
        alert(this.marca + " " + "te ofrece para este mes un 10% off en todos sus productos en" + " " + this.envase)
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



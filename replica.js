var suscripcion = {
    1: "Free",
    2: "Basic",
    3: "Expert",
    4: "Expert Plus"
}

var info_suscripcion = {
    1: "Sólo puedes tomar los cursos gratis",
    2: "Puedes tomar casi todos los cursos de Platzi durante un mes",
    3: "Puedes tomar todos los cursos de Platzi durante un año", 
    4: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
}

console.log("Menú de suscripciones: "); 
console.log("1: Free"); 
console.log("2: Basic"); 
console.log("3: Expert"); 
console.log("4: ExpertPlus"); 
var resp = prompt("Escribe el número que corresponda a tu suscripción: "); 
var respuesta = Number(resp); 
console.log("Tu tipo de suscripción es: " + suscripcion[respuesta]);
console.log("Y con ella: " + info_suscripcion[respuesta]);
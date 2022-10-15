
function imprimir_objeto(objeto){
    for (var propiedad in objeto){
      console.log(propiedad + ": " + objeto[propiedad]);
    } 
  }
  
  var mascota = {
      nombre: "Gings", 
      edad: 9,
      tipo: "Perro",
      raza: "Siberian Husky",
      peso: 29.5,
      color: "Rojo claro",
      heterocromia: true,
      traviesa: true,
      alergias: "Pollo",
      comida_favorita: "Peras"
  }
  
  console.log("Mis mascotas: ");
  imprimir_objeto(mascota);
  
  var chiefs = {
    place: "Kansas City, Missouri",
    date:  1960,
    sbs: 2,
    conference: "AFC",
    division: "West",
    stadium: "Arrowhead",
    owner: "Clark Hunt",
    coach: "Andy Reid",
    qb1: "Patrick Mahomes"
  }

  console.log("Información de los Kansas City Chiefs: ");
  imprimir_objeto(chiefs);
  
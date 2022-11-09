const libro = {
  titulo:"Aprendiendo Javascript",
  autor: "Julio Martinez",
  numPagina:100,
  editorial: "juliomartinez.es",
  precio:"24.90"
}

for (let prop in libro){
  // console.log(`La prop ${prop} contiene: ${libro[prop]}`)
  console.log(`${prop}: ${libro[prop]}`)
  
}

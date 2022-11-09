const libro = {
  titulo:"Aprendiendo Javascript",
  autor: "Julio Martinez",
  numPagina:100,
  editorial: "juliomartinez.es",
  precio:"24.90"
}

const props = Object.getOwnPropertyNames(libro);

props.forEach((name)=>{
  let valor = Object.getOwnPropertyDescriptor(libro, name).value;
  console.log(`Las props de ${name} contiene: ${valor}`)
})

const posts = [{
  id:1,
  title:'Mi primer post',
  image:'https://img.com/1',
  tags:['javascript', 'webdevelopment'],
}, {
  id:2,
  title:'Mi experiencia con React',
  image:'https://img.com/2',
  tags:['javascript', 'webdevelopment', 'react'],
}, {
  id:3,
  title:'Por qué dejé Angular',
  image:'https://img.com/3',
  tags:['javascript', 'webdevelopment', 'angular'],
}]

//Encuentra un fragmento e imprime todo el objeto
posts.find(post => post.title == 'Por qué dejé Angular')

//Verifica si existe un elemento con el id = 3 e imprime true o false
posts.some(post => post.id===3)

//Imprime verdadero o falso si algun elemento de todos los objetos contiene vue
posts.some(post => post.tags.includes('vue'))

//Imprime verdadero o falso si todos los objetos contienen un tag javascript
posts.every(post => post.tags.includes('javascript'))


//Map devuelve solo los elementos que queramos de la coleccion 
posts.map((post)=>{
  return post.title
})

posts.filter(post => post.tags.includes('angular'))


posts.reduce((allTags, post)=>{
  return [...allTags, ...post.tags]
}, [])

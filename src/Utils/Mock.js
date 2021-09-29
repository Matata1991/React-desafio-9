const productos = [
    { id: 1, categoria: 'tortas', titulo: 'Torta Multicolor', descripcion: 'Torta de bizcochuelos de colores, cubierta con crema', precio: '1000', imagen:'https://www.bettycrocker.lat/wp-content/uploads/2020/12/BClatam-recipe-pastel-arcoiris.png'},
    { id: 2, categoria: 'tortas', titulo: 'Torta Chocolate', descripcion: 'Torta de bizcochuelo de chocolate, cubierta con chocolate', precio: '1500', imagen:'https://www.bettycrocker.lat/wp-content/uploads/2020/12/BClatam-recipe-pastel-de-chocolate-con-glaseado-de-chocolate.png'},
    { id: 3, categoria: 'tortas', titulo: 'Torta tiramisú', descripcion: 'Torta de crema de queso y crema, cubierta con cacao', precio: '2000', imagen: 'https://www.bettycrocker.lat/wp-content/uploads/2021/04/BCL-Tiramisu_Recipe_770x514.jpg'},
    { id: 4, categoria: 'sandwiches', titulo: 'Sandwich Jamon y Queso', descripcion: 'Sandwich Jamon y Queso y pan de miga', precio: '1000', imagen:'http://www.confiteriadelgado.com.ar/images/Especialidadas/Sandwiches/Sandwiches_miga-001.jpg'},
    { id: 5, categoria: 'sandwiches', titulo: 'Sandwich Morenitos de crudo', descripcion: 'Sandwich Jamon Crudo y Queso y pan de miga negro', precio: '1500', imagen:'http://www.confiteriadelgado.com.ar/images/Especialidadas/Sandwiches/Sandwiches_miga-002.jpg'},
    { id: 6, categoria: 'sandwiches', titulo: 'Sandwich Especiales', descripcion: 'Sandwich de miga especiales a eleccion', precio: '2000', imagen: 'http://www.confiteriadelgado.com.ar/images/Especialidadas/Sandwiches/Sandwiches-004.jpg'}
   ];


export  const get = new Promise((res,rej) => {
    let respuesta = '200';
    if (respuesta === '200'){
      setTimeout(() => {
        res(productos);
      }, 2000);
    } else {
        rej('404')
    }
})

const producto = { id: 1, titulo: 'Torta Multicolor', descripcion: 'Torta de bizcochuelos de colores, cubierta con crema', precio: 'Precio $1000', imagen:'https://www.bettycrocker.lat/wp-content/uploads/2020/12/BClatam-recipe-pastel-arcoiris.png'}

export  const getProducto = new Promise((res,rej) => {
  let respuesta = '200';
  if (respuesta === '200'){
    setTimeout(() => {
      res(producto);
    }, 2000);
  } else {
      rej('404')
  }
})
// Definir la función de análisis
function analizarDatos(datos) {
    // Calcular el promedio
    const promedio = datos.reduce((acc, obj) => acc + obj.cantidad, 0) / datos.length;
  
    // Ordenar los datos por cantidad
    const datosOrdenados = [...datos].sort((a, b) => b.cantidad - a.cantidad);
  
    // Obtener el item con la mayor cantidad
    const itemMaximo = datosOrdenados[0].item;
  
    // Obtener el item con la menor cantidad
    const itemMinimo = datosOrdenados[datosOrdenados.length - 1].item;
  
    // Filtrar los elementos que están por encima del promedio
    const itemsPorEncimaDelPromedio = datos
      .filter(obj => obj.cantidad > promedio)
      .map(obj => obj.item);
  
    return {
      promedio,
      itemMaximo,
      itemMinimo,
      itemsPorEncimaDelPromedio
    };
  }
  
  // Datos de ejemplo
  const datos = [
    { item: 'Producto A', cantidad: 150, fecha: '2025-01-15' },
    { item: 'Producto B', cantidad: 230, fecha: '2025-01-16' },
    { item: 'Producto C', cantidad: 180, fecha: '2025-01-17' },
    { item: 'Producto D', cantidad: 120, fecha: '2025-01-18' },
    { item: 'Producto E', cantidad: 260, fecha: '2025-01-19' },
  ];
  
  // Ejecutar la función y mostrar los resultados en la consola
  const resultados = analizarDatos(datos);
  console.log(resultados);
  
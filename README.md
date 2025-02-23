# Análisis de Datos de Producción

Este proyecto proporciona una solución para analizar la **producción** o cualquier tipo de **métrica** en función de un conjunto de datos. La solución permite clasificar los elementos según una métrica, calcular un promedio, identificar los valores máximos y mínimos, y filtrar los elementos que superan el promedio.

Este enfoque es general y puede aplicarse a distintos sectores, como minería, comercio, ingeniería, etc.

## Tecnologías utilizadas

- **Lenguaje de programación**: JavaScript (ES6+)
- **Entorno**: Node.js
- **Librerías y herramientas**:
  - No se requieren librerías externas para este proyecto, solo JavaScript puro.

## Descripción

La función `analizarDatos()` toma un array de objetos que contienen datos relevantes (como producción, ventas, rendimiento, etc.) y devuelve los siguientes resultados:

- **Promedio**: Calcula el promedio de la métrica.
- **Valor máximo**: Identifica el elemento con el valor máximo en la métrica.
- **Valor mínimo**: Identifica el elemento con el valor mínimo en la métrica.
- **Elementos por encima del promedio**: Filtra los elementos cuya métrica es superior al promedio.

## Uso

Una vez descargado el repositorio y configurado el entorno, abre el archivo index.js y ejecuta el siguiente código en la terminal para analizar los datos de producción:

node index.js

### Ejemplo de uso

#### Datos de entrada:

```javascript
const datos = [
  { item: 'Producto A', cantidad: 150, fecha: '2025-01-15' },
  { item: 'Producto B', cantidad: 230, fecha: '2025-01-16' },
  { item: 'Producto C', cantidad: 180, fecha: '2025-01-17' },
  { item: 'Producto D', cantidad: 120, fecha: '2025-01-18' },
  { item: 'Producto E', cantidad: 260, fecha: '2025-01-19' },
];

Salida esperada

{
  promedio: 184,
  itemMaximo: "Producto E",
  itemMinimo: "Producto D",
  itemsPorEncimaDelPromedio: ["Producto B", "Producto C", "Producto E"]
}

analisis-datos-produccion/
├── index.js              # Archivo principal con el código de análisis
├── README.md             # Este archivo de documentación
└── package.json          # Archivo de configuración del proyecto (si usas Node.js)


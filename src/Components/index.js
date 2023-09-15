export { Destacados } from './Destacados/Destacados'
export { Elegidos } from './Elegidos/Elegidos'
export { Footer } from './Footer/Footer'
export { Header } from './Header/Header'
export { Home } from './Home/Home'
export { Ofertas } from './Ofertas/Ofertas'
export { Productos } from './Productos/Productos'
export { Detalle } from './Detalle/Detalle'
export { Reels } from './Reels/Reels'

import img001 from './assets/Cocina_Amelia.jpg'
import img002 from './assets/Mesa Didáctica_(1).jpg'
import img003 from './assets/Cubo XXL Rampa.jpg'

const img001_1 = img002
const img001_2 = img003

export const arrayProductos = [
  {
    id: 1,
    nombre: 'Cocina',
    categoria: 'Muebles',
    descripcion: 'Cocina con horno',
    imagen: img001,
    imagen1: img001_1,
    imagen2: img001_2,
    precio: 1999.99,
    precioDesc: 1799.99,
  },
  {
    id: 2,
    nombre: 'Mesa',
    categoria: 'Muebles',
    descripcion: 'Mesa didactica',
    imagen: img002,
    imagen1: '',
    imagen2: '',
    precio: 1599.99,
    precioDesc: 1439.99,
  },
  {
    id: 3,
    nombre: 'Cubo',
    categoria: 'Parque',
    descripcion: 'Multiuso',
    imagen: img003,
    imagen1: '',
    imagen2: '',
    precio: 1299.99,
    precioDesc: 1169.99,
  }
]

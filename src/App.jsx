import './App.css'
import {createHashRouter, RouterProvider} from 'react-router-dom'
import {Home,Detalle,Productos} from './Components/index.js'

function App() {
  const router = createHashRouter([
    {
      path:'/',
      element: <Home/>,
    },
    {
      path: '/productos',
      element: <Productos />,
    },
    {
      path: '/productos/:id', // Definimos una ruta con un parámetro dinámico ":id"
      element: <Detalle />, // Supongamos que tienes un componente para mostrar los detalles del producto
    },
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App

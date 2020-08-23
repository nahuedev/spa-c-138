 import Header from '../templates/Header'
 import Home from '../pages/Home'
 import Personaje from '../pages/Personaje'
 import ErrorPage from '../pages/ErrorPage'
 import getHash from '../utils/getHash'
 import resolveRoutes from '../utils/resolveRoutes'


 const routes = {
     '/': Home,
     '/:id': Personaje,
 }

 const router = async () => {
    const header = null || document.getElementById('header')
    const content = null || document.getElementById('contenido')

    header.innerHTML= await Header()
    let hash = getHash()
    let route = await resolveRoutes(hash)
    let render  = routes[route] ? routes[route] : ErrorPage
    console.log(render)
    content.innerHTML = await render()

 }
 export default router
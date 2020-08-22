 import Header from '../templates/Header'
 import Home from '../pages/Home'
 import Personaje from '../pages/Personaje'
 import ErrorPage from '../pages/ErrorPage'


 const routes = {
     '/': Home,
     '/:id': Personaje,
 }

 const router = async () => {
    const header = null || document.getElementById('header')
    const content = null || document.getElementById('content')

    header.innerHTML= await Header()

 }
 export default router
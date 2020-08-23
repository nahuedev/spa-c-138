import getData from '../utils/getData'





const Home = async () =>{
    const personajes = await getData()
    console.log(personajes)

    const view = `
        <div class="personajes">
            ${personajes.results.map(personaje =>`
            
            
            <article class="personaje-item">
                <a href="#/${personaje.id}">
                <img src="${personaje.image}">
                <h2>${personaje.name}</h2>
                </a>
              </article>
            
            `).join('')
        }
        </div>
    `
    return view

}

export default Home
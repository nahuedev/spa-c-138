import getHash from '../utils/getHash'
import getData from '../utils/getData'






const Personaje = async  () =>{
     const id = getHash()
     const personajes = await getData(id)
    console.log('el id',id)
    console.log(personajes)

    const view = `
        <div class="personaje-inner">
                <article class="personaje-card">
                <img src="${personajes.image}" alt="${personajes.name}">
                <h2>${personajes.name}</h2>
                </article>
                <ariticle className="personaje-card">
                    <h3>Episodioso: ${personajes.episode.length}  </h3>
                    <h3>Status: ${personajes.status}</h3>
                    <h3>Specie: ${personajes.species}</h3>
                    <h3>Genero: ${personajes.gender}</h3>
                    <h3>Origen: ${personajes.origin.name}</h3>
                    <h3>Ultima Location: ${personajes.location.name}</h3>
                </ariticle>
        </div>
    
    `


    return view

}
export default Personaje
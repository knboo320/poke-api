const getUrl = 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0'
let cont = 0

function getPokemon(getUrl) {
    return fetch(getUrl)
        .then((data) => data.json())
        .catch(err => err.json())
}

async function urlPokemon(url) {
    const epoke = await getPokemon(url)
    const results = epoke.results[cont].url
    return fetch(results)
        .then((data) => data.json())
}

async function dataPokemon() {
    while (cont < 151) {
        const waitUrl = await urlPokemon(getUrl)

        const namePokemon = waitUrl.name;
        const typesPokemon = waitUrl.types
        const idPokemon = waitUrl.id;
        const imgPokemon = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/' + idPokemon + '.png';
        const heightPokemon = waitUrl.height / 10;
        const weightPokemon = waitUrl.weight / 10;
        const bcPokemon = waitUrl.base_experience;
        const hpPokemon = waitUrl.stats[0].base_stat;

        cont++

        const cardsPokemon = document.querySelector('.cards')
        cardsPokemon.innerHTML += `
        <div class="card">
                <h5>
                    #${idPokemon}
                </h5>
            <div class="pokemon-img">
                <img src="${imgPokemon}" alt="Grass">
            </div>
            <div class="pokemon-name">
                <h4>${namePokemon}</h4>
            </div>
            <div id="pokemon-type${cont}" class="tipos">
            </div>
            <div class="stats">
                <div class="left">
                    <p id="info">
                        Height: ${heightPokemon}m
                    </p>
                    <p id="info">
                        Weight: ${weightPokemon}kg
                    </p>
                </div>
                <div class="right">
                    <p id="info">
                        HP: ${hpPokemon}p
                    </p>
                    <p>
                        BC: ${bcPokemon}xp
                    </p id="info">
                </div>
            </div>
            </div>`

        let contType = 0
        while (contType < typesPokemon.length) {
            let colocarTipos = document.getElementById('pokemon-type' + cont)
            let tipo = document.createElement('p')
            let textBorder = tipo.style.textShadow = `2px 0 #000000, -2px 0 #000000, 0 2px #000000, 0 -2px #000000,
            1px 1px #000000, -1px -1px #000000, 1px -1px #000000, -1px 1px #000000`
            tipo.style.textAlign = 'center'
            tipo.style.borderRadius = '5px'
            tipo.style.width = '94px'
            tipo.style.heigth = '24px'
            tipo.innerHTML += `
                ${typesPokemon[contType].type.name}
                `
            if (typesPokemon[contType].type.name == 'psychic') {
                tipo.style.background = '#EA1486'
                textBorder
            } else if (typesPokemon[contType].type.name == 'bug') {
                tipo.style.background = '#ADF00E'
                textBorder
            } else if (typesPokemon[contType].type.name == 'dragon') {
                tipo.style.background = '#4d4dd5'
                textBorder
            } else if (typesPokemon[contType].type.name == 'electric') {
                tipo.style.background = '#ffc403'
                textBorder
            } else if (typesPokemon[contType].type.name == 'fairy') {
                tipo.style.background = '#F6BCF6'
                textBorder
            } else if (typesPokemon[contType].type.name == 'flying') {
                tipo.style.background = '#bca6ff'
                textBorder
            } else if (typesPokemon[contType].type.name == 'normal') {
                tipo.style.background = '#9c9c9c'
                textBorder
            } else if (typesPokemon[contType].type.name == 'steel') {
                tipo.style.background = '#cdd0d1'
                textBorder
            } else if (typesPokemon[contType].type.name == 'fighting') {
                tipo.style.background = '#ab2222'
                textBorder
            } else if (typesPokemon[contType].type.name == 'poison') {
                tipo.style.background = '#88078c'
                textBorder
            } else if (typesPokemon[contType].type.name == 'ghost') {
                tipo.style.background = '#52078c'
                textBorder
            } else if (typesPokemon[contType].type.name == 'fire') {
                tipo.style.background = '#ff6105'
                textBorder
            } else if (typesPokemon[contType].type.name == 'ice') {
                tipo.style.background = '#85fff3'
                textBorder
            } else if (typesPokemon[contType].type.name == 'ground') {
                tipo.style.background = '#f0d77d'
                textBorder
            } else if (typesPokemon[contType].type.name == 'water') {
                tipo.style.background = '#54aaff'
                textBorder
            } else if (typesPokemon[contType].type.name == 'rock') {
                tipo.style.background = '#b59859'
                textBorder
            } else if (typesPokemon[contType].type.name == 'grass') {
                tipo.style.background = '#68d65e'
                textBorder
            }
            contType++
            colocarTipos.appendChild(tipo)
        }
    }
}

dataPokemon()


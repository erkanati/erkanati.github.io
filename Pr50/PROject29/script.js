const APIURL = 'https://api.github.com/users/'

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

async function getUser(username){
    try{
        const {data} = await axios(APIURL + username)
    
        createUserCard(data)
        getRepos(username)
    } catch(error){
        if(error.response.status == 404){
            createErrorCard('There is no user with this profile name')
        }
    }
    
}

async function getRepos(username){
    try{
        const {data} = await axios(APIURL + username + '/repos?sort=created')

        addReposToCard(data)
        

    } catch(err){
            createErrorCard('Problem fetching repository')
    }
}

function createUserCard(user){
    const cardHTML = `
        <div class="card">
            <div>
                <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
            </div>

            <div class="user-info">
                <h2>${user.name}</h2>
                <p>${user.bio}</p>

                <ul>
                    <li>${user.followers} <strong>Followers</strong></li>
                    <li>${user.following} <strong>Following</strong></li>
                    <li>${user.public_repos} <strong>Repositories</strong></li>
                </ul>

                <div id="repos">
                    
                </div>
            </div>
        </div>
    `
    main.innerHTML = ''
    main.innerHTML += cardHTML


}

function createErrorCard(msg){
    const cardHTML = `
        <div class="card">
            <h1>${msg}</h1>
        </div>    
    `
    main.innerHTML
    main.innerHTML += cardHTML
}

function addReposToCard(repos){
    const reposEl = document.getElementById('repos')

    repos
        .slice(0, 10)
        .forEach(repo =>{ 
            const repoEl = document.createElement('a')
            repoEl.classList.add('repo')
            repoEl.href=repo.html_url
            repoEl.target = '_blank'
            repoEl.innerText = repo.name

            reposEl.appendChild(repoEl)
        })
}

form.addEventListener('submit', async (event)=>{
    event.preventDefault()

    const user = search.value.trim() 

    if(user){
        await getUser(user)

        search.value = ' '
    }
})


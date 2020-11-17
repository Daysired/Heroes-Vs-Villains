// const DOMAIN = 'https://superheroapi.com/'
// const API_KEY = '1743621192472664'
// const BASE_URL = `https://superheroapi.com/api/1743621192472664`

// code snippet and fake response incase API fails 
// const fakeResponse = {data:
// {
//   "response": "success",
//   "results-for": "ironman",
//   "results": [
//     {
//       "id": "732",
//       "name": "Ironman",
//       "powerstats": {
//         "intelligence": "100",
//         "strength": "85",
//         "speed": "58",
//         "durability": "85",
//         "power": "100",
//         "combat": "64"
//       },
//       "biography": {
//         "full-name": "Tony Stark",
//         "alter-egos": "No alter egos found.",
//         "aliases": [
//           "Iron Knight",
//           "Hogan Potts",
//           "Spare Parts Man",
//           "Cobalt Man II",
//           "Crimson Dynamo",
//           "Ironman"
//         ],
//         "place-of-birth": "Long Island, New York",
//         "first-appearance": "Tales of Suspence #39 (March, 1963)",
//         "publisher": "Marvel Comics",
//         "alignment": "good"
//       },
//       "appearance": {
//         "gender": "Male",
//         "race": "Human",
//         "height": [
//           "6'6",
//           "198 cm"
//         ],
//         "weight": [
//           "425 lb",
//           "191 kg"
//         ],
//         "eye-color": "Blue",
//         "hair-color": "Black"
//       },
//       "work": {
//         "occupation": "Inventor, Industrialist; former United States Secretary of Defense",
//         "base": "Seattle, Washington"
//       },
//       "connections": {
//         "group-affiliation": "Avengers, Illuminati, Stark Resilient; formerly S.H.I.E.L.D., leader of Stark Enterprises, the Pro-Registration Superhero Unit, New Avengers, Mighty Avengers, Hellfire Club, Force Works, Avengers West Coast, United States Department of Defense.",
//         "relatives": "Howard Anthony Stark (father, deceased), Maria Stark (mother, deceased), Morgan Stark (cousin), Isaac Stark (ancestor)"
//       },
//       "image": {
//         "url": "https://www.superherodb.com/pictures2/portraits/10/100/85.jpg"
//       }
//     }
//   ]
// }
// }


const cors = 'https://cors-anywhere.herokuapp.com/'

async function getHeroId(id) {
  removeId()
  
  button.innerHTML = "<img src = 'loading.svg'>"

  const url = ( cors + `https://www.superheroapi.com/api/1743621192472664/search/${id}`)
  const headers = {
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }

  try {
    const response = await axios.get(url, headers)
    

    // View localStorage
    // const response = {
    //   data: {
    //     results: JSON.parse(localStorage.addTeam)
    //   }
    // }

    console.log(response)

    if (!response.data.error) {
      const search = response.data.results
      console.log(search)
     
      search.forEach((item) => {

   
        const heroCard = document.querySelector('.hero-id')
      
    
        // Hero or Villain Img & Name
        const img = document.createElement('img')
        img.setAttribute('src', item.image.url)
        img.setAttribute('value', item.id)
        img.className = ('c-img')
        const cImgDiv = document.createElement('div')
        cImgDiv.className = ('c-imgDiv')

        const heroName = document.createElement('h2')
        const hvName = item.name
        heroName.textContent = `${hvName}`
        heroName.className = ('c-hvName')
        heroName.id = ('heroName-id')

        cImgDiv.append(heroName)
        cImgDiv.append(img)
        heroCard.append(cImgDiv)
      
      
        // Appearance Info List
        const appearance = item.appearance
        const appearanceDiv = document.createElement('div')
        const appearanceH3 = document.createElement('h3')
        appearanceH3.id = ('appearance-id')
        appearanceH3.innerText = "Appearance"
        console.log(appearance)
        const appearanceUl = document.createElement('ul')
        for (let key in appearance) {
          const item = document.createElement('li')
          item.innerText = `${key}: ${appearance[key]}`
          appearanceUl.append(item)
        }
       
        appearanceDiv.append(appearanceH3)
        appearanceDiv.append(appearanceUl)
        appearanceDiv.className = ('c-appearance')
        heroCard.append(appearanceDiv)

        // Biography Info List
        const biography = item.biography
        const biographyDiv = document.createElement('div')
        const biographyH3 = document.createElement('h3')
        biographyH3.innerText = "Biography"
        biographyH3.id = ('biography-id')
        console.log(biography)
        const biographyUl = document.createElement('ul')
        for (let key in biography) {
          const item = document.createElement('li')
          item.innerText = `${key}: ${biography[key]}`
          biographyUl.append(item)
        }
        
        biographyDiv.append(biographyH3)
        biographyDiv.append(biographyUl)
        biographyDiv.className = ('c-biography')
        heroCard.append(biographyDiv)


        // Powerstats Info List
        const powerstats = item.powerstats
        const powerstatsDiv = document.createElement('div')
        const powerstatsH3 = document.createElement('h3')
        powerstatsH3.innerText = "Powerstats"
        powerstatsH3.id = ('powerstats-id')
        console.log(powerstats)
        const powerstatsUl = document.createElement('ul')
        for (let key in powerstats) {
          const item = document.createElement('li')
          item.innerText = `${key}: ${powerstats[key]}`
          powerstatsUl.append(item)
        }
        
        powerstatsDiv.append(powerstatsH3)
        powerstatsDiv.append(powerstatsUl)
        powerstatsDiv.className = ('c-powerstats')
        heroCard.append(powerstatsDiv)

        // Work Info List
        const work = item.work
        const workDiv = document.createElement('div')
        const workH3 = document.createElement('h3')
        workH3.innerText = "Work"
        workH3.id = ('work-id')
        console.log(work)
        const workUl = document.createElement('ul')
        for (let key in work) {
          const item = document.createElement('li')
          item.innerText = `${key}: ${work[key]}`
          workUl.append(item)
        }
        
        workDiv.append(workH3)
        workDiv.append(workUl)
        workDiv.className = ('c-work')
        heroCard.append(workDiv)


        // Connections Info List
        const connections = item.connections
        const connectionsDiv = document.createElement('div')
        const connectionsH3 = document.createElement('h3')
        connectionsH3.innerText = "Connections"
        connectionsH3.id = ('connections-id')
        console.log(connections)
        const connectionsUl = document.createElement('ul')
        for (let key in connections) {
          const item = document.createElement('li')
          item.innerText = `${key}: ${connections[key]}`
          connectionsUl.append(item)
        }

        connectionsDiv.append(connectionsH3)
        connectionsDiv.append(connectionsUl)
        connectionsDiv.className = ('c-connections')
        heroCard.append(connectionsDiv)
      
        // Saving team to local storage, creating 'Add To team' button 
        // & appending it all to addTeamDiv & heroCard
        function addTeam() {
          console.log(localStorage)
          if (localStorage.addTeam) {
            let teamArr = JSON.parse(localStorage.addTeam)
            console.log(teamArr)
            teamArr.push(item)
            localStorage.addTeam = JSON.stringify(teamArr)
          } else {
            localStorage.addTeam = JSON.stringify([item])
          }
        }

        const addTeambtn = document.createElement('button')
        addTeambtn.id = ('team-btn')
        addTeambtn.className = 'addteam-Btn'
        addTeambtn.addEventListener('click', addTeam)
        addTeambtn.innerText = "Add To Team"
        
        
        const addteamDiv = document.createElement('div')
        addteamDiv.className = ('c-addteamDiv')

        addteamDiv.append(addTeambtn)
        heroCard.append(addteamDiv)
      
      
      });
    } else {
      const heroCard = document.querySelector('.hero-id')
      heroCard.innerHTML = "Hero or Villain Name Not Found"
    }
  } catch (error) {
    console.log(error);
  }
  button.innerHTML = "Search"
  let searchBar = document.querySelector(".search-bar")
  searchBar.style.marginTop = "0%"
}

// Search Hero or Villain by name in search bar
const button = document.querySelector('#search')
button.addEventListener('click', () => {
  let input = document.querySelector('#input-name').value   
  getHeroId(input)
})


// Remove Hero or Villain after new search
function removeId() {
  const removeId = document.querySelector('.hero-id')
  while (removeId.lastChild) {
    removeId.removeChild(removeId.lastChild)
  }
}


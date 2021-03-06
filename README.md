
# Project Overview

## Project Name

Heroes Vs Villains

## Project Description

This project will be an application that allows users to search their favorite superheroes and villains and returns information on their powerstats, biography, appearance, work, connections, and their picture. It will allow users to get to know their favorite heroes and villains and will give users the option of building a team by choosing four of their favorite heroes to be compared by their powerstats to four randomly chosen villains and vice versa (randomly chosen heroes compared to villains chosen by users). The team with the higher powerstats will be the winner and considered the most powerful team able to defeat the team with the lowest powerstats in a real battle. 

## API and Data Sample

API: https://www.superheroapi.com/api.php/1743621192472664/search/ironman

Data Sample:
```json
{
response: "success",
results-for: "ironman",
results: [
{
id: "732",
name: "Ironman",
powerstats: {
intelligence: "100",
strength: "85",
speed: "58",
durability: "85",
power: "100",
combat: "64"
},
biography: {
full-name: "Tony Stark",
alter-egos: "No alter egos found.",
aliases: [
"Iron Knight",
"Hogan Potts",
"Spare Parts Man",
"Cobalt Man II",
"Crimson Dynamo",
"Ironman"
],
place-of-birth: "Long Island, New York",
first-appearance: "Tales of Suspence #39 (March, 1963)",
publisher: "Marvel Comics",
alignment: "good"
},
appearance: {
gender: "Male",
race: "Human",
height: [
"6'6",
"198 cm"
],
weight: [
"425 lb",
"191 kg"
],
eye-color: "Blue",
hair-color: "Black"
},
work: {
occupation: "Inventor, Industrialist; former United States Secretary of Defense",
base: "Seattle, Washington"
},
connections: {
group-affiliation: "Avengers, Illuminati, Stark Resilient; formerly S.H.I.E.L.D., leader of Stark Enterprises, the Pro-Registration Superhero Unit, New Avengers, Mighty Avengers, Hellfire Club, Force Works, Avengers West Coast, United States Department of Defense.",
relatives: "Howard Anthony Stark (father, deceased), Maria Stark (mother, deceased), Morgan Stark (cousin), Isaac Stark (ancestor)"
},
image: {
url: "https://www.superherodb.com/pictures2/portraits/10/100/85.jpg"
}
}
]
}
```

## Wireframes

- Home page layout: https://i.imgur.com/HSnheZ7.png
- Search result layout: https://i.imgur.com/l6Mq0gl.png
- Your Team layout: https://i.imgur.com/ajb5HRJ.png
- Battle layout: https://i.imgur.com/V5jVPZ0.png

#### MVP 

- Use Axios to make a request to the Superhero API and insert some of the retrieved data on to the DOM.
- Get basic HTML & CSS down
- Create a text input and button for searching the Superhero API by hero or villain name
- Style using Flexbox & Grid
- Implement responsive design using a media query for mobile devices
- JavaScript Functionality:
  - Attach an event listener that logs the text value of the input
  - Make search return information about heroes and villains' powerstats, 
    biography, appearance, work, connections, and their picture
  - Create button that allow user to choose favorite heroes or villains and build a team 
  

#### PostMVP / Future Development 
- Use local storage to save user's team 
- Create "Get To Know Me" button that shows favorite heroe or villain information
- Create remove button to remove favorite heroes or villains from team
- Advanced CSS for search button/loading animation
- Create function to randomly choose heroes and villains
- Create a button and function to compare powerstats of heroes and villains
- Add animations of heroes and villains

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Nov 9| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|Nov 10| Project Approval & HTML & CSS Basic Structure| Complete
|Nov 12| JavaScript Functionality | Complete
|Nov 13| MVP | Complete
|Nov 16| PostMVP | Complete
|Nov 17| Presentations | Complete

## Priority Matrix

Priority Matrix Image Link: https://i.imgur.com/VyhW3Ew.jpg

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| HTML | L | 3hrs| 1hr | 1hr |
| Axios call and API search| H | 3hrs| 6hrs | 6hrs |
| CSS | L | 3hrs| 6hrs | 6hrs |
| Style with flexbox & grid | L | 3hrs| 4hrs | 4hrs |
| Create a text input and button & attach an event listener| H | 3hrs| 1hr | 1hr |
| Make search return information about heroes and villains| H | 3hrs| 4hrs | 4hrs |
| Create button that allow user to choose favorite heroes or villains | H | 3hrs| 4hrs | 4hrs |
| Responsive Design| H | 3hrs| 3hrs | 3hrs |
| Local storage| L | 3hrs| 4hrs | 4hrs |
| Create remove button to remove favorite heroes or villains from team | H | 3hrs| 4hrs | 4hrs |
| Create "Get To Know Me" button that shows favorite heroe or villain information | H | 3hrs| 3hrs | 3hrs |
| Advanced CSS for search button/loading animation | L | 3hrs| 3hrs | 3hrs |
| Total | H | 42hrs| 43hrs | 43hrs |


## Code Snippet

The following is a code snippet of the code I'm most proud of which is the saving team to local storage and creating an "Add To Team" button. This allows users to build a team of  their favorite characters and save it to local storage and be able to view their team in the team.html page.

```json
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
    ocalStorage.addTeam = JSON.stringify([item])
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
```

## Change Log

After finishing MVP I added these features to PostMVP to give users more options.
- Create "Get To Know Me" button that shows favorite heroe or villain information
- Create remove button to remove favorite heroes or villains from team

I added this feature to PostMVP to let users know that their search is being processed.
- Advanced CSS for search button/loading animation
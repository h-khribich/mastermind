let playerNameInput = document.querySelector('input')
let playButton = document.querySelector('.go-play-btn')
let playMenu = document.getElementById('welcome-screen')
let playScreen = document.querySelector('.play-display')
let playerName = document.querySelector('.player-name')
let welcomeText = document.querySelector('.welcome-text')



playButton.addEventListener('click', () => {
    if (playerNameInput.value === ``) {
        welcomeText.textContent = `Please Enter Your Name `
    } else {
        playMenu.style.display = `none`
        playScreen.style.display = `block`
        playerName.textContent = playerNameInput.value
    }
})

let randomColors = ['red','green','yellow','orange','purple','blue']


let getRandomColors = () => {
    randomColors.sort(() => (Math.random() > .5) ? 1 : -1)
    console.log(randomColors);
}
getRandomColors()
















// document.addEventListener('click', musicPlay);
// function musicPlay() {
// document.getElementById('audio').play();
// document.removeEventListener('click', musicPlay);
// }


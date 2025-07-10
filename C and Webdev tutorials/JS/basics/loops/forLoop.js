let sentence =[ "Hello","🤣", "my","name", "is", "Masego"]

let greetingEl = document.querySelector("#greeting-El")

for (let i = 0; i < sentence.length; i ++){
    greetingEl.textContent += sentence[i] + " "
}

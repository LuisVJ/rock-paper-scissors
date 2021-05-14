function computerPlay() {
    const options = ["Rock", "Paper", "Scissors"];
    let index = Math.floor(Math.random() * 3);
    return options[index];
    
}

alert(computerPlay());
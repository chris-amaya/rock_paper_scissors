function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function mod(a, b) {
    const c = a % b
    return (c < 0) ? c + b : c
}

function compare(choice1, choice2) {
    if(!choice1 || !choice2) {
        throw new Error('No values given');
    }

    const choices = ["rock", "paper", "scissors"];
    const x = choices.indexOf(choice1);
    const y = choices.indexOf(choice2);
    if (x === y) {
        return "TIE";
    }
    if (mod((x - y), choices.length) < choices.length / 2) {
        return 'USER_WINS';
    } else {
        return 'COMPUTER_WINS';
    }
}


export {
    getRandomInt,
    compare
}
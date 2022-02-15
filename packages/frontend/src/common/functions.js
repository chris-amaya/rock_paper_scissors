function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

function mod(a, b) {
  const c = a % b
  return c < 0 ? c + b : c
}

function compare(choice1, choice2, option = 'default') {
  if (!choice1 || !choice2) {
    throw new Error('No values given')
  }

  const choices =
    option === 'default'
      ? ['rock', 'paper', 'scissors']
      : ['rock', 'spock', 'paper', 'lizard', 'scissors']

  const x = choices.indexOf(choice1)
  const y = choices.indexOf(choice2)
  if (x === y) {
    return 'TIE'
  }
  if (mod(x - y, choices.length) < choices.length / 2) {
    return 'USER_WINS'
  } else {
    return 'COMPUTER_WINS'
  }
}

function getID() {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return Math.random().toString(36).substr(2, 6)
}

const getComputedSelection = (gameVariation) => {
  const options = ['rock', 'paper', 'scissors', 'spock', 'lizard']
  return options[getRandomInt(0, gameVariation === 'default' ? 3 : 5)]
}

export {getRandomInt, compare, getID, getComputedSelection}

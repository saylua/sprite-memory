// Return a random integer from min (inclusive) to max (inclusive)
export function randomInt(max, min) {
  min = min || 0;
  return Math.floor((Math.random() * ((max - min) + 1)) + min);
}

export function randomSeed() {
  return Math.floor(Math.random() * 10000000000);
}

export function randomChoice(choices) {
  return choices[randomInt(choices.length - 1)];
}

export function chooseWeighted(options) {
  let total = 0;
  for (let i = 0; i < options.length; i++) {
    total += options[i].weight || 1;
  }
  let target = Math.floor((Math.random() * total) + 1);
  let index = 0;
  target -= options[0].weight || 1;
  while (target > 0) {
    index += 1;
    target -= options[index].weight || 1;
  }
  return options[index].value || options[index];
}

export function sRandom(seed) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

// max exclusive, optional min inclusive
export function sRandomInt(seed, max, min) {
  seed = seed || randomSeed();
  min = min || 0;
  return min + Math.floor(sRandom(seed) * (max - min));
}

// http://stackoverflow.com/questions/1026069/capitalize-the-first-letter-of-string-in-javascript
export function capitalizeFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
export function shuffle(array) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}

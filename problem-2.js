
console.log(`Why don't scientists  trust atoms? Because the make up everything.`);

function tellJoke() {
  console.log(`Why don't scientists  trust atoms? Because the make up everything.`);
}

const jokeInerval = setInterval(tellJoke, 2000);

  setTimeout(() => {
    clearInterval(jokeInerval);
  }, 10000);
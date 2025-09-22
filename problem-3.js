const doSomethingWithData = async () => {
  const data = await fetch('https://v2.jokeapi.dev/joke/Any?type=single');

  const convertedData = await data.json();

  showJokes(convertedData);
}

const showJokes = (jokesObj) => {
  const jokesContainer = document.getElementById('jokes-container');
  jokesContainer.innerHTML = "";
  const p = document.createElement('p');
  p.classList.add('jokes-box');
  p.innerText = jokesObj['joke'];

  jokesContainer.appendChild(p);

  console.log(jokesObj);
}

document.getElementById('get-jokes').addEventListener('click', () => {
  doSomethingWithData();
})

// doSomethingWithData();
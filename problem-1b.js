const delayedGreeting = (name, delayTime) => {
  setTimeout(() => {
    console.log('Hello', name);
  }, delayTime);
}

delayedGreeting('Alice', 2000);
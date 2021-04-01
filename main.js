fetch('https://www.reddit.com/.json')
  .then(response => response.text())
  .then((data) => {
    console.log(data)
  })

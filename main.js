fetch('http://34.67.211.117/lol2.txt')
  .then(response => response.text())
  .then((data) => {
    console.log(data)
  })

fetch('http://34.67.211.117/')
  .then(response => response.text())
  .then((data) => {
    console.log(data)
  })

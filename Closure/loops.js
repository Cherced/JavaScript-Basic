const another = () => {
    for (let i = 0; i < 10; i++) {
      setTimeout( () => {
        console.log(i)
      }, 1000)
    }
  }
  
  another()
  //R: 0, 1, 2, 3, ... , 9 bien..

  const another = () => {
    for (var i = 0; i < 10; i++) {
      setTimeout( () => {
        console.log(i)
      }, 1000)
    }
  }
  
  another()
  //R: 10, 10, 10, 10, ... , 10 BIEN
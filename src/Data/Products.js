const Data = [{
    id: 1, 
    title: "Motor", 
    description: "motor sky",
    price: 15000,
    img: "https://acnews.blob.core.windows.net/imgnews/paragraph/NPAZ_2a946c8c18324285965f15998bee6425.jpg",
    category: "MotorRB26"
  },
  {
    id: 2, 
    title: "Motor", 
    description: "motor supra",
    price: 10000,
    img: "https://static.turbosquid.com/Preview/001274/111/7J/_600.jpg",
    category: "Motor2JZ"
  }]

  export const getProducts = new Promise ((resolve, rejected) => {
    let condition = true
    if (condition) {
      setTimeout(()=> {
        resolve(Data)
      }, 4000)
    }else{
      rejected('Algo salio mal!')
    }
  })
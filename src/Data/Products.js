const Data = [
  {
    id: "1", 
    title: "Motor Skyline", 
    description: "El motor Skyline... Mas descripción",
    price: 15000,
    img: "https://acnews.blob.core.windows.net/imgnews/paragraph/NPAZ_2a946c8c18324285965f15998bee6425.jpg",
    category: "motores",
    stock: 10
  },
  {
    id: "2", 
    title: "Motor Supra", 
    description: "Motor Supra... Mas descripción",
    price: 10000,
    img: "https://static.turbosquid.com/Preview/001274/111/7J/_600.jpg",
    category: "motores",
    stock: 15
  },
  {
    id: "3",
    title: "Motor M3",
    description: "Motor M3... Mas descripción",
    price: 20000,
    img: "https://img.remediosdigitales.com/ec0bf4/motor_bmw_m3_v8-6/450_1000.jpg",
    category: "motores",
    stock: 5
  },
  {
    id: "4",
    title: "Suspensión Ferrari",
    description: "Suspensión Ferrari... Mas descripción",
    price: 10000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP28NpWv5FOTgUcwyH0TphAAw0i2u3Y0gaeg&usqp=CAU",
    category: "suspensiones",
    stock: 20
  },
  {
    id: "5",
    title: "Suspensión Toyota",
    description: "Suspensión Toyota... Mas descripción",
    price: 15000,
    img: "https://www.mundorepuesto.com/imgparts/parts/RAN/rs66903r7.jpg",
    category: "suspensiones",
    stock: 25
  }
]
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
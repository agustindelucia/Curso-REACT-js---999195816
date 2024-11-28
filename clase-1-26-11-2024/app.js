//con estos comando puedo manejar elementos del html desde javascript, dandole logica y funcionalidad
const button = document.getElementById("changeColorButton") //variable boton y como llamar el elemento como esta en el index
const body = document.body //traer la referencia del body


const colors = [ //seleccion de 20 colores para que cambie el fondo cuando se apriete el boton
    "#FADADD", "#FFD1DC", "#FFEDB9", "#D5E8D4", "#D4E1F5", 
    "#FBE4E6", "#F3E5F5", "#E1F7D5","#FFF5E1", "#F8E8B0", 
    "#E6F5FA", "#FDE2E2", "#E5F9F7", "#E6E6FA", "#FCE9E9", 
    "#FFE4C4", "#F3E2CF", "#E8DAEF", "#FAF3E3", "#F0FFF0"  
  ];

button.addEventListener("click", () => { //codigo para añadir el evento click en el boton y haga una funcion
    const ramdomColor = colors[Math.floor(Math.random() * colors.length)]

    body.style.backgroundColor = ramdomColor 
  })
  
import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Cuadro } from './components/cuadro'

let turno = "X";

let ganador = false;
const cambiarTurno = () => {
  turno = (turno == "X") ? "O": "X"
}

const verificar = (tablero) => {
  const arreglo1 = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  for (let i = 0; i < arreglo1.length; i++) {
    if ( (tablero[arreglo1[i][0]] == tablero[arreglo1[i][1]]) && (tablero[arreglo1[i][1]] == tablero[arreglo1[i][2]]) && ((tablero[arreglo1[i][0]] != null) && tablero[arreglo1[i][1]] != null && tablero[arreglo1[i][2]]  != null)) {
      return turno;
    }
  }
  return false;
  
}

const verficarEstado = (cuadro) => {
  if (cuadro.innerHTML != "") {
    return false
  }
  return true
}


function App() {
  

    const [ tablero, setTablero ] = useState(Array(9).fill(null))

    const handleBoton = (event, numero) => {
      if (ganador == true) {
        return
      }
      // console.log(event)
      if (verficarEstado(event.target)) {
        let arreglo = tablero.map(cuadro => cuadro)
        arreglo[numero] = turno
        setTablero(arreglo)
      }
    }

    const handleReiniciar = () => {
      setTablero([])
    }

    useEffect(() => {
      if (tablero.length == 0) {
        turno = "X"
        ganador = false;
        return
      }
      console.log(tablero);
      if (verificar(tablero) !== false) {
        alert(turno + " ganó");
        ganador = true;
      }
      cambiarTurno();
    }, [tablero]);
    
    return (
      <div className="contenedor">

      <h1>Tic Tac Toe</h1>

        <div className="ttt">
          
          <Cuadro handleBoton={event => handleBoton(event, 0)} valor={tablero[0]} />
          <Cuadro handleBoton={event => handleBoton(event, 1)} valor={tablero[1]} />
          <Cuadro handleBoton={event => handleBoton(event, 2)} valor={tablero[2]} /> 
          <Cuadro handleBoton={event => handleBoton(event, 3)} valor={tablero[3]} />
          <Cuadro handleBoton={event => handleBoton(event, 4)} valor={tablero[4]} />
          <Cuadro handleBoton={event => handleBoton(event, 5)} valor={tablero[5]} />
          <Cuadro handleBoton={event => handleBoton(event, 6)} valor={tablero[6]} />
          <Cuadro handleBoton={event => handleBoton(event, 7)} valor={tablero[7]} />
          <Cuadro handleBoton={event => handleBoton(event, 8)} valor={tablero[8]} />

        </div>
        <button onClick={handleReiniciar} className='button'>Reiniciar</button>
      </div>
    )
}

export default App

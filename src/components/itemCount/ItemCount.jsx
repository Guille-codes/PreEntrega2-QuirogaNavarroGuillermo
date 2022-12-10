import { useState } from "react"

const Counter = ({ stock, initial }) => {
  const [counter, setCounter] = useState(initial)

  const increment = () => {
    if (counter < stock) {
      setCounter(counter + 1)
    }
  }

  const decrement = () => {
    if (counter > initial) {
      setCounter(counter - 1)
    }
  }

  const onAdd = ( quantity ) => {
    console.log("Tenés una cantidad de: ", quantity)
  }

  return (
    <div>
      <h2>{counter}</h2>

      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={() => onAdd(counter)}>Agregar al carrito</button>
    </div>
  )
}

export default Counter

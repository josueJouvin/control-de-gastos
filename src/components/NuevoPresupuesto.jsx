import React, { useState } from 'react'
import Mensaje from './Mensaje'
const NuevoPresupuesto = ({presupuesto,setPresupuesto, setIsValidPresupuesto}) => {

  const [mensaje, setMensaje] = useState('')

  const handlePresupuesto = (e) =>{
    e.preventDefault();

    if(!Number(presupuesto) || Number(presupuesto) < 0){
      setMensaje('Prosupuesto Invalido')
      return
    }

    console.log(presupuesto)
    setMensaje('')
    setIsValidPresupuesto(true)
  }

  return (
    <div className='contenedor-presupuesto contenedor sombra'>
      <form onSubmit={handlePresupuesto} action="" className='formulario'>
          <div className="campo">
            <label htmlFor="">Definir Presupuesto</label>
            <input type="number"
              className='nuevo-presupuesto'
              placeholder='Añade tu presupuesto'
              value={presupuesto}
              onChange={e => setPresupuesto(Number(e.target.value))}
            />
          </div>

          <input type="submit" value="Añadir"/>
          {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}
      </form>
    </div>
  )
}

export default NuevoPresupuesto
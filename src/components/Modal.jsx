import { useState } from 'react'
import cerrarBtn from '../img/cerrar.svg'
import Mensaje from './Mensaje'

const Modal = ({setModal,animarModal,setAnimarModal, guardarGasto}) => {

    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [categoria, setCategoria] = useState('')
    const [mensaje, setMensaje] = useState('')

    const ocultarModal = () =>{
        setModal(false)

        setTimeout(() =>{
            setAnimarModal(false)
        },500)
    }

    const handleSubmit = e =>{
        e.preventDefault()

        if([nombre, cantidad, categoria].includes('')){
            setMensaje('Todos los campos son obligatorios')
            
            setTimeout(() => {
                setMensaje('')
            }, 2000);
            return
        }

        guardarGasto({nombre,cantidad,categoria})
    }

  return (
    <div className='modal'>
        <div className="cerrar-modal">
            <img 
                src={cerrarBtn} 
                alt="cerrar modal" 
                onClick={ocultarModal}
            />
        </div>

        <form onSubmit={handleSubmit} className={`formulario ${animarModal ? "animar" : "cerrar" }`}>
            <legend>Nuevo Gasto</legend>
            {mensaje ? <Mensaje tipo='error'>{mensaje}</Mensaje> : ''}

            <div className="campo">
                <label htmlFor="nombre">Nombre Gasto</label>
                <input type="text" 
                    placeholder='Añade el nombre del gasto'
                    id='nombre'
                    value={nombre}
                    onChange={ e => setNombre(e.target.value)}
                />
            </div>
            <div className="campo">
                <label htmlFor="cantidad">Cantidad</label>
                <input type="number" 
                    placeholder='Añade la cantidad del gasto'
                    id='cantidad'
                    value={cantidad}
                    onChange={ e => setCantidad(Number(e.target.value))}
                />
            </div>
            <div className="campo">
                <label htmlFor="categoria">Categoria</label>
                
                <select 
                    name="" 
                    id="categoria"
                    value={categoria}
                    onChange={ e => setCategoria(e.target.value)}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="ahorro">Ahorro</option>
                    <option value="comida">Comida</option>
                    <option value="casa">Casa</option>
                    <option value="gastos">Gastos Varios</option>
                    <option value="ocio">Ocio</option>
                    <option value="salud">Salud</option>
                    <option value="suscripciones">Suscripciones</option>
                </select>
            </div>

            <input type="submit" value="Añadir gasto" />
        </form>
    </div>
  )
}

export default Modal
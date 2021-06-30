import React, { useState } from 'react'
import Error from './Error';

const Formulario = () => {

    const[nombre, guardarNombre] = useState('');
    const[cantidad, guardarCantidad] = useState(0);
    const[error, guardarError] = useState(false);

    //cuando user agrega un gasto
    const agregarGasto = e => {
        e.preventDefault();

        //validacion
        if(cantidad < 1 || isNaN(cantidad) || nombre.trim() === ''){
            guardarError(true);
            return;
        }

        //contruye objeto gasto
        const gasto = {
            nombre,
            cantidad,
            id:
        }

        //se envia al componente principal

        //reset form
    }

    return (
        <form
            onSubmit={agregarGasto}
        >
            <h2>Ingresa tus gastos aquí</h2>

            {error ? <Error mensaje="Ambos campos son obligatorios o el Presupuesto es Incorrecto" /> : null}

            <div className="campo">
                <label>Nombre Gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="ej: Transporte"
                    value={nombre}
                    onChange={e => guardarNombre(e.target.value)}
                />
            </div>

            <div className="campo">
                <label>Cantidad del Gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="ej: 500"
                    value={cantidad}
                    onChange={e => guardarCantidad(parseInt(e.target.value, 10))}
                />
            </div>

            <input
                type="submit"
                className="button-primary u-full-width"
                value="Agregar Gasto"
            />    
        </form>
      );
}
 
export default Formulario;


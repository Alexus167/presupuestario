import React, { Fragment, useState } from 'react';
import Error from './Error';


const Pregunta = ({guardarPresupuesto, guardarRestante, actualizarPregunta }) => {
   
    //states
    const [ cantidad, guardarCantidad ] = useState(0);
    const [error, guardarError] = useState(false);
    
    //Lee el presupuesto
    const definirPresupuesto = e => {
        guardarCantidad(parseInt(e.target.value, 10))
    }

    //define el presupuesto con submit
    const agregarPresupuesto = e => {
        e.preventDefault();

        //vaidacion
        if(cantidad < 1 || isNaN(cantidad)) {
            guardarError(true);
            return;
        }
        //si pasa validacion
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarPregunta(false);
    }

    return ( 
        <Fragment>
            <h2> Ingresa tu presupuesto</h2>

            {error ? <Error mensaje= "El Presupuesto es incorrecto" /> : null}

            <form
                onSubmit={agregarPresupuesto}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ingresa tu presupuesto"
                    onChange={definirPresupuesto}
                />

                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir presupuesto"
                />    
            </form>

        </Fragment>



     );
}
 
export default Pregunta;
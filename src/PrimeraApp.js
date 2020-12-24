//import React, { Fragment } from 'react';
import React from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ({saludo, subtitulo='valor por defecto',equipo}) =>{

  //  const saludar = 'hola ';
    /*const saludo = {
        nombre:'Rosie',
        edad:23
    }*/

    return (
        <>
            <h1>{saludo}</h1>
            {/* <pre>JSON.stringify(saludo, null, 3)</pre> */}
            <p>{subtitulo}</p>
            <hr></hr>
            <p>{equipo}</p>
        </>
    );
            
}

//definir que tipo de variable va a recibir el componente
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired,
    subtitulo: PropTypes.string,
   
}

//valor por defecto que va a tener el componente
PrimeraApp.defaultProps = {
    equipo:'Real madrid'
}

export default PrimeraApp;
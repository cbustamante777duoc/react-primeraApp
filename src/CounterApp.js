import React, {useState} from 'react';
import PropTypes from 'prop-types';
//snippet para crear todo rapido es rafc



const CounterApp = ({ value=10 }) => {

    const [counter, setCounter] = useState(value);
    


    //evento de mouse
    const handleAdd = ()=>{
        setCounter(counter+1);
      //  setCounter((counter)=> counter +1 );
    }

    const handleLess = ()=>{
        setCounter(counter-1);
      //  setCounter((counter)=> counter  -1 );
    }

    //funcion que recibe el value del componente
    const handleReset = ()=>{
       setCounter(value);
      // setCounter(()=> value  );
    }


    return (
        <>
            <h1>CounterApp</h1>

            <p>{counter}</p>

            <button onClick={ handleAdd} >1+</button>
            <button onClick={ handleLess} >-1</button>
            <button onClick={handleReset} >reset</button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number

}


export default CounterApp;
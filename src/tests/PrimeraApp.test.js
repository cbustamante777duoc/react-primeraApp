import React from 'react';
import PrimeraApp from "../PrimeraApp";
import {shallow} from 'enzyme';

describe('Pruebas en <PrimeraApp/>', () => {
    // test('debe de mostrar el mensaje "hola, jennie"', () => {

    //     const saludo = 'hola, jennie';
    //     //destruturacion
    //     const {getByText} = render(<PrimeraApp saludo={saludo}/>);
    //     //pregunta si el contenido de la variable saludo se encuentra en html
    //     expect(getByText(saludo )).toBeInTheDocument();

    // })
    test('debe de mostrar la <PrimeraApp/> correctamente', () => {
        const saludo = 'hola, jennie';
        const wrapper = shallow(<PrimeraApp saludo={saludo}/>)

        expect(wrapper).toMatchSnapshot();

    })
    
    
})

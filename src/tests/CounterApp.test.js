import React from 'react';
import { shallow } from "enzyme";
import CounterApp from "../CounterApp";

describe('pruebas en el <CounterApp/> ', () => {

    let wrapper = shallow(<CounterApp/>);

    beforeEach(()=>{
        //el beforeEach cada ves que se ejecuta una prueba se ejecuta y eso hace que se 
        //receinice el componente con sus valores por defecto
        wrapper = shallow(<CounterApp/>);
    })
    
  

    test('debe mostrar los valores correctamente de <CounterApp/> en snapshot ', () => {

        expect(wrapper).toMatchSnapshot();
        
    });

    test('debe de mostrar el valor por defecto de 100', () => {
        const wrapper = shallow(<CounterApp value={100}/>);

        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('100');

        
    })

    test('debe de incrementar con el boton de +1', () => {
        //toma el primer boton del CounterApp
        //const btnSuma = wrapper.find('button').at(0);
        wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('11');
        //console.log(btnSuma.html());    
    })

    test('debe de disminuir con el boton de -1', () => {
      
        
        wrapper.find('button').at(1).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('9');
        
    })

    test('debe poner el valor por defecto con el btn reset ', () => {
        const wrapper = shallow(<CounterApp value={110}/>);
        //primero se llama al boton de sumar para aumentar +1 = 111
        wrapper.find('button').at(0).simulate('click');
        //ahora se llama al boton de reiniciar = 110
        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('110');
    })
    
    
    
    
    
})

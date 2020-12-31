import '@testing-library/jest-dom';

import { getSaludo } from "../../base-pruebas/02-template-string";

describe('pruebas de 02-template-string.js',()=>{

    test('pruebas en el metodo getSaludo', () => {

        const nombre = 'cristian';

        const saludo = getSaludo(nombre);

        expect(saludo).toBe('Hola ' + nombre );
    });

    test('prueba debe decir hola jennie', () => {
        
        const saludo = getSaludo();

        expect(saludo).toBe('Hola jennie');
        
    });
    
    
})
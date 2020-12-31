import '@testing-library/jest-dom';
import { retornaArreglo } from '../../base-pruebas/07-deses-arr';


describe('Pruebas en el archivo 07-deses-arr.js', () => {
    
    test('debe de retornar un arreglo con un string y un numero', () => {
        
        const [letras,numeros] = retornaArreglo();

        expect(letras).toBe('ABC');
        expect( typeof letras).toBe('string');
        
        expect(numeros).toBe(123);
        expect(typeof numeros).toBe('number');

        //funciona pero esta es otra manera de hacerlo
        //expect(arreglo).toEqual(['ABC', 123]);
    })
    


})

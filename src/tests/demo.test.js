describe('pruebas en el archivo demo.test.js', ()=>{

    test('debe ser iguales los string', () => {
        //1.iniciacion
    
        const mensaje = 'hola mundo';
    
        //2.estimulo
        const mensaje2 = `hola mundo`;
    
        expect(mensaje).toBe(mensaje2);
    
    })
});



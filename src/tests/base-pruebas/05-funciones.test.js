import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones"

describe('pruebas en 05-funciones', () => {

    test('debe de retornar un objeto', () => {

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();
        expect(user).toEqual(userTest);
    })

    test('prueba sobre el metodo getUserActivo', () => {

        const nombre = 'Jennie';
        const usuario = getUsuarioActivo(nombre);

        expect(usuario).toEqual({
            uid: 'ABC567',
            username: nombre
        });

    })


})

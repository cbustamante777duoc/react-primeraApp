import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas";
import heroes from "../../data/heroes";

describe('Pruebas al archivo promesas.js', () => {

    test('el metodo getHeroeByIdAsync debe retornar un HeroeAsync', (done) => {
        //este numero tiene que considir con el numero del arreglo
        const id = 5;
        getHeroeByIdAsync(id).then(heroe => {
            //recueda poner el [0] sino te trae todo el arreglo comploto por eso fallaba
            expect(heroe).toBe(heroes[4]);

            //el done sirve para decir que debe esperar a que termine el proceso
            done();
        });
    });

    test('el metodo getHeroeByIdAsync debe retornar un mensaje No se pudo encontrar el héroe', (done) => {
        const id = 69;

        getHeroeByIdAsync(id)
            .catch(error => {
                //este mensaje de error se espera
                expect(error).toBe('No se pudo encontrar el héroe');
                done();
            });
    });
});



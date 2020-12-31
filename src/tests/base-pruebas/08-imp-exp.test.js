import '@testing-library/jest-dom';
import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en funciones de heroes', () => {
    
    test('debe de retornar un heroe por id', () => {
        const id = 5;
        const heroe = getHeroeById(id);

        //si iguala al heroe
        const HeroeData = heroes.find(h=> h.id === id);

        expect(heroe).toEqual(HeroeData);
    });

    test('debe de retornar un undefined si heroe no existe', () => {
        const id = 10;
        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined);

    })

    test('debe de retornar un arreglo con los heroes de DC ', () => {
        const Owner = 'DC';
        const HeroesOwenerTest = getHeroesByOwner(Owner);
        //igualamos los arreglos 
        const heroesTest = heroes.filter( h => h.owner === Owner );
        expect(HeroesOwenerTest).toEqual(heroesTest);
    })

    test('debe retornar 2 elemento el arreglo filtrador por la variable Marvel', () => {
        const Owner = 'Marvel';
        const heroes = getHeroesByOwner(Owner);
        expect(heroes.length).toBe(2);
    })
    
    
    
})

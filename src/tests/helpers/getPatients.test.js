import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { getPatients } from '../../helpers/getPatients';


describe('Pruebas en <NutrialusTestApp />', () => {
    
    test(' Debe de traer la data ', async() => {
        
        const patient = await getPatients();  
        expect( typeof patient ).toBe('object');
    });
    
    
    test('El objeto debe tener nombre, correo, celular, imagen, nutricionista', async() => {

        const patient = await getPatients();  

        expect( typeof patient.name ).toBe('string');
        expect( typeof patient.email ).toBe('string');
        expect( typeof patient.phone ).toBe('string');
        expect( patient.image.includes('http://') ).toBe(true);
        expect( typeof patient.nutritionist ).toBe('string');

    })
    
    
});

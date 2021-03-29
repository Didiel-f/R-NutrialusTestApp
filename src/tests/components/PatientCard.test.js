import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { PatientCard } from '../../components/PatientCard';

describe('Pruebas en <PatientCard />', () => {

    
    test('Debe crear las etiquetas html correspondientes a nombre, nutricionista, correo y celular', () => {
        const wrapper = shallow( <PatientCard /> );
        
        expect( wrapper.find('img').exists() ).toBe(true);
        expect( wrapper.find('h2').at(0).exists() ).toBe(true);
        expect( wrapper.find('small').at(0).exists() ).toBe(true);
        expect( wrapper.find('small').at(1).exists() ).toBe(true);
        
    });

    
});

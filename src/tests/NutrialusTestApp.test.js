import '@testing-library/jest-dom';
import { NutrialusTestApp } from '../NutrialusTestApp';
import { shallow } from 'enzyme';
import { PatientCard } from '../components/PatientCard';

describe('Pruebas en <NutrialusTestApp />', () => {

    
    
    test(' Debe de mostrar <NutrialusTestApp /> correctamente ', () => {
        
        const wrapper = shallow( <NutrialusTestApp /> )

        expect( wrapper ).toMatchSnapshot();
    });

});

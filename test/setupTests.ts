import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

console.debug("setting up enzyme adapter");
Enzyme.configure({ adapter: new Adapter() });
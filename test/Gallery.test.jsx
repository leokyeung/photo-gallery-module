import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import Gallery from '../client/src/components/Gallery.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('Gallery component', () => {
  
  
    it('should render the PhotoGrid component', () => {
    const wrapper = shallow(<Gallery  />);
      expect(wrapper.exists()).toBe(true);
    });
  
   
  });
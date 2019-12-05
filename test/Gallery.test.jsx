import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import Gallery from '../client/src/components/Gallery.jsx';
import SampleData from '../client/src/components/SampleData.js';

Enzyme.configure({ adapter: new Adapter() });

describe('Gallery component', () => {
  
    const { data } = SampleData; 
    const wrapper = shallow(<Gallery pictures={data} />);

    it('should render the Gallery component', () => {
      expect(wrapper.exists()).toBe(true);
    });

    it('should render one photo in the Main Image Section', () => {
        expect(wrapper.find('.mainImage')).toHaveLength(1);
    });

    it('should render one photo in the Second Image Section', () => {
        expect(wrapper.find('.secondImage')).toHaveLength(1);
    });

    it('should render one photo in the Third Image Section', () => {
        expect(wrapper.find('.thirdImage')).toHaveLength(1);
    });
   
    it('should render one photo in the Fourth Image Section', () => {
        expect(wrapper.find('.fourthImage')).toHaveLength(1);
    });

    it('should render one photo in the Fifth Image Section', () => {
        expect(wrapper.find('.fifthImage')).toHaveLength(1);
    });
});
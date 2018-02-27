import React from 'react';
import { shallow } from 'enzyme';
import chai ,{expect}from 'chai';
import sinon from 'sinon';
import Dashboard from './DashBoard';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Component:Dashboard', () => {
    it('renders the dashboard', () =>{
        const wrapper = shallow(<Dashboard />);
        expect(wrapper.find('h4').text()).equal("DashBoard")
    })
});
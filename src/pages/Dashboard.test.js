import 'jsdom-global/register'; //at the top of file , even  , before importing react
import React from 'react';

import sinon from 'sinon';
import chai, {expect} from 'chai';

import { configure } from 'enzyme';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import configureStore from 'redux-mock-store';

import ConnectedDashBoard, {DashBoard} from './DashBoard';
import {addModule, removeModule} from '../actions/index';
import {ADD_MODULE, REMOVE_MODULE} from '../constants/action-types';
import rootReducer from "../reducers/index";
import thunk from 'redux-thunk';


configure({ adapter: new Adapter() });

describe('Component:Dashboard', () => {

    const shallowWrapper = shallow(<DashBoard />)
    const mountedWraper = mount(<DashBoard />)

    describe('Dashboard unit tests', () =>{
        it('renders the dashboard', () =>{
            expect(mount).to.not.be.undefined
        })
        it('contains grid component', () =>{
            expect(mountedWraper.children).to.be.lengthOf(1)
        })
        it('grid component has a prop modules', () => {
            expect(mountedWraper.find('Grid').props()).to.have.key('modules')
        })
    })

    describe("Dashboard utility tests", () => {
        const initalState = { modules:["todos"] }
        const mockStore = configureStore()

        let store, container

        beforeEach(() =>{
            store = mockStore(initalState)
            container = mount(<Provider store={store}><ConnectedDashBoard /></Provider>)
        })

        it('checks if props match with initial store state', () => {
            expect(container.find(DashBoard).prop('modules')).to.be.equal(initalState.modules)
        })

        it('check if props passed to grid are correct', () => {
            expect(container.find('Grid').prop('modules')).to.be.equal(initalState.modules)
        })

        it("check action dispatch", () => {
            let action
            store.dispatch(addModule("blogs"))
            store.dispatch(removeModule("todos"))
            
            action = store.getActions()

            expect(action[0].type).to.be.equal(ADD_MODULE)
            expect(action[1].type).to.be.equal(REMOVE_MODULE)

        })
    })
});
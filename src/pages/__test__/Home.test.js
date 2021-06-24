import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Home from '../Home'

Enzyme.configure({ adapter: new Adapter()})

describe('When App renders', () => {
    it('provides a route "/" to the home component', () => {
        const renderedApp = shallow(<Home/>)
        const renderedHomeRoute = renderedApp.find("h1")
        expect(renderedHomeRoute.text()).toEqual("this is my home page")

       
    })
})
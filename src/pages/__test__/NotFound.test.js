import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import NotFound from '../NotFound'

Enzyme.configure({ adapter: new Adapter()})

describe('When App renders', () => {
    it('provides a route "/NotFound" to the notfound component', () => {
        const renderedApp = shallow(<NotFound/>)
        const renderedNotFoundRoute = renderedApp.find("h1")
        expect(renderedNotFoundRoute.text()).toEqual("!!!No Heroes Here!!!")

       
    })
})
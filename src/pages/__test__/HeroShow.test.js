import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import HeroShow from '../HeroShow'

Enzyme.configure({ adapter: new Adapter()})

describe('When App renders', () => {
    it('provides a route "/HeroShow" to the heroshow component', () => {
        const renderedApp = shallow(<HeroShow/>)
        const renderedHeroShowRoute = renderedApp.find("h1")
        expect(renderedHeroShowRoute.text()).toEqual("this is my heroshow page")

       
    })
})
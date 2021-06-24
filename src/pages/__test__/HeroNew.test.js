import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import HeroNew from '../HeroNew'

Enzyme.configure({ adapter: new Adapter()})

describe('When App renders', () => {
    it('provides a route "/HeroNew" to the heronew component', () => {
        const renderedApp = shallow(<HeroNew/>)
        const renderedHeroNewRoute = renderedApp.find("h1")
        expect(renderedHeroNewRoute.text()).toEqual("this is my heronew page")

       
    })
})
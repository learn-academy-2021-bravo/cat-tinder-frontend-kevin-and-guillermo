import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import HeroIndex from '../HeroIndex'

Enzyme.configure({ adapter: new Adapter()})

describe('When App renders', () => {
    it('provides a route "/HeroIndex" to the heroindex component', () => {
        const renderedApp = shallow(<HeroIndex/>)
        const renderedHeroIndexRoute = renderedApp.find("h1")
        expect(renderedHeroIndexRoute.text()).toEqual("this is my heroindex page")

       
    })
})
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import HeroEdit from '../HeroEdit'

Enzyme.configure({ adapter: new Adapter()})

describe('When App renders', () => {
    it('provides a route "/HeroEdit" to the heroedit component', () => {
        const renderedApp = shallow(<HeroEdit/>)
        const renderedHeroEditRoute = renderedApp.find("h1")
        expect(renderedHeroEditRoute.text()).toEqual("this is my heroedit page")

       
    })
})
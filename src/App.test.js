import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Home from './pages/Home'

Enzyme.configure({ adapter: new Adapter()})
describe('When App renders', () => {
  it('displays a Header and a Footer', () => {
  const renderedApp = shallow(<App/>)
  const renderedHeader = renderedApp.find('Header') 
  const renderedFooter = renderedApp.find('Footer') 
  expect(renderedHeader.length).toEqual(1)
  expect(renderedFooter.length).toEqual(1)
  })
})


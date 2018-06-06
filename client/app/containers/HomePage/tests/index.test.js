/**
 * Test the HomePage
 */

import React from 'react';
import { mount, shallow } from 'enzyme';

import HomePage from '../HomePage';

describe('<HomePage />', () => {
  it('should start the fetch interval', () => {
    const wrapper = mount(<HomePage />);
    expect(wrapper.state('intervalId')).toBeDefined();
  });

  it('should render a component', () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper.length).toEqual(1);
  });
});

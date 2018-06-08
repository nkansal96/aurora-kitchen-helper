import React from 'react';
import { shallow } from 'enzyme';

import Footer from '../index';

describe('<Footer />', () => {
  it('should render the team name', () => {
    const renderedComponent = shallow(<Footer />);
    expect(renderedComponent.text()).toEqual(
      expect.stringContaining('Dr. Eggman\'s A Team')
    );
  });
});

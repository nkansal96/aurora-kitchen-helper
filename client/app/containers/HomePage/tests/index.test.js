/**
 * Test the HomePage
 */

import React from 'react';
import { mount } from 'enzyme';

import HomePage from '../HomePage';

describe('<HomePage />', () => {
  it('should render fetch the repos on mount if a username exists', () => {
    const submitSpy = jest.fn();
    mount(
      <HomePage
        username="Not Empty"
        onChangeUsername={() => {}}
        onSubmitForm={submitSpy}
      />
    );
    expect(submitSpy).toHaveBeenCalled();
  });

  it('should not call onSubmitForm if username is an empty string', () => {
    const submitSpy = jest.fn();
    mount(<HomePage onChangeUsername={() => {}} onSubmitForm={submitSpy} />);
    expect(submitSpy).not.toHaveBeenCalled();
  });

  it('should not call onSubmitForm if username is null', () => {
    const submitSpy = jest.fn();
    mount(
      <HomePage
        username=""
        onChangeUsername={() => {}}
        onSubmitForm={submitSpy}
      />
    );
    expect(submitSpy).not.toHaveBeenCalled();
  });
});

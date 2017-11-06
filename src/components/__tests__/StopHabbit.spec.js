
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import StopHabbit from './../StopHabbit';
import { Habit } from '../../constants/habit';

Enzyme.configure({ adapter: new Adapter() });


describe('stop an habbit', () => {
  it('Should render a stop habbit component', () => {
    const wrapper = shallow(<StopHabbit />);

    const component = wrapper.find('Icon');

    expect(component.length).toBe(1);
  });

  it('Should disable stop icon when I stop an habbit', () => {
    const habbit = new Habit('Drinking coffee');
    const wrapper = shallow(<StopHabbit habbit={habbit} />);
  });
});

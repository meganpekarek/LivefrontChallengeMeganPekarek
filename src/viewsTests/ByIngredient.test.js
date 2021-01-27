import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {shallow, configure} from 'enzyme';
import ByIngredient from '../views/ByIngredient';

configure({adapter: new Adapter()});
test('ByIngredient view displays properly', () => {

  const byIngredient = shallow(<ByIngredient />);

  expect(byIngredient.find('.app__cardsContainer')).toHaveLength(1);
});
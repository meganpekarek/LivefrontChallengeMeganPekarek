import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {shallow, mount, configure} from 'enzyme';
import ByIngredient from '../views/ByIngredient';

configure({adapter: new Adapter()});

describe('ByIngredient', () => {
  it('displays proper elements', () => {

    const byIngredient = shallow(<ByIngredient />);
    
    expect(byIngredient.find('PageHeader')).toHaveLength(1);
    expect(byIngredient.find('.app__cardsWrapper')).toHaveLength(1);
    expect(byIngredient.find('.app__cardsContainer')).toHaveLength(1);
    expect(byIngredient.find('TextCardLoader')).toHaveLength(16);
  });
});
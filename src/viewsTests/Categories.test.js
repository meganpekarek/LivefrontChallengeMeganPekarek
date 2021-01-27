import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {shallow, mount, configure} from 'enzyme';
import Categories from '../views/Categories';

configure({adapter: new Adapter()});

describe('Categories', () => {
  it('displays proper elements', () => {

    const categories = shallow(<Categories />);
    
    expect(categories.find('PageHeader')).toHaveLength(1);
    expect(categories.find('.app__cardsWrapper')).toHaveLength(1);
    expect(categories.find('.app__cardsContainer')).toHaveLength(1);
  });
});
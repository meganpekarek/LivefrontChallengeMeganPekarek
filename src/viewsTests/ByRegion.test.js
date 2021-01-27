import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {shallow, mount, configure} from 'enzyme';
import ByRegion from '../views/ByRegion';

configure({adapter: new Adapter()});

describe('ByRegion', () => {
  it('displays proper elements', () => {

    const byRegion = shallow(<ByRegion />);
    
    expect(byRegion.find('PageHeader')).toHaveLength(1);
    expect(byRegion.find('.app__cardsWrapper')).toHaveLength(1);
    expect(byRegion.find('.app__cardsContainer')).toHaveLength(1);
  });
});
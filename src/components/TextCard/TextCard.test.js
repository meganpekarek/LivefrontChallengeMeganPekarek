import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import TextCard from './TextCard';

configure({ adapter: new Adapter() });

describe('TextCard', () => {
  it('displays correct title', () => {

    const cardText = "test header";

    const textCard = shallow(<TextCard cardText={cardText} />);

    expect(textCard.find('.textCard__header').text()).toEqual('test header');
  });
});
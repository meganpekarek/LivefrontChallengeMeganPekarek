import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import TextCardLoader from './TextCardLoader';

configure({ adapter: new Adapter() });

describe('TextCardLoader', () => {
  it('displays correct elements while loading', () => {

    const textCardLoader = shallow(<TextCardLoader />);

    expect(textCardLoader.find('.textCard__wrapper')).toHaveLength(1);
    expect(textCardLoader.find('.textCard__header')).toHaveLength(1);
  });
});
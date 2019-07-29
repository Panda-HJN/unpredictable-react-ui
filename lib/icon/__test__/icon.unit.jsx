import * as renderer from 'react-test-renderer';
import React from 'react';
import Icon from '../icon';
import {mount} from 'enzyme';


describe('icon 的简单测试', () => {
    it('渲染是否成功', () => {
        const json = renderer.create(<Icon name="code"/>).toJSON();
        expect(json).toMatchSnapshot();
    });
    it('点击是否被响应', () => {
        const fn = jest.fn();
        const component = mount(<Icon name="code" onClick={fn}/>);
        component.find('svg').simulate('click');
        expect(fn).toBeCalled();
    });
});

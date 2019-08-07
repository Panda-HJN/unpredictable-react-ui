import * as renderer from 'react-test-renderer';
import React from 'react';
import Button from '../button';
import {mount} from 'enzyme';


describe('Button 的简单测试', () => {
    it('渲染是否成功', () => {
        const json = renderer.create(<Button/>).toJSON();
        expect(json).toMatchSnapshot();
    });
});

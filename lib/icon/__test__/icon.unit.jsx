import * as renderer from 'react-test-renderer'
import React from 'react'
import Icon from '../icon'
import {mount} from 'enzyme'


describe('icon 测试',()=>{
    it('渲染成功', () => {
        const json = renderer.create(<Icon name="code"/>).toJSON()
        expect(json).toMatchSnapshot()
    });
    it('onClick', () => {
        const fn = jest.fn()
        const component = mount(<Icon name="code" onClick={fn}/>)
        component.find('svg').simulate('click');
        expect(fn).toBeCalled()
    })
});

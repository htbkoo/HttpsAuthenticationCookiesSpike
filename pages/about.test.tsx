import React from "react";
import {shallow} from 'enzyme';

import About from './about';

describe("<about/>", function () {
    it("should shallow render", function () {
        // given
        // when
        let wrapper = shallow(<About/>);

        // then
        expect(wrapper.text()).toContain('about page');
    })
});
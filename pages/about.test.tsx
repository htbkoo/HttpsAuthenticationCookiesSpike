import React from "react";
import {shallow} from 'enzyme';

import About from './about';
import Layout from "../components/MyLayout";

describe("<about/>", function () {
    it("should shallow render", function () {
        // given
        // when
        let wrapper = shallow(<About/>);

        // then
        expect(wrapper.find(Layout)).toHaveLength(1);
    })
});
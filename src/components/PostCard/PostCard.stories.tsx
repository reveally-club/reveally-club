import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Component from '.';

export default {
    title: 'PostCard',
    component: Component,
} as ComponentMeta<typeof Component>;

export const Template: ComponentStory<typeof Component> = (args) => {
    return (
        <MemoryRouter>
            <Component {...args} />
        </MemoryRouter>
    )
}

export const Default = Template.bind({});
Template.args = {
    content: "Test",
};
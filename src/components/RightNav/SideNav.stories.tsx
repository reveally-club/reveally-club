import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Component from '.';
import { Provider } from 'react-redux';
import store from '../../state';

export default {
    title: 'SideNav',
    component: Component,
    decorators: [
        (Story) => (
            <Provider store={store}>
                <Story />
            </Provider>
        )
    ]
} as ComponentMeta<typeof Component>;

export const Default: ComponentStory<typeof Component> = () => {
    return (
        <MemoryRouter>
            <Component />
        </MemoryRouter>
    )
}
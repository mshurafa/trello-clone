import { AvatarIcon } from "../common";
import type { Meta, StoryObj } from '@storybook/react';
import { Preview } from '@storybook/react';

const meta: Meta<typeof AvatarIcon> = {
    component: AvatarIcon,
};

export const preview: Preview = {
    parameters: {
        layout: 'centered',
    },
}
export default meta;

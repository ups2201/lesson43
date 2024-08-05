import type { Meta, StoryObj } from '@storybook/react';

import {SpaceBlockComponent} from "./SpaceBlockComponent";

const meta: Meta<typeof SpaceBlockComponent> = {
  component: SpaceBlockComponent,
};

export default meta;
type Story = StoryObj<typeof SpaceBlockComponent>;

export const SpaceBlock: Story = {
  args: {}
};


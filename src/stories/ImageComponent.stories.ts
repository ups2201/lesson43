import type { Meta, StoryObj } from '@storybook/react';

import {ImageComponent} from "./ImageComponent";

const meta: Meta<typeof ImageComponent> = {
  component: ImageComponent,
};

export default meta;
type Story = StoryObj<typeof ImageComponent>;

export const WrappingLeft: Story = {
  args: {
    text: "Текст рядом с изображением",
    type: "left",
    src: "./src/stories/image.PNG",
  }
};

export const WrappingRight: Story = {
  args: {
    text: "Текст рядом с изображением",
    level: "right",
    src: "./src/stories/image.PNG",
  }
};
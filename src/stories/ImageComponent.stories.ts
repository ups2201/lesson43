import type { Meta, StoryObj } from '@storybook/react';

import {ImageComponent} from "./ImageComponent";
// import "./src/stories/image.PNG";
// import imageFile from "./image.PNG";

const meta: Meta<typeof ImageComponent> = {
  component: ImageComponent,
};

export default meta;
type Story = StoryObj<typeof ImageComponent>;

export const WrappingLeft: Story = {
  args: {
    text: "Текст рядом с изображением",
    type: "left",
    src: "./image.png",
  }
};

export const WrappingRight: Story = {
  args: {
    text: "Текст рядом с изображением",
    level: "right",
    src:  "./image.png",
  }
};
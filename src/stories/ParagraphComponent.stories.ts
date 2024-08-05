import type { Meta, StoryObj } from '@storybook/react';

import {ParagraphComponent} from "./ParagraphComponent";

const meta: Meta<typeof ParagraphComponent> = {
  component: ParagraphComponent,
};

export default meta;
type Story = StoryObj<typeof ParagraphComponent>;

export const Normal: Story = {
  args: {
    text: "Обычный параграф",
  }
};

export const Bold: Story = {
  args: {
    type: "bold",
    text: "Получжирный параграф",
  }
};

export const Italic: Story = {
  args: {
    type: "quote",
    text: "Цитатный параграф",
  }
};


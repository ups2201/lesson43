import type { Meta, StoryObj } from '@storybook/react';

import {HeaderComponent} from "./HeaderComponent";

const meta: Meta<typeof HeaderComponent> = {
  component: HeaderComponent,
};

export default meta;
type Story = StoryObj<typeof HeaderComponent>;

export const Level1: Story = {
  args: {
    level: 1,
    text: "Заголовок 1 уровня",
  }
};

export const Level2: Story = {
  args: {
    level: 2,
    text: "Заголовок 2 уровня",
  }
};

export const Level3: Story = {
  args: {
    level: 3,
    text: "Заголовок 3 уровня",
  }
};

export const Level4: Story = {
  args: {
    level: 4,
    text: "Заголовок 4 уровня",
  }
};

export const Level5: Story = {
  args: {
    level: 5,
    text: "Заголовок 5 уровня",
  }
};

export const Level6: Story = {
  args: {
    level: 6,
    text: "Заголовок 6 уровня",
  }
};


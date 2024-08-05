import type { Meta, StoryObj } from '@storybook/react';

import {AccordionComponent} from "./AccordionComponent";

const meta: Meta<typeof AccordionComponent> = {
  component: AccordionComponent,
};

export default meta;
type Story = StoryObj<typeof AccordionComponent>;

export const Accordion: Story = {
  args: {
    title: "Заголовок компонента",
    text: "Схлопывающийся текст",
  }
};

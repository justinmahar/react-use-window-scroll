import type { Meta, StoryObj } from '@storybook/react';
import { UseScrollToStoryComponent } from './UseScrollToStoryComponent';

// === Setup ===
const StoryComponent = UseScrollToStoryComponent; // <-- Set to your component
const meta: Meta<typeof StoryComponent> = {
  title: 'Stories/useScrollTo', // <-- Set to your story title
  component: StoryComponent,
  parameters: {
    options: { showPanel: false }, // Don't show addons panel
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

// === Stories ===
export const HookVisual: Story = {};

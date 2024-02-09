import type { Meta, StoryObj } from '@storybook/react';
import { UseScrollByStoryComponent } from './UseScrollByStoryComponent';

// === Setup ===
const StoryComponent = UseScrollByStoryComponent; // <-- Set to your component
const meta: Meta<typeof StoryComponent> = {
  title: 'Stories/useScrollBy', // <-- Set to your story title
  component: StoryComponent,
  parameters: {
    options: { showPanel: false }, // Don't show addons panel
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

// === Stories ===
export const HookVisual: Story = {};

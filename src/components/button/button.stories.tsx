import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from './button'

const meta: Meta<ButtonProps> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Clique aqui',
    variant: 'primary',
    size: 'md',
    shape: 'normal',
  },
  argTypes: {
    onClick: { action: 'clicked' },
  },
}

export default meta
type Story = StoryObj<ButtonProps>

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
}

export const Danger: Story = {
  args: {
    variant: 'danger',
  },
}

export const Success: Story = {
  args: {
    variant: 'success',
  },
}

export const Warning: Story = {
  args: {
    variant: 'warning',
  },
}

export const Link: Story = {
  args: {
    variant: 'link',
  },
}

export const Bordered: Story = {
  args: {
    variant: 'bordered',
  },
}

export const Unstyled: Story = {
  args: {
    variant: 'unstyled',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const Loading: Story = {
  args: {
    loading: true,
  },
}

export const AllSizes: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      {(['xs', 'sm', 'md', 'lg', 'icon', 'no-spacing'] as const).map((size) => (
        <Button key={size} {...args} size={size}>
          {size === 'icon' ? '🔔' : `Tamanho ${size}`}
        </Button>
      ))}
    </div>
  ),
}

export const PillShape: Story = {
  args: {
    shape: 'pill',
    children: 'Pílula',
  },
}

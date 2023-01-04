import React from 'react';

import MdMinusIcon from '../../packages/react/src/icons/MdMinusIcon';
import MdMinusIcon64 from '../../packages/react/src/icons/MdMinusIcon64';

export default {
  title: 'Icons/MinusIcon',
  component: MdMinusIcon,
  parameters: {
    docs: {
      description: {
        component: 'Minus/remove/collapse icon. Color is inherited from parent.',
      },
    },
  },
  argTypes: {
    className: {
      description: "Classes for svg icon",
      table: {
        type: {
          summary: 'text',
        },
      },
      control: 'text'
    },
    color: {
      description: "Set color of parent (for example purposes)",
      table: {
        type: {
          summary: 'text',
        },
      },
      control: 'color'
    }
  }
};

const Template = (args: any) => {
  return (
    <div style={{ width: '32px', height: '32px', color: args.color }}>
      <MdMinusIcon className={args.className} />
    </div>
  );
}

const Template64 = (args: any) => {
  return (
    <div style={{ width: '64px', height: '64px', color: args.color }}>
      <MdMinusIcon64 className={args.className} />
    </div>
  );
}

export const MinusIcon = Template.bind({})
MinusIcon.args = {
  className: '',
  color: '#005e5d'
};

export const MinusIcon64 = Template64.bind({})
MinusIcon64.args = {
  className: '',
  color: '#005e5d'
};

import React from 'react';

import MdCheckCircleIcon from '../../../packages/react/src/icons/MdCheckCircleIcon';
import MdCheckCircleIcon64 from '../../../packages/react/src/icons/MdCheckCircleIcon64';
import type { Args } from '@storybook/react';

export default {
  title: 'Deprecated/Icons/CheckCircle',
  component: MdCheckCircleIcon,
  parameters: {
    docs: {
      description: {
        component:
          // eslint-disable-next-line quotes
          "Circle with checkmark icon.  Color can be inherited from parent, or set directly on the component. In addition to the properties presented here, the component accepts all standard attributes of a HTML SVG element.<br/><br/>`import { MdCheckCircleIcon } from '@miljodirektoratet/md-react'`<br/>`import { MdCheckCircleIcon64 } from '@miljodirektoratet/md-react'`",
      },
    },
  },
  argTypes: {
    className: {
      description: 'Classes for svg icon',
      table: {
        type: {
          summary: 'text',
        },
      },
      control: 'text',
    },
    color: {
      description: 'Set color of parent (for example purposes)',
      table: {
        type: {
          summary: 'text',
        },
      },
      control: 'color',
    },
  },
};

const Template = (args: Args) => {
  return (
    <div style={{ width: '32px', height: '32px', color: args.color }}>
      <MdCheckCircleIcon className={args.className} />
    </div>
  );
};

const Template64 = (args: Args) => {
  return (
    <div style={{ width: '64px', height: '64px', color: args.color }}>
      <MdCheckCircleIcon64 className={args.className} />
    </div>
  );
};

export const CheckCircle = Template.bind({});
CheckCircle.args = {
  className: '',
  color: '#005e5d',
};

export const CheckCircle64 = Template64.bind({});
CheckCircle64.args = {
  className: '',
  color: '#005e5d',
};

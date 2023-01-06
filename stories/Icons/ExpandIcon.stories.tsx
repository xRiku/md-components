import React from 'react';

import MdExpandIcon from '../../packages/react/src/icons/MdExpandIcon';
import MdExpandIcon64 from '../../packages/react/src/icons/MdExpandIcon64';

export default {
  title: 'Icons/Expand',
  component: MdExpandIcon,
  parameters: {
    docs: {
      description: {
        component: "Expand icon. Color is inherited from parent.<p>`import { MdExpandIcon } from '@md-components/md-react'`</p><p>`import { MdExpandIcon64 } from '@md-components/md-react'`</p>",
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
      <MdExpandIcon className={args.className} />
    </div>
  );
}

const Template64 = (args: any) => {
  return (
    <div style={{ width: '64px', height: '64px', color: args.color }}>
      <MdExpandIcon64 className={args.className} />
    </div>
  );
}

export const ExpandIcon = Template.bind({})
ExpandIcon.args = {
  className: '',
  color: '#005e5d'
};

export const ExpandIcon64 = Template64.bind({})
ExpandIcon64.args = {
  className: '',
  color: '#005e5d'
};

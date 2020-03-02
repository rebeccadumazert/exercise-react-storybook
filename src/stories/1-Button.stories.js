import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import { ButtonReb } from '../library/ButtonReb';

export default {
  title: 'Button',
  component: Button,
};

export const Text = () => (
  <Button onClick={action('clicked')}>Hello Button</Button>
);

export const Emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

export const Butbut = () => <ButtonReb myProps={'COUCOU'}></ButtonReb>;

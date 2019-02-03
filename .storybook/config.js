import { configure } from '@storybook/react';

function loadStories() {
  require('../src/components/atoms/stories.js');
}

configure(loadStories, module);
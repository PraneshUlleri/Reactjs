import React from 'react';
import { ThemeContextConsumer } from './ThemeContext';

export default function MainContent() {
  return (
    <ThemeContextConsumer>
      {(context) => (
        <div class={`content ${context.theme}`}>
          <h1>welcome</h1>
          <p>use context api to share data between components</p>
        </div>
      )}
    </ThemeContextConsumer>
  );
}

import React from 'react';
import { ThemeContextConsumer } from './ThemeContext';

export default function Navbar() {
  return (
    <div>
      <ThemeContextConsumer>
        {(context) => (
          <div className="row">
            <div>React Context app</div>
            <button onClick={context.toggleTheme}> Togglr Theme</button>
          </div>
        )}
      </ThemeContextConsumer>
    </div>
  );
}

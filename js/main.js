import React from 'react';
import ReactDOM from 'react-dom/client';
import EdishApp from './edish-app.js';

function mount() {
  const container = document.getElementById('root');
  if (container && !container.__mounted) {
    container.__mounted = true;
    const root = ReactDOM.createRoot(container);
    root.render(React.createElement(EdishApp));
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mount);
} else {
  mount();
}

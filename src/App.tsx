import * as React from 'react';
import CanvasImageExample from './CanvasImageExample';
import './style.css';

export default function App() {
  const [fSize, setFSize] = React.useState(40);
  return (
    <div>
      <CanvasImageExample fSize={fSize} />
    </div>
  );
}

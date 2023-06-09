import * as React from 'react';
import CanvasImageExample from './CanvasImageExample';
import './style.css';

export default function App() {
  const [fSize, setFSize] = React.useState(40);
  const [selectedFont, setSelectedFont] = React.useState('Arial');

  const handleInputChange = (event) => {
    setFSize(event.target.value);
  };

  const handleSelectFont = (event) => {
    setSelectedFont(event.target.value);
  };

  return (
    <div>
      <input type="number" value={fSize} onChange={handleInputChange} />

      <div>
        <select value={selectedFont} onChange={handleSelectFont}>
          <option value="">Select Font</option>
          <option value="poppins">Poppins</option>
          <option value="Lato">Lato</option>
          <option value="Fira Mono">Fira Mono</option>
        </select>
      </div>
      <CanvasImageExample fSize={fSize} font={selectedFont} />
    </div>
  );
}

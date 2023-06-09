import * as React from 'react';
import CanvasImageExample from './CanvasImageExample';
import './style.css';

export default function App() {
  const [fSize, setFSize] = React.useState(40);
  const [selectedFont, setSelectedFont] = React.useState('Arial');
  const [bgColor, setBgColor] = React.useState('#f1f1f1');
  const [fontColor, setFontColor] = React.useState('#000000');

  const handleBgColorChange = (event) => {
    setBgColor(event.target.value);
  };

  const handleFontColorChange = (event) => {
    setFontColor(event.target.value);
  };

  const handleInputChange = (event) => {
    setFSize(event.target.value);
  };

  const handleSelectFont = (event) => {
    setSelectedFont(event.target.value);
  };

  return (
    <div>
      <div>
        Set font size
        <br />
        <input type="number" value={fSize} onChange={handleInputChange} />
      </div>

      <div>
        Set font family
        <div>
          <select value={selectedFont} onChange={handleSelectFont}>
            <option value="">Select Font</option>
            <option value="poppins">Poppins</option>
            <option value="Lato">Lato</option>
            <option value="Fira Mono">Fira Mono</option>
          </select>
        </div>
      </div>
      <div>
        Set background color
        <br />
        <input type="color" value={bgColor} onChange={handleBgColorChange} />
      </div>
      <div>
        Set font color
        <br />
        <input
          type="color"
          value={fontColor}
          onChange={handleFontColorChange}
        />
      </div>
      <CanvasImageExample
        fSize={fSize}
        font={selectedFont}
        bgColor={bgColor}
        fontColor={fontColor}
      />
    </div>
  );
}

import React, { useEffect, useRef } from 'react';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/700.css';
import '@fontsource/lato';
import '@fontsource/fira-mono';

type CanvasProps = {
  fSize: number;
  font: string;
  bgColor: string;
  fontColor: string;
};
const CanvasImageExample = ({
  fSize,
  font,
  bgColor,
  fontColor,
}: CanvasProps) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // Set up the drawing properties
    context.fillStyle = bgColor;
    context.fillRect(50, 50, 980, 980); // Adjust the dimensions as needed

    // Draw text on the canvas
    context.font = `${fSize}px ${font}`;
    // context.font = `${fSize}px Fira Mono`;
    // context.font = `${fSize}px Lato`;
    // context.font = `${fSize}px poppins`;
    context.fillStyle = fontColor;
    context.fillText('Sphinx of black quartz', 100, 150);
  }, [fSize, font, bgColor, fontColor]);

  const downloadImage = () => {
    const canvas = canvasRef.current;
    const image = new Image();

    image.src = canvas.toDataURL();

    // Create a temporary link to download the image
    const link = document.createElement('a');
    link.href = image.src;
    link.download = 'canvas_image.png';
    link.click();
  };

  return (
    <div>
      <canvas ref={canvasRef} width={1080} height={1080}></canvas>
      <button onClick={downloadImage}>Download Image</button>
    </div>
  );
};

export default CanvasImageExample;

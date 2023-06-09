import React, { useEffect, useRef } from 'react';

type CanvasProps = {
  fSize: number;
};
const CanvasImageExample = ({ fSize }: CanvasProps) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // Set up the drawing properties
    context.fillStyle = 'blue';
    context.fillRect(50, 50, 980, 980); // Adjust the dimensions as needed

    // Draw text on the canvas
    context.font = `${fSize}px Arial`;
    context.fillStyle = 'white';
    context.fillText('Hello, World!', 100, 150);
  }, []);

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

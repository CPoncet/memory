import { useLayoutEffect, useRef } from 'react';

const useCanvas = (draw) => {
  const canvasRef = useRef(null);

  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    canvas.width = 100;
    canvas.height = 100;

    draw(context);
  }, [draw]);

  return canvasRef;
};

export default useCanvas;

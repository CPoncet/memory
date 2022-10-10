import { useLayoutEffect, useRef } from 'react';

/**
 * Hook to handle HTML5 canvas
 * & customize what is drawn
 *
 * @param {*} draw
 * @returns
 */
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

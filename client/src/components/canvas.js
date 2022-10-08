import useCanvas from '../hooks/useCanvas';

const Canvas = ({ draw }) => {
  const canvasRef = useCanvas(draw);

  return <canvas ref={canvasRef} />;
};

export default Canvas;

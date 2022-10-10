import { memo } from 'react';
import useCanvas from '../../hooks/useCanvas';

const Canvas = memo((props) => {
  const { draw, ...rest } = props;

  const canvasRef = useCanvas(draw);

  return <canvas ref={canvasRef} {...rest} />;
});

export default Canvas;

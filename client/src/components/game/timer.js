import { useEffect, useRef } from 'react';

const Timer = ({ initialTimer, timeLeft, setTimeLeft, won }) => {
  const timerRef = useRef(null);

  useEffect(() => {
    const moveTimer = (timeLeft) => {
      const timer = timerRef.current;
      const timerPercent = (timeLeft * 100) / initialTimer;
      timer.style.width = timerPercent + '%';
    };
    if (timeLeft > 0 && !won) {
      let interval;
      interval = setInterval(() => {
        setTimeLeft(timeLeft - 1);
        moveTimer(timeLeft);
      }, 1000);
      return () => clearInterval(interval);
    }
    if (timeLeft === 0) {
      moveTimer(timeLeft);
    }
  }, [timeLeft, won, setTimeLeft, initialTimer]);

  return (
    <div className="timer-wrapper">
      <div ref={timerRef} className="timer"></div>
    </div>
  );
};

export default Timer;

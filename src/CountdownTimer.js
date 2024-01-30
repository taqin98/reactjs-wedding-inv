import React, { useState, useEffect } from 'react';
import AOS from 'aos';

const CountdownTimer = ({includeAOS}) => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Set your target date and time
  const targetDate = new Date('2024-02-05T10:00:00').getTime();

  useEffect(() => {
    AOS.init();
  }, []);
  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const timeDifference = targetDate - now;

      if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds });
      } else {
        // Countdown has reached zero, do something here if needed
        console.log('Countdown reached zero!');
      }
    };

    // Update the countdown every second
    const interval = setInterval(updateCountdown, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
      <ul className="mb-0 ps-0">
        <li className="days">
            <span><strong>{countdown.days}</strong></span>
            <strong className="font-roboto-black">Hari</strong>
        </li>
        <li className="hours pb-1">
            <span><strong>{countdown.hours}</strong></span>
            <strong>Jam</strong>
        </li>
        <li className="minutes pb-1">
            <span><strong>{countdown.minutes}</strong></span>
            <strong>Menit</strong>
        </li>
        <li className="seconds pb-1">
            <span><strong>{countdown.seconds}</strong></span>
            <strong>Detik</strong>
        </li>
      </ul>
  );
};

export default CountdownTimer;

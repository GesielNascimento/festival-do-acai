import { useEffect, useState } from "react";

const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const countDown = () => {
      const now = new Date().getTime();
      const distance = new Date(targetDate).getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    const interval = setInterval(countDown, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="bg-purple-900 border border-purple-900 text-purple-100 text-sm p-3 rounded-lg mb-6 font-medium shadow-sm">
      ⏳ Faltam {timeLeft.days} dias, {timeLeft.hours}h {timeLeft.minutes}min e {timeLeft.seconds}s para a largada (05 de julho às 07h)!
    </div>
  );
};

export default Countdown;

import { useState, useEffect } from "react";

interface LocalTimeProps {
  timeZone: string;
}

const LocalTime: React.FC<LocalTimeProps> = ({ timeZone }) => {
  const [localTime, setLocalTime] = useState<string>("");

  const getLocalTime = () => {
    const currentTime = new Date().toLocaleString("en-US", {
      timeZone,
      timeStyle: "medium",
      hourCycle: "h24",
    });
    setLocalTime(currentTime);
  };

  useEffect(() => {
    getLocalTime();
    const interval = setInterval(() => {
      getLocalTime();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timeZone]);

  return <div id="city-time">{localTime}</div>;
};

export default LocalTime;

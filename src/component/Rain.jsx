import React from "react";
import "./Rain.scss";

const Rain = ({ dropCount = 200 }) => {
  const drops = Array.from({ length: dropCount });

  return (
    <div className="rain">
      {drops.map((_, i) => {
        const left = Math.random() * 100; // random horizontal position
        const delay = Math.random() * -20; // staggered start
        const duration = 1 + Math.random() * 2; // between 1–3s
        const wind = 0; // no wind by default (overridden on hover)

        return (
          <div
            key={i}
            className="drop"
            style={{
              "--left": `${left}vw`,
              "--delay": `${delay}s`,
              "--duration": `${duration}s`,
              "--wind": `${wind}px`,
            }}
          />
        );
      })}
    </div>
  );
};

export default Rain;

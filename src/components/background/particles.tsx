export const Particles = () => {
    return (
      <>
        {Array.from({ length: 40 }).map((_, i) => {
          const size = Math.floor(Math.random() * 5) + 2;
          const xPos = Math.random() * 100;
          const yPos = Math.random() * 100;
          const opacity = Math.random() * 0.6 + 0.1;
          
          return (
            <div
              key={`particle-${i}`}
              className="absolute rounded-full bg-cyan-400"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${xPos}%`,
                top: `${yPos}%`,
                opacity: opacity,
              }}
            />
          );
        })}
      </>
    );
  };
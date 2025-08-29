interface CircularTextProps {
  text: string;
  radius?: number;
  fontSize?: number;
  className?: string;
  animate?: boolean;
}

export default function CircularText({ 
  text, 
  radius = 50, 
  fontSize = 16, 
  className = "",
  animate = false 
}: CircularTextProps) {
  const characters = text.split('');
  const angleStep = 360 / characters.length;

  return (
    <div 
      className={`relative ${animate ? 'animate-spin' : ''} ${className}`}
      style={{ 
        width: radius * 2, 
        height: radius * 2,
        animation: animate ? 'spin 10s linear infinite' : 'none'
      }}
    >
      {characters.map((char, index) => {
        const angle = index * angleStep;
        return (
          <span
            key={index}
            className="absolute font-mono uppercase"
            style={{
              fontSize: `${fontSize}px`,
              fontWeight:800,
              left: '50%',
              top: '50%',
              transform: `rotate(${angle}deg) translateY(-${radius}px)`,
              transformOrigin: '0 0',
            }}
          >
            {char}
          </span>
        );
      })}
    </div>
  );
}
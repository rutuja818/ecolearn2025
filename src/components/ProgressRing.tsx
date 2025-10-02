interface ProgressRingProps {
  progress: number; // 0 to 100
  size?: number;
  strokeWidth?: number;
  currentPoints: number;
  targetPoints: number;
}

const ProgressRing = ({ 
  progress, 
  size = 200, 
  strokeWidth = 12,
  currentPoints,
  targetPoints 
}: ProgressRingProps) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg
        width={size}
        height={size}
        className="transform -rotate-90"
      >
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="hsl(var(--muted))"
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Progress circle with gradient */}
        <defs>
          <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(var(--secondary))" />
          </linearGradient>
        </defs>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="url(#progressGradient)"
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-1000 ease-out drop-shadow-[0_0_10px_hsl(var(--primary))]"
          style={{
            filter: "drop-shadow(0 0 8px hsl(var(--primary) / 0.5))"
          }}
        />
      </svg>
      
      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <span className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          {currentPoints.toLocaleString()}
        </span>
        <span className="text-xs text-muted-foreground">of {targetPoints.toLocaleString()}</span>
        <span className="text-lg font-semibold text-primary mt-1">{Math.round(progress)}%</span>
      </div>
    </div>
  );
};

export default ProgressRing;

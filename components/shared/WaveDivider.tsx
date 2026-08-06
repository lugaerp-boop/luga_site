export default function WaveDivider({ fill = "#ffffff" }: { fill?: string }) {
  return (
    <div
      className="absolute bottom-0 left-0 right-0 pointer-events-none leading-none"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="w-full h-10 sm:h-14 lg:h-20"
      >
        <path
          d="M0,40 C240,90 480,0 720,35 C960,65 1200,15 1440,45 L1440,100 L0,100 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}

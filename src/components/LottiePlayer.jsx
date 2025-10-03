import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function LottiePlayer({ src, className = "", ...props }) {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <DotLottieReact
        src={src}
        loop
        autoplay
        {...props}
      />
    </div>
  );
}

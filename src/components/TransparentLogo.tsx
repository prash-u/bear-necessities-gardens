import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type TransparentLogoProps = {
  src: string;
  alt: string;
  className?: string;
  threshold?: number;
};

const TransparentLogo = ({
  src,
  alt,
  className,
  threshold = 242,
}: TransparentLogoProps) => {
  const [processedSrc, setProcessedSrc] = useState<string>(src);

  useEffect(() => {
    let cancelled = false;
    const img = new Image();

    img.onload = () => {
      try {
        const canvas = document.createElement("canvas");
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        const context = canvas.getContext("2d");

        if (!context) {
          if (!cancelled) setProcessedSrc(src);
          return;
        }

        context.drawImage(img, 0, 0);
        const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
        const { data } = imageData;

        for (let index = 0; index < data.length; index += 4) {
          const red = data[index];
          const green = data[index + 1];
          const blue = data[index + 2];

          if (red >= threshold && green >= threshold && blue >= threshold) {
            data[index + 3] = 0;
          }
        }

        context.putImageData(imageData, 0, 0);

        if (!cancelled) {
          setProcessedSrc(canvas.toDataURL("image/png"));
        }
      } catch {
        if (!cancelled) setProcessedSrc(src);
      }
    };

    img.onerror = () => {
      if (!cancelled) setProcessedSrc(src);
    };

    img.src = src;

    return () => {
      cancelled = true;
    };
  }, [src, threshold]);

  return <img src={processedSrc} alt={alt} className={cn(className)} />;
};

export default TransparentLogo;

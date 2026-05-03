import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type CropRect = {
  x: number;
  y: number;
  width: number;
  height: number;
};

type TransparentLogoProps = {
  src: string;
  alt: string;
  className?: string;
  threshold?: number;
  crop?: CropRect;
};

const TransparentLogo = ({
  src,
  alt,
  className,
  threshold = 242,
  crop,
}: TransparentLogoProps) => {
  const [processedSrc, setProcessedSrc] = useState<string>(src);

  useEffect(() => {
    let cancelled = false;
    const img = new Image();

    img.onload = () => {
      try {
        const canvas = document.createElement("canvas");
        const sourceWidth = crop?.width ?? img.naturalWidth;
        const sourceHeight = crop?.height ?? img.naturalHeight;
        canvas.width = sourceWidth;
        canvas.height = sourceHeight;
        const context = canvas.getContext("2d");

        if (!context) {
          if (!cancelled) setProcessedSrc(src);
          return;
        }

        if (crop) {
          context.drawImage(
            img,
            crop.x,
            crop.y,
            crop.width,
            crop.height,
            0,
            0,
            sourceWidth,
            sourceHeight,
          );
        } else {
          context.drawImage(img, 0, 0);
        }
        const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
        const { data } = imageData;
        const visited = new Uint8Array(canvas.width * canvas.height);
        const queue: number[] = [];

        const isNearWhite = (offset: number) =>
          data[offset] >= threshold &&
          data[offset + 1] >= threshold &&
          data[offset + 2] >= threshold;

        const enqueueIfBackground = (x: number, y: number) => {
          if (x < 0 || y < 0 || x >= canvas.width || y >= canvas.height) return;

          const pixelIndex = y * canvas.width + x;
          if (visited[pixelIndex]) return;

          const offset = pixelIndex * 4;
          if (!isNearWhite(offset)) return;

          visited[pixelIndex] = 1;
          queue.push(pixelIndex);
        };

        for (let x = 0; x < canvas.width; x += 1) {
          enqueueIfBackground(x, 0);
          enqueueIfBackground(x, canvas.height - 1);
        }

        for (let y = 0; y < canvas.height; y += 1) {
          enqueueIfBackground(0, y);
          enqueueIfBackground(canvas.width - 1, y);
        }

        while (queue.length > 0) {
          const pixelIndex = queue.shift();
          if (pixelIndex === undefined) continue;

          const offset = pixelIndex * 4;
          data[offset + 3] = 0;

          const x = pixelIndex % canvas.width;
          const y = Math.floor(pixelIndex / canvas.width);

          enqueueIfBackground(x + 1, y);
          enqueueIfBackground(x - 1, y);
          enqueueIfBackground(x, y + 1);
          enqueueIfBackground(x, y - 1);
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
  }, [src, threshold, crop]);

  return <img src={processedSrc} alt={alt} className={cn(className)} />;
};

export default TransparentLogo;

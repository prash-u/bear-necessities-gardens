import TransparentLogo from "@/components/TransparentLogo";
import { useActiveLogo } from "@/components/ActiveLogoProvider";
import { cn } from "@/lib/utils";

type WatermarkedImageProps = {
  src: string;
  alt: string;
  className?: string;
  wrapperClassName?: string;
  loading?: "eager" | "lazy";
  width?: number;
  height?: number;
};

const WatermarkedImage = ({
  src,
  alt,
  className,
  wrapperClassName,
  loading = "lazy",
  width,
  height,
}: WatermarkedImageProps) => {
  const { selectedLogo } = useActiveLogo();

  return (
    <div className={cn("relative overflow-hidden", wrapperClassName)}>
      <img
        src={src}
        alt={alt}
        loading={loading}
        width={width}
        height={height}
        className={cn("h-full w-full object-cover", className)}
      />
      <div className="pointer-events-none absolute bottom-3 right-3 z-10 rounded-md border border-black/20 bg-white/95 p-1.5 shadow-[0_12px_30px_-18px_rgba(0,0,0,0.8)]">
        <TransparentLogo
          src={selectedLogo.image}
          alt={`${selectedLogo.name} watermark`}
          className="h-10 w-auto max-w-[5rem] object-contain md:h-12 md:max-w-[6rem]"
        />
      </div>
    </div>
  );
};

export default WatermarkedImage;

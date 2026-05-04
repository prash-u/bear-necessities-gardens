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
  const watermarkCrop = "previewCrops" in selectedLogo
    ? selectedLogo.previewCrops[selectedLogo.previewCrops.length - 1]
    : undefined;
  const isWideMark =
    selectedLogo.id === "lockup-bear" || selectedLogo.id === "full-wordmark";

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
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.45),transparent_22%)]" />
      <div className="pointer-events-none absolute bottom-3 right-3 z-10">
        <TransparentLogo
          src={selectedLogo.image}
          crop={watermarkCrop}
          alt={`${selectedLogo.name} watermark`}
          className={cn(
            "object-contain drop-shadow-[0_12px_22px_rgba(0,0,0,0.6)]",
            isWideMark ? "h-7 w-auto max-w-[6.75rem] md:h-8 md:max-w-[7.75rem]" : "h-10 w-auto max-w-[5rem] md:h-12 md:max-w-[6rem]",
          )}
        />
      </div>
    </div>
  );
};

export default WatermarkedImage;

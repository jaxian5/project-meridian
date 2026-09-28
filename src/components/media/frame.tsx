import { cn } from "@/lib/utils";

const ratios = {
  wide: "aspect-16/9",
  photo: "aspect-3/2",
  square: "aspect-square",
  portrait: "aspect-4/5",
} as const;

export function Frame({
  src,
  alt,
  ratio = "photo",
  className,
  imgClassName,
  zoom = false,
}: {
  src: string;
  alt: string;
  ratio?: keyof typeof ratios;
  className?: string;
  imgClassName?: string;
  zoom?: boolean;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden bg-surface",
        ratios[ratio],
        className,
      )}
    >
      <img
        src={src}
        alt={alt}
        className={cn(
          "img-frame h-full w-full object-cover",
          zoom &&
            "transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105",
          imgClassName,
        )}
      />
    </div>
  );
}

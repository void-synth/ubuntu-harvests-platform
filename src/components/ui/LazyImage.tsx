import { useState, useEffect, ImgHTMLAttributes } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LazyImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
}

const LazyImage = ({ src, alt, className, placeholder, ...props }: LazyImageProps) => {
  const [imageSrc, setImageSrc] = useState<string | undefined>(placeholder);
  const [imageRef, setImageRef] = useState<HTMLImageElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let observer: IntersectionObserver;
    let isCancelled = false;

    if (imageRef && imageSrc !== src) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !isCancelled) {
              setImageSrc(src);
              observer.disconnect();
            }
          });
        },
        { threshold: 0.01, rootMargin: "75%" }
      );
      observer.observe(imageRef);
    }

    return () => {
      isCancelled = true;
      if (observer && observer.unobserve) {
        observer.disconnect();
      }
    };
  }, [imageRef, imageSrc, src]);

  return (
    <motion.div
      className={cn("relative overflow-hidden", className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0.3 }}
      transition={{ duration: 0.3 }}
    >
      {imageSrc && (
        <img
          ref={setImageRef}
          src={imageSrc}
          alt={alt}
          className={cn(
            "w-full h-full object-cover transition-opacity duration-300",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
          onLoad={() => setIsLoaded(true)}
          loading="lazy"
          {...props}
        />
      )}
      {!isLoaded && imageSrc === placeholder && (
        <div className="absolute inset-0 bg-muted animate-pulse" />
      )}
    </motion.div>
  );
};

export default LazyImage;

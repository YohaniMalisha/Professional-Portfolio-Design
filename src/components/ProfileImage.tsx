import { useState } from 'react';
import { User } from 'lucide-react';

interface ProfileImageProps {
  src: string;
  alt: string;
  initials?: string;
  className?: string;
}

export function ProfileImage({ src, alt, initials = 'YW', className = '' }: ProfileImageProps) {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  const handleError = () => {
    setImageError(true);
    setImageLoading(false);
  };

  const handleLoad = () => {
    setImageLoading(false);
  };

  return (
    <div className={`relative ${className}`}>
      {(imageError || imageLoading) && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-purple-700 rounded-full">
          {imageError ? (
            <div className="text-white text-4xl md:text-5xl">
              {initials}
            </div>
          ) : (
            <User className="text-white/50 animate-pulse" size={48} />
          )}
        </div>
      )}
      
      {!imageError && (
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            imageLoading ? 'opacity-0' : 'opacity-100'
          }`}
          onError={handleError}
          onLoad={handleLoad}
        />
      )}
    </div>
  );
}

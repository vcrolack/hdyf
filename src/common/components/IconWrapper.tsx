import React from "react";

interface IconWrapperProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  url?: string;
}

export const IconWrapper: React.FC<IconWrapperProps> = ({
  src,
  alt,
  url,
  ...props
}) => {
  return (
    <div>
      {url ? (
        <a href={url}>
          <img src={src} alt={alt} className="w-full h-full" {...props} />
        </a>
      ) : (
        <img src={src} alt={alt} className="w-full h-full" {...props} />
      )}
    </div>
  );
};

import React, { useState } from 'react';

const Image = ({ src, alt, className, width = 'auto', height = 'auto', loading = 'lazy', style, ...rest }) => {
  //TODO: add TS
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  const handleImageError = (e) => {
    setIsLoaded(true);
    setIsError(true);
    e.target.alt = 'Image failed to load';
    //TODO add error fallback image f.e 'something went wrong'
  };

  return <>
  { !isLoaded && <div>Loading...</div>}
   { !isError ? 
   <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading={loading}
      onLoad={handleImageLoad}
      onError={handleImageError}
      style={style}
      {...rest} /> :
      <div>Error</div>
   }
  </>
};

export default Image;

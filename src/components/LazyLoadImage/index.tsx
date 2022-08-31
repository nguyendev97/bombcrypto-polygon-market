import React from "react";
import "lazysizes";

type IPropsImage = {
  dataSrc: string;
  dataSrcset?: string;
  alt: string | "";
  className?: string;
};
const LazyLoadImage: React.FC<IPropsImage> = (props: IPropsImage) => {
  return (
    <React.Fragment>
      <img
        data-sizes="auto"
        data-src={props.dataSrc}
        className={`lazyload ${props.className}`}
        data-srcSet={props.dataSrcset}
        alt={props.alt}
      />
    </React.Fragment>
  );
};

export default LazyLoadImage;

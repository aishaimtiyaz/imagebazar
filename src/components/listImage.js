import React, { useEffect, useRef } from "react";

const ListImage = ({ images, fetchMoreImages }) => {
  const observer = useRef();
  const lastImageElementRef = useRef();

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        fetchMoreImages();  // Fetch more images when the observer hits the target
      }
    });

    if (lastImageElementRef.current) {
      observer.current.observe(lastImageElementRef.current);
    }

    return () => {
      if (lastImageElementRef.current) {
        observer.current.unobserve(lastImageElementRef.current);
      }
    };
  }, [fetchMoreImages]);

  return (
    <div className="imageList flex justify-around flex-wrap my-20 w-full h-full items-center">
      {images.map((value, index) => (
        <img
          key={index}
          src={value.urls.small}
          alt={value.alt_description}
          className="w-64 h-64 my-4 mx-1"
        />
      ))}
      <div ref={lastImageElementRef} style={{ height: 20 }}></div> {/* Observer target */}
    </div>
  );
};

export default ListImage;

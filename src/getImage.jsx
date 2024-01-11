import { useState, useEffect } from "react";

const GetImage = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.unsplash.com/photos/?client_id=75ZBiBuJFAVRUXXClMfkMICQRdnpm-fjoLcun42ZwvE"
    )
      .then((res) => res.json())
      .then((data) => setImages(data));
  });

  return (
    <div>
      {images.length &&
        images.map((image) => {
          return <img src={image.urls.small} />;
        })}
    </div>
  );
};

export default GetImage;

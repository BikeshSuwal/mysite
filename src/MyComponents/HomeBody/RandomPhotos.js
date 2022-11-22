import React from "react";

export default function RandomPhotos() {
  return (
    <>
      <div className="gallery">
        <div className="divtitle">
          <span>Random Photos</span>
        </div>
        <div className="photos">
          <a href="img1.jpg">
            <img src="/img1.jpg" alt="" />
          </a>
          <a href="img2.jpg">
            <img src="/img2.jpg" alt="" />
          </a>
          <a href="img3.jpg">
            <img src="/img3.jpg" alt="" />
          </a>
        </div>
      </div>
    </>
  );
}

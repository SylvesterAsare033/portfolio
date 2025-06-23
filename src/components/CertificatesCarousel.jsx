// src/components/CertificatesCarousel.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { certificates } from "../data/certificates";

const CertificatesCarousel = () => {
  return (
    <section className="py-16 px-6 bg-[#0F0F1E] text-white" id="certificates">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
        My <span className="text-purple-500">Certificates</span>
      </h2>

      <div className="max-w-4xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          className="w-full"
        >
          {certificates.map((cert, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center bg-[#1A1A2E] p-6 rounded-lg shadow-lg min-h-[300px] justify-center">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-40 h-40 object-contain mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 text-center">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-400 text-center">
                  {cert.issuer}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CertificatesCarousel;

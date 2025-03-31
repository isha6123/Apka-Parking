import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// Corrected Image Imports (Directly from src/assets/)
import credImg from "../assets/cred.jpg";
// import ockeImg from "../assets/ocko.jpg";
import cardekhoImg from "../assets/caedeko.jpg"
import airtelImg from "../assets/Airtel_Logo.jpg";
import accentureImg from "../assets/Accenture.jpg";
// import bharatpeImg from "../assets/bharatpe.jpg";
import cyberhubImg from "../assets/cyberhub.jpg";
import paytmImg from "../assets/paytm.jpg";

// Clients Array with Imported Images
const clients = [
  { id: 1, src: credImg, alt: "CRED" },
  // { id: 2, src: ockeImg, alt: "Ocko" },
  { id: 3, src: cardekhoImg, alt: "CarDekho" },
  { id: 4, src: airtelImg, alt: "Airtel" },
  { id: 5, src: accentureImg, alt: "Accenture" },
  // { id: 6, src: bharatpeImg, alt: "BharatPe" },
  { id: 7, src: cyberhubImg, alt: "Cyberhub" },
  { id: 8, src: paytmImg, alt: "Paytm" },
];

const ClientSlider = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Our Clients</h2>
        <p className="text-gray-500">We are trusted by some of the best</p>
      </div>

      <Swiper
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        modules={[Autoplay]}
        className="w-10/12 mx-auto"
      >
        {clients.map((client) => (
          <SwiperSlide key={client.id} className="flex justify-center">
            <img
              src={client.src}
              alt={client.alt}
              className="h-14 grayscale hover:grayscale-0 transition-transform duration-300 hover:scale-110"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ClientSlider;

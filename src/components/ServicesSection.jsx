//responsive
import React from "react";
import FastagIcon from "../assets/fastag-icon.png";
import PetrolIcon from "../assets/petrol-icon.png";
import ChallanIcon from "../assets/challan-icon.png";
import BillIcon from "../assets/bill-icon.png";
import StoreIcon from "../assets/store-icon.png";
import CarLoanIcon from "../assets/car-loan-icon.png";
import CarServiceIcon from "../assets/car-service-icon.png";
import NewCarIcon from "../assets/car-loan-icon.png";

// List of services with imported images
const services = [
  { name: "FASTag", img: FastagIcon },
  { name: "Buy Petrol", img: PetrolIcon },
  { name: "Challan", img: ChallanIcon },
  { name: "Bill Payments", img: BillIcon },
  { name: "Store", img: StoreIcon },
  { name: "Car Loan", img: CarLoanIcon },
  { name: "Car Service", img: CarServiceIcon },
  { name: "New Car", img: NewCarIcon },
];

const ServicesSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 mt-10">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">Do more with Park+</h2>

      {/* Services Grid */}
      <div className="bg-white shadow-md p-6 rounded-lg grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center transition-all duration-300 hover:scale-110"
          >
            <div className="w-20 h-20 flex items-center justify-center bg-white rounded-full shadow-md hover:shadow-lg">
              <img
                src={service.img}
                alt={service.name}
                className="max-w-[56px] max-h-[56px] transition-transform duration-300 hover:scale-110"
              />
            </div>
            <p className="mt-2 text-gray-700 font-medium text-sm text-center">{service.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;



// import React from "react";
// import FastagIcon from "../assets/fastag-icon.png";
// import PetrolIcon from "../assets/petrol-icon.png";
// import ChallanIcon from "../assets/challan-icon.png";
// import BillIcon from "../assets/bill-icon.png";
// import StoreIcon from "../assets/store-icon.png";
// import CarLoanIcon from "../assets/car-loan-icon.png";
// import CarServiceIcon from "../assets/car-service-icon.png";
// import NewCarIcon from "../assets/car-loan-icon.png";

// // List of services with imported images
// const services = [
//   { name: "FASTag", img: FastagIcon },
//   { name: "Buy Petrol", img: PetrolIcon },
//   { name: "Challan", img: ChallanIcon },
//   { name: "Bill Payments", img: BillIcon },
//   { name: "Store", img: StoreIcon },
//   { name: "Car Loan", img: CarLoanIcon },
//   { name: "Car Service", img: CarServiceIcon },
//   { name: "New Car", img: NewCarIcon },
// ];

// const ServicesSection = () => {
//   return (
//     <div className="max-w-7xl mx-auto px-6 mt-10">
//       {/* Heading */}
//       <h2 className="text-2xl font-bold text-gray-900 mb-4">Do more with Park+</h2>

//       {/* Services Grid */}
//       <div className="bg-white shadow-md p-6 rounded-lg flex justify-around items-center">
//         {services.map((service, index) => (
//           <div key={index} className="flex flex-col items-center transition-all duration-300 hover:scale-110">
//             <div className="w-20 h-20 flex items-center justify-center bg-white rounded-full shadow-md hover:shadow-lg">
//               <img
//                 src={service.img}
//                 alt={service.name}
//                 className="max-w-[56px] max-h-[56px] transition-transform duration-300 hover:scale-110"
//               />
//             </div>
//             <p className="mt-2 text-gray-700 font-medium text-sm">{service.name}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ServicesSection;


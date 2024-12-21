import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper h-96 rounded-lg "
      >
        <SwiperSlide>
          <div className=" flex flex-col justify-center items-center h-full bg-gradient-to-r from-purple-900 to-gray-500">
            <h1 className="text-3xl text-white font-bold underline mb-6">
              Why Should Learn a Foreign Language?
            </h1>
            <ul className="text-white font-bold text-xl text-center">
              <li>Enhance career opportunities and global connections.</li>
              <li>Improve cognitive skills and cultural understanding.</li>
              <li>Travel confidently and explore new worlds.</li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex flex-col justify-center items-center h-full bg-gradient-to-r from-cyan-900 to-blue-900">
            <h1 className="text-3xl text-white font-bold underline mb-6 ">
              Why Should You Choose Us?
            </h1>
            <ul className="text-white font-bold text-center text-xl">
              <li>
                Expert instructors providing personalized learning experiences.
              </li>
              <li>Innovative tools ensuring effective language mastery.</li>
              <li>Flexible schedules tailored to your needs.</li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex flex-col justify-center items-center h-full bg-gradient-to-r from-violet-500 to-fuchsia-500">
            <h1 className="text-3xl text-white font-bold underline mb-6">
              Why We Are Better Than Others?
            </h1>
            <ul className="text-white font-bold text-center text-xl">
              <li>Interactive lessons focused on real-world communication.</li>
              <li>Proven track record of student success.</li>
              <li>Affordable pricing without compromising top quality.</li>
            </ul>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;

import SliderCard from "../../components/UI/SliderCard";
import profPic from "@/TestimonialPhotos/prof-pic.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import SectionTitle from "../../components/UI/Section-title";

function Testimonial() {
  const sens = {
    tag: "Testimonial",
    title: "Trusted by Innovators",
    description:
      "Secure your digital assets with the peace of mind that comes from knowing you are protected by the best technology in the blockchain space.",
  };

  const testimonials = [
    {
      photo: profPic,
      name: "Leonid Gorbenko",
      role: "Co founder",
      text: "AI streamlines international client coordination by scheduling emails for optimal inbox timing.",
    },
    {
      photo: profPic,
      name: "Leonid Gorbenko",
      role: "Co founder",
      text: "AI streamlines international client coordination by scheduling emails for optimal inbox timing.",
    },
    {
      photo: profPic,
      name: "Leonid Gorbenko",
      role: "Co founder",
      text: "AI streamlines international client coordination by scheduling emails for optimal inbox timing.",
    },
    {
      photo: profPic,
      name: "Leonid Gorbenko",
      role: "Co founder",
      text: "AI streamlines international client coordination by scheduling emails for optimal inbox timing.",
    },
  ];
  return (
    <section id="testimonials" className="w-full  bg-background text-white">
      <div className="container  py-10 flex flex-col gap-8 lg:py-20">
        <SectionTitle sens={sens} />
        <div className="w-full">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 1000, disableOnInteraction: false }}
            speed={4000}
            loop={true}
            slidesPerView={1.05}
            spaceBetween={16}
            breakpoints={{
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
          >
            {testimonials.map((testimonial, i) => (
              <SwiperSlide key={i}>
                <SliderCard {...testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;

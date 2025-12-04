import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import quote from '../../assets/quote.png'
import { FaStar } from "react-icons/fa6";
import review_img from '../../assets/review_img.png'
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";


const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#4756DF",
        borderRadius: "50%",
        padding: "10px",
        left: "15px",
        zIndex: 2,
      }}
      onClick={onClick}
    >
      <IoIosArrowDropleftCircle color="#4756DF"/>
    </div>
  );
};


const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#4756DF",
        borderRadius: "50%",
        padding: "10px",
        right: "15px",
        zIndex: 2,
      }}
      onClick={onClick}
    >
      <IoIosArrowDroprightCircle color="#4756DF" />

    </div>
  );
};


function Reviews() {
    var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 641,
        settings: {
          slidesToShow: 1,
        }
      }
    ]


  };
    return (
        <>
          <section className="pb-[50px] md:pb-[227px]">
            <div className="container px-4 md:px-0">
                <div className="services_headline w-full md:w-[610px] mx-auto text-center ">
                    <h1 className="font-inter font-bold text-[32px] md:text-[45px] text-[#151515] pb-[20px]">Some Client Reviews</h1>
                    <p className="font-inter font-normal text-[16px] leading-[26px] text-[#737373] pb-[50px] ">There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form.</p>
                </div>
                <div className="slider gap-6">
                    <Slider {...settings}>
                      <div className="slider-item duration-500 rounded-[30px] py-[54px] px-[58px]">
                         <img src={quote}></img>
                         <p className="font-inter font-normal text-[16px] leading-[26px] text-[#7B7B7B] pt-[20px]">I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority.</p>
                         <div className="star flex gap-[5px] text-[#F9BD2C] pt-[20px] pb-[30px]">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                         </div>
                         <div className="review-img flex gap-[20px] items-center">
                            <img src={review_img}></img>
                            <div className="text">
                                <h4 className="font-inter font-semibold text-[20px] leading-[120%] text-[#232323]">Eric Drake</h4>
                                <p className="font-inter font-normal text-[16px] leading-[26px] text-[#7B7B7B]">Digital Marketor</p>
                            </div>
                         </div>
                      </div>
                      <div className="slider-item duration-500 rounded-[30px] py-[54px] px-[58px]">
                         <img src={quote}></img>
                         <p className="font-inter font-normal text-[16px] leading-[26px] text-[#7B7B7B] pt-[20px]">I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority.</p>
                         <div className="star flex gap-[5px] text-[#F9BD2C] pt-[20px] pb-[30px]">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                         </div>
                         <div className="review-img flex gap-[20px] items-center">
                            <img src={review_img}></img>
                            <div className="text">
                                <h4 className="font-inter font-semibold text-[20px] leading-[120%] text-[#232323]">Eric Drake</h4>
                                <p className="font-inter font-normal text-[16px] leading-[26px] text-[#7B7B7B]">Digital Marketor</p>
                            </div>
                         </div>
                      </div>
                      <div className="slider-item duration-500 rounded-[30px] py-[54px] px-[58px]">
                         <img src={quote}></img>
                         <p className="font-inter font-normal text-[16px] leading-[26px] text-[#7B7B7B] pt-[20px]">I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority.</p>
                         <div className="star flex gap-[5px] text-[#F9BD2C] pt-[20px] pb-[30px]">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                         </div>
                         <div className="review-img flex gap-[20px] items-center">
                            <img src={review_img}></img>
                            <div className="text">
                                <h4 className="font-inter font-semibold text-[20px] leading-[120%] text-[#232323]">Eric Drake</h4>
                                <p className="font-inter font-normal text-[16px] leading-[26px] text-[#7B7B7B]">Digital Marketor</p>
                            </div>
                         </div>
                      </div>
                      <div className="slider-item duration-500 rounded-[30px] py-[54px] px-[58px]">
                         <img src={quote}></img>
                         <p className="font-inter font-normal text-[16px] leading-[26px] text-[#7B7B7B] pt-[20px]">I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority.</p>
                         <div className="star flex gap-[5px] text-[#F9BD2C] pt-[20px] pb-[30px]">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                         </div>
                         <div className="review-img flex gap-[20px] items-center">
                            <img src={review_img}></img>
                            <div className="text">
                                <h4 className="font-inter font-semibold text-[20px] leading-[120%] text-[#232323]">Eric Drake</h4>
                                <p className="font-inter font-normal text-[16px] leading-[26px] text-[#7B7B7B]">Digital Marketor</p>
                            </div>
                         </div>
                      </div>
                    </Slider>

                </div>
            </div>
          </section>
        </>
    )
}
export default Reviews
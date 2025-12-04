import banner from '../../../assets/banner.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function Banner() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "linear",
    dots:true,
    arrows:false


  };
    return (
        <>
          <section className='relative'>
            <img src={banner} className='w-full h-screen' alt=''></img>
            <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.6)]">
              <div className="container h-full">
                <div className="slider max-w-[950px] absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                  <Slider {...settings}>
                      <div className="slider-text text-center mb-5">
                      <h1 className='font-inter font-bold text-[34px] md:text-[75px] leading-[120%] text-[#FFFFFF] pb-[25px] md:pb-[51px] max-w-[400px] md:max-w-[950px] mx-auto'>We Help brands with high quality services</h1>
                      <p className='font-inter font-normal text-[16px] leading-[26px] text-[#FFFFFF] pb-[55px] max-w-[400px] md:max-w-[621px] mx-auto'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                      <a href='' className='text-[20px] leading-[26px] font-semibold font-inter text-[#FFFFFF] bg-[#6A4DF4] rounded-[10px] px-[42px] py-[15px]'>Get Started</a>
                    </div>
                     <div className="slider-text text-center mb-5">
                      <h1 className='font-inter font-bold text-[34px] md:text-[75px] leading-[120%] text-[#FFFFFF] pb-[25px] md:pb-[51px] max-w-[400px] md:max-w-[950px] mx-auto'>We Help brands with high quality website</h1>
                      <p className='font-inter font-normal text-[16px] leading-[26px] text-[#FFFFFF] pb-[55px] max-w-[400px] md:max-w-[621px] mx-auto'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                      <a href='' className='text-[20px] leading-[26px] font-semibold font-inter text-[#FFFFFF] bg-[#6A4DF4] rounded-[10px] px-[42px] py-[15px]'>Get Started</a>
                    </div>
                      <div className="slider-text text-center mb-5">
                      <h1 className='font-inter font-bold text-[34px] md:text-[75px] leading-[120%] text-[#FFFFFF] pb-[25px] md:pb-[51px] max-w-[400px] md:max-w-[950px] mx-auto'>We Help brands with high quality Marketing</h1>
                      <p className='font-inter font-normal text-[16px] leading-[26px] text-[#FFFFFF] pb-[55px] max-w-[400px] md:max-w-[621px] mx-auto'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                      <a href='' className='text-[20px] leading-[26px] font-semibold font-inter text-[#FFFFFF] bg-[#6A4DF4] rounded-[10px] px-[42px] py-[15px]'>Get Started</a>
                    </div>
                  </Slider>
                </div>
            </div>
            </div>
          </section>
        </>
    )
    
}
export default Banner
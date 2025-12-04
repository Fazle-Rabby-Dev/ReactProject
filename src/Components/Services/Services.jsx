import service_one from '../../assets/service_one.png'
import service_two from '../../assets/service_two.png'
import service_three from '../../assets/service_three.png'
import service_four from '../../assets/service_four.png'
import service_five from '../../assets/service_five.png'
import service_six from '../../assets/service_six.png'
function Services() {
    
    return (

        <>
          <section>
            <div className="container px-4 md:px-0">
                <div className="services_headline w-full md:w-[610px] mx-auto text-center ">
                    <h1 className="font-inter font-bold text-[32px] md:text-[45px] text-[#151515] pb-[20px]">Our Provided Services</h1>
                    <p className="font-inter font-normal text-[16px] leading-[26px] text-[#737373] pb-5 md:pb-[50px] px-8 md:px-0 ">There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-[24px] md:pb-[103px]">
                    <div className="service_items text-center hover:shadow-one rounded-[20px] pt-8 md:pt-[80px] px-[50px] pb-[45px]">
                        <img src={service_one} className='mx-auto'></img>
                        <h2 className='font-inter font-bold text-[25px] text-[#151515] pt-[40px] pb-[20px]'>Web Design</h2>
                        <p className='font-inter font-normal text-[16px] leading-[26px] text-[#737373]'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                    </div>
                    <div className="service_items text-center hover:shadow-one rounded-[20px] pt-[80px] px-[50px] pb-[45px]">
                        <img src={service_two} className='mx-auto'></img>
                        <h2 className='font-inter font-bold text-[25px] text-[#151515] pt-[40px] pb-[20px]'>UI/UX Design</h2>
                        <p className='font-inter font-normal text-[16px] leading-[26px] text-[#737373]'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                    </div>
                    <div className="service_items text-center hover:shadow-one rounded-[20px] pt-[80px] px-[50px] pb-[45px]">
                        <img src={service_three} className='mx-auto'></img>
                        <h2 className='font-inter font-bold text-[25px] text-[#151515] pt-[40px] pb-[20px]'>Web Development</h2>
                        <p className='font-inter font-normal text-[16px] leading-[26px] text-[#737373]'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                    </div>
                    <div className="service_items text-center hover:shadow-one rounded-[20px] pt-[80px] px-[50px] pb-[45px]">
                        <img src={service_four} className='mx-auto'></img>
                        <h2 className='font-inter font-bold text-[25px] text-[#151515] pt-[40px] pb-[20px]'>Motion Graphics</h2>
                        <p className='font-inter font-normal text-[16px] leading-[26px] text-[#737373]'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                    </div>
                    <div className="service_items text-center hover:shadow-one rounded-[20px] pt-[80px] px-[50px] pb-[45px]">
                        <img src={service_five} className='mx-auto'></img>
                        <h2 className='font-inter font-bold text-[25px] text-[#151515] pt-[40px] pb-[20px]'>3D Animation</h2>
                        <p className='font-inter font-normal text-[16px] leading-[26px] text-[#737373]'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                    </div>
                    <div className="service_items text-center hover:shadow-one rounded-[20px] pt-[80px] px-[50px] pb-[45px]">
                        <img src={service_six} className='mx-auto'></img>
                        <h2 className='font-inter font-bold text-[25px] text-[#151515] pt-[40px] pb-[20px]'>Digital Marketing</h2>
                        <p className='font-inter font-normal text-[16px] leading-[26px] text-[#737373]'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                    </div>
                </div>
            </div>
          </section>
        </>
    )
}
export default Services
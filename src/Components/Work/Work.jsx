import work_one from '../../assets/work_one.jpg'
import work_two from '../../assets/work_two.png'
import work_three from '../../assets/work_three.png'
import work_four from '../../assets/work_four.png'
import work_five from '../../assets/work_five.png'
import work_six from '../../assets/work_six.png'
function Work() {
    return (
        <>
           <section className='bg-[#F3F3F3] pt-5 md:pt-[148px] pb-5 md:pb-[152px]'>
             <div className="container px-4 md:px-0">
                <div className="services_headline w-full md:w-[610px] mx-auto text-center ">
                    <h1 className="font-inter font-bold text-[32px] md:text-[45px] text-[#151515] pb-3 md:pb-[20px]">Our Recent Work</h1>
                    <p className="font-inter font-normal text-[16px] leading-[26px] text-[#737373] pb-[50px] ">There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-[24px]">
                    <div className="work_item bg-[#FFFFFF] rounded-[20px]">
                        <img src={work_one} alt='' className='rounded-[20px]'></img>
                        <div className="work_text py-[30px] px-[42px] text-center">
                            <h2 className='font-inter font-bold text-[20px] text-[#151515]'>Task Management App</h2>
                            <p className='font-inter font-normal text-[16px] text-[#737373] leading-[26px]'>This is a task management application that can help you be more </p>
                        </div>
                    </div>
                    <div className="work_item bg-[#FFFFFF] rounded-[20px]">
                        <img src={work_two} alt='' className='rounded-[20px]'></img>
                        <div className="work_text py-[30px] px-[42px] text-center">
                            <h2 className='font-inter font-bold text-[20px] text-[#151515]'>Saas Landing Page Design</h2>
                            <p className='font-inter font-normal text-[16px] text-[#737373] leading-[26px]'>This is a task management application that can help you be more </p>
                        </div>
                    </div>
                    <div className="work_item bg-[#FFFFFF] rounded-[20px]">
                        <img src={work_three} alt='' className='rounded-[20px]'></img>
                        <div className="work_text py-[30px] px-[42px] text-center">
                            <h2 className='font-inter font-bold text-[20px] text-[#151515]'>App Design</h2>
                            <p className='font-inter font-normal text-[16px] text-[#737373] leading-[26px]'>This is a task management application that can help you be more </p>
                        </div>
                    </div>
                    <div className="work_item bg-[#FFFFFF] rounded-[20px]">
                        <img src={work_four} alt='' className='rounded-[20px]'></img>
                        <div className="work_text py-[30px] px-[42px] text-center">
                            <h2 className='font-inter font-bold text-[20px] text-[#151515]'>Landing Page Design</h2>
                            <p className='font-inter font-normal text-[16px] text-[#737373] leading-[26px]'>This is a task management application that can help you be more </p>
                        </div>
                    </div>
                    <div className="work_item bg-[#FFFFFF] rounded-[20px]">
                        <img src={work_five} alt='' className='rounded-[20px]'></img>
                        <div className="work_text py-[30px] px-[42px] text-center">
                            <h2 className='font-inter font-bold text-[20px] text-[#151515]'>Dashboard Design</h2>
                            <p className='font-inter font-normal text-[16px] text-[#737373] leading-[26px]'>This is a task management application that can help you be more </p>
                        </div>
                    </div>
                    <div className="work_item bg-[#FFFFFF] rounded-[20px]">
                        <img src={work_six} alt='' className='rounded-[20px]'></img>
                        <div className="work_text py-[30px] px-[42px] text-center">
                            <h2 className='font-inter font-bold text-[20px] text-[#151515]'>Web App Design</h2>
                            <p className='font-inter font-normal text-[16px] text-[#737373] leading-[26px]'>This is a task management application that can help you be more </p>
                        </div>
                    </div>
                </div>
             </div>
           </section>
        </>
    )
}
export default Work